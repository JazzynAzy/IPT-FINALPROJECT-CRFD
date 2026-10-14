const express = require('express');
const cors = require('cors');
const path = require('path');
const recipes = require('./recipes.js');

const cookieParser = require('cookie-parser');

const { readSubmissions, writeSubmissions } = require('./jsonbin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


// Auth middleware
function requireAdmin(req, res, next) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD env var is not set!');
    return res.status(500).json({ error: 'Server misconfigured' });
  }
  if (req.cookies.admin_token === adminPassword) {
    // Reset cookie for sliding expiration (5 minutes)
    res.cookie('admin_token', adminPassword, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 5 // 5 minutes
    });
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized' });
}

// Auth middleware for HTML admin pages
function requireAdminHtml(req, res, next) {
  // Only protect admin.html
  if (req.path === '/admin.html' || req.path === 'admin.html') {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD env var is not set!');
      return res.status(500).json({ error: 'Server misconfigured' });
    }
    if (req.cookies.admin_token === adminPassword) {
      // Reset cookie for sliding expiration (5 minutes)
      res.cookie('admin_token', adminPassword, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 5 // 5 minutes
      });
      return next();
    }
    // Not authenticated, redirect to login
    return res.redirect('/admin-login.html');
  }
  next();
}
 
app.use(requireAdminHtml);

app.use(express.static(path.join(__dirname)));

// Public: submit a recipe
app.post('/api/submissions', async (req, res) => {
  try {
    const body = req.body;

    // Required fields
    if (!body.name || !body.mealType || !body.proteinType || !body.description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!Array.isArray(body.ingredients) || body.ingredients.length === 0) {
      return res.status(400).json({ error: 'At least one ingredient is required' });
    }
    if (!Array.isArray(body.steps) || body.steps.length === 0) {
      return res.status(400).json({ error: 'At least one step is required' });
    }

    // Validate YouTube ID if provided (11 chars, safe alphabet)
    if (body.youtubeId && !/^[A-Za-z0-9_-]{11}$/.test(body.youtubeId)) {
      return res.status(400).json({ error: 'Invalid YouTube video ID' });
    }

    // Validate variation parent
    if (body.submissionType === 'variation') {
      if (!body.parentRecipeId) {
        return res.status(400).json({ error: 'Variation requires a parent recipe' });
      }
      const parentExists = recipes.some(r => r.id === body.parentRecipeId);
      if (!parentExists) {
        return res.status(400).json({ error: 'Recipe not found.' });
      }
    }

    const submissions = await readSubmissions();
    const newSubmission = {
      id: `sub_${Date.now()}`,
      ...req.body,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    submissions.push(newSubmission);
    await writeSubmissions(submissions);
    res.json({ ok: true, id: newSubmission.id });
  } catch (err) {
    console.error('Failed to submit recipe:', err);
    res.status(500).json({ error: 'Failed to submit recipe. Please try again.' });
  }
});

  // Admin: list pending
  app.get('/api/submissions', requireAdmin, async (req, res) => {
    try {
      const pending = (await readSubmissions()).filter(s => s.status === 'pending');
      res.json(pending);
    } catch (err) {
      console.error('Failed to load pending submissions:', err);
      res.status(500).json({ error: 'Failed to load pending submissions. Please try again.' });
    }
  });


// Admin: approve
app.post('/api/submissions/:id/approve', requireAdmin, async (req, res) => {
  try {
    const submissions = await readSubmissions();
    const sub = submissions.find(s => s.id === req.params.id);
    if (!sub) return res.status(404).json({ error: 'Not found' });
    sub.status = 'approved';
    sub.approvedAt = new Date().toISOString();
    await writeSubmissions(submissions);
    res.json({ ok: true });
  } catch (err) {
    console.error('Failed to approve submission:', err);
    res.status(500).json({ error: 'Failed to approve submission. Please try again.' });
  }
});

// Admin: reject
app.post('/api/submissions/:id/reject', requireAdmin, async (req, res) => {
  try {
    const submissions = await readSubmissions();
    const filtered = submissions.filter(s => s.id !== req.params.id);
    await writeSubmissions(filtered);
    res.json({ ok: true });
  } catch (err) {
    console.error('Failed to reject submission:', err);
    res.status(500).json({ error: 'Failed to reject submission. Please try again.' });
  }
});

// Admin: login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD env var is not set!');
    return res.status(500).json({ error: 'Server misconfigured' });
  }
  if (password === adminPassword) {
    res.cookie('admin_token', adminPassword, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 5 // 5 minutes
    });
    return res.json({ ok: true });
  }
  res.status(401).json({ error: 'Wrong password' });
});
 
// Admin: logout
app.get('/admin/logout', (req, res) => {
  res.clearCookie('admin_token', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/'
  });
  res.redirect('/admin-login.html');
});

// API Routes
app.get('/api/recipes', async (req, res) => {
  try {
    const approved = (await readSubmissions()).filter(s => s.status === 'approved');

    // Split into new recipes vs. variations
    const newRecipes = approved
    .filter(s => s.submissionType !== 'variation')
    .map(({ submissionType, parentRecipeId, authorName, submittedAt, approvedAt, status, ...rest }) => rest);
    const variations = approved.filter(s => s.submissionType === 'variation');

    // Merge each variation into its parent recipe
    const mergedRecipes = recipes.map(recipe => {
      const matchingVariations = variations
        .filter(v => v.parentRecipeId === recipe.id)
        .map(v => ({
          label: v.name,
          description: v.description,
          ingredients: v.ingredients,
          steps: v.steps
        }));

      if (matchingVariations.length === 0) return recipe;
      return {
        ...recipe,
        variations: [...(recipe.variations || []), ...matchingVariations]
      };
    });

    res.json([...mergedRecipes, ...newRecipes]);
  } catch (err) {
    console.error('Failed to load recipes:', err);
    res.status(500).json({ error: 'Failed to load recipes' });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const approved = (await readSubmissions()).filter(s => s.status === 'approved');
    const variations = approved.filter(
      s => s.submissionType === 'variation' && s.parentRecipeId === req.params.id
    );

    const baseRecipe = recipes.find(r => r.id === req.params.id);

    // Allow fetching a submitted new recipe directly too
    if (!baseRecipe) {
      const submittedRecipe = approved.find(
        s => s.id === req.params.id && s.submissionType !== 'variation'
      );
      if (!submittedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      return res.json(submittedRecipe);
    }

    const mergedVariations = variations.map(v => ({
      label: v.name,
      description: v.description,
      ingredients: v.ingredients,
      steps: v.steps
    }));

    res.json({
      ...baseRecipe,
      variations: [...(baseRecipe.variations || []), ...mergedVariations]
    });
  } catch (err) {
    console.error('Failed to load recipe:', err);
    res.status(500).json({ error: 'Failed to load recipe' });
  }
});

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get('/homepage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/recipe.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  GET /api/recipes - Get all recipes`);
    console.log(`  GET /api/recipes/:id - Get single recipe`);
});