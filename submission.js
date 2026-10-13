let ingredientCounter = 0;
let stepCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    addIngredientRow();
    addStepRow();

    document.getElementById('add-ingredient').addEventListener('click', addIngredientRow);
    document.getElementById('add-step').addEventListener('click', addStepRow);
    document.getElementById('recipe-form').addEventListener('submit', handleSubmit);
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
        <button type="button" class="btn-remove" aria-label="Remove ingredient">Remove</button>
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
        <button type="button" class="btn-remove" aria-label="Remove step">Remove</button>
    `;
    row.querySelector('.btn-remove').addEventListener('click', () => row.remove());
    container.appendChild(row);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

    const formData = {
        name: form.title.value.trim(),
        mealType: form.category.value,
        proteinType: form.protein.value,
        description: form.description.value.trim(),
        servings: parseInt(form.servings.value, 10),
        prepDuration: form.prepDuration.value.trim(),
        cookDuration: form.cookDuration.value.trim(),
        difficulty: form.difficulty.value,
        ingredients,
        steps,
        variations: []
    };

    try {
        const response = await fetch('/api/submissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok && result.ok) {
            showMessage('Recipe submitted successfully! It will be reviewed by an admin.', 'success');
            form.reset();
            document.getElementById('ingredients-list').innerHTML = '';
            document.getElementById('steps-list').innerHTML = '';
            ingredientCounter = 0;
            stepCounter = 0;
            addIngredientRow();
            addStepRow();
        } else {
            showMessage(result.error || 'Failed to submit recipe. Please try again.', 'error');
        }
    } catch (err) {
        console.error(err);
        showMessage('Network error. Please try again.', 'error');
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