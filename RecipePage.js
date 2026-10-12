document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    const container = document.getElementById('recipe-container');

    // Fetch recipe from API
    async function fetchRecipe() {
        try {
            const response = await fetch(`/api/recipes/${recipeId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    container.innerHTML = '<p>Recipe not found. <a href="homepage.html">Back to homepage</a></p>';
                    return;
                }
                throw new Error('Failed to fetch recipe');
            }
            const recipe = await response.json();
            renderRecipe(recipe);
        } catch (error) {
            console.error('Error fetching recipe:', error);
            container.innerHTML = '<p>Unable to load recipe. Please try again later.</p>';
        }
    }

    // Helper: format quantity
    function formatQty(qty) {
        if (typeof qty === 'number') {
            if (qty === 0.5) return '1/2';
            if (qty === 0.25) return '1/4';
            if (qty === 0.75) return '3/4';
            return qty;
        }
        return qty;
    }

    // Helper: render ingredients list
    function renderIngredients(ingredients) {
        return `
            <ul class="ingredients-list">
                ${ingredients.map(i => `
                    <li>
                    <span class="qty">${formatQty(i.quantity)}</span> 
                    <span class="unit">${i.unit || ''}</span> 
                    <span class="name">${i.name}</span></li>
                `).join('')}
            </ul>
        `;
    }

    // Helper: render steps list
    function renderSteps(steps) {
        return `
            <ul class="steps-list">
                ${steps.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
    }

    function renderMeta(recipe) {
        return `
            <div class="recipe-meta">
                <div class="meta-item">
                    <span class="meta-icon"> <img src="logos/clock-fading.png" alt="Prep Time"> </span>
                    <span class="meta-label">Prep:</span> ${recipe.prepDuration}
                </div>
                <div class="meta-item">
                    <span class="meta-icon"> <img src="logos/cooking-pot.png" alt="Cook Time"> </span>
                    <span class="meta-label">Cook:</span> ${recipe.cookDuration}
                </div>
                <div class="meta-item">
                    <span class="meta-icon"> <img src="logos/mountain.png" alt="Difficulty"> </span>
                    <span class="meta-label">Difficulty:</span> ${recipe.difficulty}
                </div>
                <div class="meta-item">
                    <span class="meta-icon"> <img src="logos/utensils.png" alt="Serves"> </span>
                    <span class="meta-label">Serves:</span> ${recipe.servings}
                </div>
            </div>
        `;
    }

    // Helper: render variations tab content
    function renderVariations(recipe) {
        if (!recipe.variations || recipe.variations.length === 0) {
            return '<p>No variations available for this recipe.</p>';
        }

        const variationTabs = recipe.variations.map((v, i) => `
            <button class="variation-tab-button ${i === 0 ? 'active' : ''}" data-variation="${i}">${v.label}</button>
        `).join('');

        const variationPanes = recipe.variations.map((v, i) => `
            <div class="variation-pane ${i === 0 ? 'active' : ''}" data-variation="${i}">
                ${v.description ? `<p class="variation-description">${v.description}</p>` : ''}
                ${v.ingredients ? `<h4>Ingredients</h4>${renderIngredients(v.ingredients)}` : ''}
                ${v.steps ? `<h4>Steps</h4>${renderSteps(v.steps)}` : ''}
            </div>
        `).join('');

        return `
            <div class="variation-tab-header">
                ${variationTabs}
            </div>
            ${variationPanes}
        `;
    }

    // Render full recipe page
    function renderRecipe(recipe) {
        container.innerHTML = `
            <div class="recipe-header">
                <h1>${recipe.name}</h1>
                <p>${recipe.description}</p>
            </div>

            <div class="recipe-main-image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/C1ZTHN1DH-s?si=T4SvNhNG7uOsi8i0&controls=0" 
                title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            ${renderMeta(recipe)}

            <div class="tabs">
                <div class="tab-header">
                    <button class="tab-button active" data-tab="recipe">Recipe</button>
                    <button class="tab-button" data-tab="variations">Variations</button>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab-recipe">
                        <div class="recipe-section">
                            <h3>Ingredients</h3>
                            ${renderIngredients(recipe.ingredients)}
                        </div>
                        <div class="recipe-section">
                            <h3>Instructions</h3>
                            ${renderSteps(recipe.steps)}
                        </div>
                    </div>
                    <div class="tab-pane" id="tab-variations">
                        <div class="recipe-section">
                            ${renderVariations(recipe)}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Tab switching logic
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', function () {
                const tabId = this.dataset.tab;
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(`tab-${tabId}`).classList.add('active');
            });
        });

        // Variation sub-tab switching logic
        document.querySelectorAll('.variation-tab-button').forEach(button => {
            button.addEventListener('click', function () {
                const varId = this.dataset.variation;
                document.querySelectorAll('.variation-tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.variation-pane').forEach(pane => pane.classList.remove('active'));
                this.classList.add('active');
                document.querySelector(`.variation-pane[data-variation="${varId}"]`).classList.add('active');
            });
        });
    }

    // Initial fetch
    if (recipeId) {
        fetchRecipe();
    } else {
        container.innerHTML = '<p>Recipe not found. <a href="homepage.html">Back to homepage</a></p>';
    }
});