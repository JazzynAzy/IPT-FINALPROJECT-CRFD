let ingredientCounter = 0;
let stepCounter = 0;

const requiredFields = [
    { id: 'submission-type', message: 'Please select a submission type' },
    { id: 'title', message: 'Title is required' },
    { id: 'category', message: 'Please select a category' },
    { id: 'protein', message: 'Please select a protein' },
    { id: 'description', message: 'Description is required' },
    { id: 'servings', message: 'Servings is required' },
    { id: 'prepDuration', message: 'Prep duration is required' },
    { id: 'cookDuration', message: 'Cook duration is required' },
    { id: 'difficulty', message: 'Please select a difficulty' }
];

function showFieldError(fieldId, message) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);
    if (errorEl) {
        errorEl.textContent = message;
    }
    if (inputEl) {
        inputEl.style.borderColor = '#e74c3c';
    }
}

function clearFieldError(fieldId) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);
    if (errorEl) {
        errorEl.textContent = '';
    }
    if (inputEl) {
        inputEl.style.borderColor = '';
    }
}

function validateRequiredFields() {
    let isValid = true;
    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input && !input.value.trim()) {
            showFieldError(field.id, field.message);
            isValid = false;
        } else if (input) {
            clearFieldError(field.id);
        }
    });
    return isValid;
}

document.addEventListener('DOMContentLoaded', async () => {
    addIngredientRow();
    addStepRow();

    await loadExistingRecipes();

    document.getElementById('add-ingredient').addEventListener('click', addIngredientRow);
    document.getElementById('add-step').addEventListener('click', addStepRow);
    document.getElementById('recipe-form').addEventListener('submit', handleSubmit);

    document.getElementById('submission-type').addEventListener('change', handleSubmissionTypeChange);

    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input) {
            input.addEventListener('input', () => clearFieldError(field.id));
            input.addEventListener('change', () => clearFieldError(field.id));
        }
    });
});

function addIngredientRow(data = {}) {
    ingredientCounter++;
    const container = document.getElementById('ingredients-list');
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.dataset.id = ingredientCounter;
    row.innerHTML = `
        <input type="text" name="ingredient-name" placeholder="Ingredient name" value="${escapeHtml(data.name || '')}" required>
        <input type="text" name="ingredient-quantity" placeholder="Quantity" value="${escapeHtml(data.quantity || '')}" required>
        <input type="text" name="ingredient-unit" placeholder="Unit (e.g., cups, tbsp, grams)" value="${escapeHtml(data.unit || '')}" required>
        <button type="button" class="btn-remove" aria-label="Remove ingredient"> <img src="logos/remove.png" alt="Remove"> </button>
    `;
    row.querySelector('.btn-remove').addEventListener('click', () => row.remove());
    container.appendChild(row);
}

function addStepRow(data = {}) {
    stepCounter++;
    const container = document.getElementById('steps-list');
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.dataset.id = stepCounter;
    row.innerHTML = `
        <textarea name="step-text" placeholder="Step ${stepCounter}" rows="2" required>${escapeHtml(data.text || '')}</textarea>
        <button type="button" class="btn-remove" aria-label="Remove step"> <img src="logos/remove.png" alt="Remove"> </button>
    `;
    row.querySelector('.btn-remove').addEventListener('click', () => row.remove());
    container.appendChild(row);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function extractYouTubeId(url) {
    if (!url) return null;
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

async function loadExistingRecipes() {
    try {
        const response = await fetch('/api/recipes');
        const recipes = await response.json();
        
        const select = document.getElementById('parent-recipe');
        recipes.forEach(recipe => {
            const option = document.createElement('option');
            option.value = recipe.id;
            option.textContent = recipe.name;
            select.appendChild(option);
        });
    } catch (err) {
        console.error('Failed to load recipes:', err);
    }
}

function handleSubmissionTypeChange(event) {
    const variationSelect = document.getElementById('variation-recipe-select');
    const parentRecipeSelect = document.getElementById('parent-recipe');
    
    const fieldsToDisableForVariation = ['title', 'category', 'protein', 'youtube-url', 'servings', 'prepDuration', 'cookDuration', 'difficulty'];
    
    if (event.target.value === 'variation') {
        variationSelect.style.display = 'block';
        parentRecipeSelect.required = true;
        // Add parent-recipe to required fields dynamically
        if (!requiredFields.some(f => f.id === 'parent-recipe')) {
            requiredFields.push({ id: 'parent-recipe', message: 'Please select an existing recipe' });
        }
        
        // Disable fields that are not needed for variations
        fieldsToDisableForVariation.forEach(fieldId => {
            const el = document.getElementById(fieldId);
            if (el) {
                el.disabled = true;
                el.value = '';
                clearFieldError(fieldId);
            }
            // Remove from required fields if present
            const idx = requiredFields.findIndex(f => f.id === fieldId);
            if (idx !== -1) requiredFields.splice(idx, 1);
        });
    } else {
        variationSelect.style.display = 'none';
        parentRecipeSelect.required = false;
        parentRecipeSelect.value = '';
        clearFieldError('parent-recipe');
        // Remove parent-recipe from required fields
        const idx = requiredFields.findIndex(f => f.id === 'parent-recipe');
        if (idx !== -1) requiredFields.splice(idx, 1);
        
        // Re-enable and restore required fields for new recipe
        fieldsToDisableForVariation.forEach(fieldId => {
            const el = document.getElementById(fieldId);
            if (el) {
                el.disabled = false;
            }
        });
        
        // Restore required fields
        if (!requiredFields.some(f => f.id === 'category')) {
            requiredFields.push({ id: 'category', message: 'Please select a category' });
        }
        if (!requiredFields.some(f => f.id === 'protein')) {
            requiredFields.push({ id: 'protein', message: 'Please select a protein' });
        }
        if (!requiredFields.some(f => f.id === 'servings')) {
            requiredFields.push({ id: 'servings', message: 'Servings is required' });
        }
        if (!requiredFields.some(f => f.id === 'prepDuration')) {
            requiredFields.push({ id: 'prepDuration', message: 'Prep duration is required' });
        }
        if (!requiredFields.some(f => f.id === 'cookDuration')) {
            requiredFields.push({ id: 'cookDuration', message: 'Cook duration is required' });
        }
        if (!requiredFields.some(f => f.id === 'difficulty')) {
            requiredFields.push({ id: 'difficulty', message: 'Please select a difficulty' });
        }
    }
}

async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');

    messageDiv.textContent = '';
    messageDiv.className = 'form-message';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    if (!validateRequiredFields()) {
        showMessage('Please fill in all required fields.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Recipe';
        return;
    }

    const ingredients = [];
    document.querySelectorAll('#ingredients-list .dynamic-row').forEach(row => {
        const name = row.querySelector('[name="ingredient-name"]').value.trim();
        const quantity = row.querySelector('[name="ingredient-quantity"]').value.trim();
        const unit = row.querySelector('[name="ingredient-unit"]').value.trim();
        if (name || quantity || unit) {
            ingredients.push({ name, quantity, unit });
        }
    });

    const steps = [];
    document.querySelectorAll('#steps-list .dynamic-row').forEach(row => {
        const text = row.querySelector('[name="step-text"]').value.trim();
        if (text) {
            steps.push(text);
        }
    });

    if (ingredients.length === 0) {
        showMessage('Please add at least one ingredient.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Recipe';
        return;
    }

    if (steps.length === 0) {
        showMessage('Please add at least one step.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Recipe';
        return;
    }

    const authorName = form['author-name'].value.trim() || 'Anonymous';
    const submissionType = form['submission-type'].value;
    const parentRecipeId = form['parent-recipe'].value;
    const youtubeUrl = form['youtube-url'].value.trim();
    const youtubeId = extractYouTubeId(youtubeUrl);

    if (youtubeUrl && !youtubeId) {
        showMessage('Invalid YouTube URL. Please check the link.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Recipe';
        return;
    }

    const formData = {
        name: form.title.value.trim(),
        authorName: authorName,
        mealType: form.category.value,
        proteinType: form.protein.value,
        description: form.description.value.trim(),
        servings: parseInt(form.servings.value, 10),
        prepDuration: form.prepDuration.value.trim(),
        cookDuration: form.cookDuration.value.trim(),
        difficulty: form.difficulty.value,
        ingredients,
        steps,
        variations: [],
        submissionType: submissionType,
        parentRecipeId: submissionType === 'variation' ? parentRecipeId : null,
        youtubeId: youtubeId
    };

    try {
        const response = await fetch('/api/submissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok && result.ok) {
            showMessage('Recipe submitted successfully! Thank you for sharing your recipe. It will be viewed and reviewed by our team.', 'success');
            form.reset();
            document.getElementById('ingredients-list').innerHTML = '';
            document.getElementById('steps-list').innerHTML = '';
            ingredientCounter = 0;
            stepCounter = 0;
            addIngredientRow();
            addStepRow();
        } else {
            showMessage(result.error || "That didn't work. Please try again.", 'error');
        }
    } catch (err) {
        console.error(err);
        showMessage('Uh oh. Network error. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Recipe';
    }
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = text;
    messageDiv.className = `form-message ${type}`;
}