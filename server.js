const express = require('express');
const cors = require('cors');
const path = require('path');
const recipes = require('./recipes.js');

const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Where submissions live — uses Render's disk path if available
const SUBMISSIONS_FILE = path.join(
  process.env.RENDER_DISK_PATH || __dirname,
  'submissions.json'
);

// Ensure the file exists on boot
if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([]));
}

function readSubmissions() {
  return JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf-8'));
}

function writeSubmissions(data) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2));
}

// Auth middleware
function requireAdmin(req, res, next) {
  if (req.cookies.admin_token === process.env.ADMIN_PASSWORD) {
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized' });
}

// Public: submit a recipe
app.post('/api/submissions', (req, res) => {
  const submissions = readSubmissions();
  const newSubmission = {
    id: `sub_${Date.now()}`,
    ...req.body,
    status: 'pending',
    submittedAt: new Date().toISOString()
  };
  submissions.push(newSubmission);
  writeSubmissions(submissions);
  res.json({ ok: true, id: newSubmission.id });
});

// Admin: list pending
app.get('/api/submissions', requireAdmin, (req, res) => {
  const pending = readSubmissions().filter(s => s.status === 'pending');
  res.json(pending);
});

// Admin: approve
app.post('/api/submissions/:id/approve', requireAdmin, (req, res) => {
  const submissions = readSubmissions();
  const sub = submissions.find(s => s.id === req.params.id);
  if (!sub) return res.status(404).json({ error: 'Not found' });
  sub.status = 'approved';
  sub.approvedAt = new Date().toISOString();
  writeSubmissions(submissions);
  res.json({ ok: true });
});

// Admin: reject
app.post('/api/submissions/:id/reject', requireAdmin, (req, res) => {
  const submissions = readSubmissions();
  const filtered = submissions.filter(s => s.id !== req.params.id);
  writeSubmissions(filtered);
  res.json({ ok: true });
});

// Admin: login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    res.cookie('admin_token', password, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    });
    return res.json({ ok: true });
  }
  res.status(401).json({ error: 'Wrong password' });
});

// Update /api/recipes to include approved submissions
app.get('/api/recipes', (req, res) => {
  const approved = readSubmissions().filter(s => s.status === 'approved');
  res.json([...recipes, ...approved]);
});

// API Routes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === req.params.id);
    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
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