document.addEventListener('DOMContentLoaded', async function () {
    const recipesContainer = document.getElementById('recipes');
    const filterBar = document.getElementById('filter-bar');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    let recipes = [];

    // Fetch recipes from API
    async function fetchRecipes() {
        try {
            const response = await fetch('/api/recipes');
            if (!response.ok) throw new Error('Failed to fetch recipes');
            recipes = await response.json();
            initFilters();
            renderRecipes();
        } catch (error) {
            console.error('Error fetching recipes:', error);
            recipesContainer.innerHTML = '<p class="no-results">Unable to load recipes. Please try again later.</p>';
        }
    }

    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];
    const proteinTypes = ['Chicken', 'Pork', 'Fish', 'Beef', 'Other'];

    // Build meal type filter group
    function initFilters() {
        filterBar.innerHTML = '';

        const mealGroup = document.createElement('div');
        mealGroup.className = 'filter-group';

        const allMealBtn = document.createElement('button');
        allMealBtn.className = 'filter-btn active';
        allMealBtn.dataset.filter = 'all-meal';
        allMealBtn.dataset.type = 'meal';
        allMealBtn.textContent = 'All Meals';
        mealGroup.appendChild(allMealBtn);

        mealTypes.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.filter = type;
            btn.dataset.type = 'meal';
            btn.textContent = type;
            mealGroup.appendChild(btn);
        });

        filterBar.appendChild(mealGroup);

        // Build protein type filter group
        const proteinGroup = document.createElement('div');
        proteinGroup.className = 'filter-group';

        const allProteinBtn = document.createElement('button');
        allProteinBtn.className = 'filter-btn active';
        allProteinBtn.dataset.filter = 'all-protein';
        allProteinBtn.dataset.type = 'protein';
        allProteinBtn.textContent = 'All Proteins';
        proteinGroup.appendChild(allProteinBtn);

        proteinTypes.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.filter = type;
            btn.dataset.type = 'protein';
            btn.textContent = type;
            proteinGroup.appendChild(btn);
        });

        filterBar.appendChild(proteinGroup);
    }

    // Render recipe cards
    function renderRecipes(mealFilter = 'all-meal', proteinFilter = 'all-protein', searchTerm = '') {
        const filtered = recipes.filter(r => {
            const matchesMeal = mealFilter === 'all-meal' || r.mealType === mealFilter;
            const matchesProtein = proteinFilter === 'all-protein' || r.proteinType === proteinFilter;
            const matchesSearch = searchTerm === '' ||
                r.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesMeal && matchesProtein && matchesSearch;
        });

        if (filtered.length === 0) {
            recipesContainer.innerHTML = '<p class="no-results">No recipes found. Try a different search term.</p>';
            return;
        }

        recipesContainer.innerHTML = filtered.map(r => `
            <a href="recipe.html?id=${r.id}" class="recipe-card-link">
                <div class="recipe-card">
                    <div class="recipe-image-wrapper">
                        <img src="${r.image}" alt="${r.name}">
                        <div class="recipe-overlay">
                            <i class="fas fa-play recipe-overlay-icon"></i>
                        </div>
                    </div>
                    <h3>${r.name}</h3>
                </div>
            </a>
        `).join('');
    }

    // Get active filters from both groups
    function getActiveFilters() {
        const mealFilter = filterBar.querySelector('.filter-group:first-child .filter-btn.active').dataset.filter;
        const proteinFilter = filterBar.querySelector('.filter-group:last-child .filter-btn.active').dataset.filter;
        return { mealFilter, proteinFilter };
    }

    // Filter button events (delegated)
    filterBar.addEventListener('click', function (e) {
        if (e.target.classList.contains('filter-btn')) {
            const filterType = e.target.dataset.type;
            const group = e.target.closest('.filter-group');
            group.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const filters = getActiveFilters();
            renderRecipes(filters.mealFilter, filters.proteinFilter, searchInput.value);
        }
    });

    // Search events
    searchButton.addEventListener('click', () => {
        const filters = getActiveFilters();
        renderRecipes(filters.mealFilter, filters.proteinFilter, searchInput.value);
    });

    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            const filters = getActiveFilters();
            renderRecipes(filters.mealFilter, filters.proteinFilter, this.value);
        }
    });

    // Initial fetch
    fetchRecipes();
});