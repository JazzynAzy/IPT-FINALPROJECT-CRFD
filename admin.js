async function fetchSubmissions() {
    try {
        const response = await fetch('/api/submissions', {
            credentials: 'include'
        });

        if (response.status === 401) {
            window.location.href = 'admin-login.html';
            return [];
        }

        if (!response.ok) {
            throw new Error('Failed to fetch submissions');
        }

        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderIngredients(ingredients) {
    if (!ingredients || ingredients.length === 0) return '<p>No ingredients</p>';
    return `
        <ul class="ingredients-list">
            ${ingredients.map(ing => `
                <li>${escapeHtml(ing.quantity)} ${escapeHtml(ing.unit)} ${escapeHtml(ing.name)}</li>
            `).join('')}
        </ul>
    `;
}

function renderSteps(steps) {
    if (!steps || steps.length === 0) return '<p>No steps</p>';
    return `
        <ul class="steps-list">
            ${steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
        </ul>
    `;
}

function createSubmissionCard(submission) {
    const card = document.createElement('div');
    card.className = 'submission-card';
    card.dataset.id = submission.id;

    const submitterName = submission.authorName || 'Anonymous';
    const submittedAt = submission.submittedAt ? formatDate(submission.submittedAt) : 'Unknown date';

    card.innerHTML = `
        <div class="submission-card-header">
            <h3>${escapeHtml(submission.name)}</h3>
            <div class="submission-meta">
                <span><span class="label">Category:</span> ${escapeHtml(submission.mealType)}</span>
                <span><span class="label">Protein:</span> ${escapeHtml(submission.proteinType)}</span>
                <span><span class="label">Submitted by:</span> ${escapeHtml(submitterName)}</span>
                <span><span class="label">Date:</span> ${escapeHtml(submittedAt)}</span>
            </div>
            <button type="button" class="btn-view" data-action="toggle-view"> <img src="logos/view.png" alt="View"></button>
        </div>
        <div class="submission-card-body">
            <h4>Description</h4>
            <p>${escapeHtml(submission.description)}</p>
            <h4>Meta</h4>
            <ul class="meta-list" style="list-style: none; padding: 0;">
                <li><strong>Servings:</strong> ${escapeHtml(String(submission.servings))}</li>
                <li><strong>Prep Duration:</strong> ${escapeHtml(submission.prepDuration)}</li>
                <li><strong>Cook Duration:</strong> ${escapeHtml(submission.cookDuration)}</li>
                <li><strong>Difficulty:</strong> ${escapeHtml(submission.difficulty)}</li>
            </ul>
            <h4>Ingredients</h4>
            ${renderIngredients(submission.ingredients)}
            <h4>Steps</h4>
            ${renderSteps(submission.steps)}
        </div>
        <div class="submission-actions">
            <button type="button" class="btn-approve" data-action="approve"> <img src="logos/approve.png" alt="Approve"> Approve</button>
            <button type="button" class="btn-reject" data-action="reject"> <img src="logos/reject.png" alt="Reject"> Reject</button>
        </div>
    `;

    card.querySelector('[data-action="toggle-view"]').addEventListener('click', (e) => {
        const body = card.querySelector('.submission-card-body');
        const btn = e.target;
        body.classList.toggle('expanded');
        btn.innerHTML = body.classList.contains('expanded') ? '<img src="logos/hide.png" alt="Hide">' : '<img src="logos/view.png" alt="View">';
    });

    card.querySelector('[data-action="approve"]').addEventListener('click', () => handleAction(submission.id, 'approve'));
    card.querySelector('[data-action="reject"]').addEventListener('click', () => handleAction(submission.id, 'reject'));

    return card;
}

async function handleAction(id, action) {
    if (!confirm(`Are you sure you want to ${action} this submission?`)) return;

    try {
        const response = await fetch(`/api/submissions/${id}/${action}`, {
            method: 'POST',
            credentials: 'include'
        });

        if (response.status === 401) {
            window.location.href = 'admin-login.html';
            return;
        }

        if (!response.ok) {
            throw new Error(`Failed to ${action} submission`);
        }

        const card = document.querySelector(`.submission-card[data-id="${id}"]`);
        if (card) {
            card.remove();
        }

        checkEmptyState();
    } catch (err) {
        console.error(err);
        alert(`Failed to ${action} submission. Please try again.`);
    }
}

function checkEmptyState() {
    const list = document.getElementById('submissions-list');
    const cards = list.querySelectorAll('.submission-card');
    if (cards.length === 0) {
        list.innerHTML = '<div class="no-submissions">No pending submissions.</div>';
    }
}

async function initDashboard() {
    const list = document.getElementById('submissions-list');
    list.innerHTML = '<div class="loading">Loading submissions...</div>';

    const submissions = await fetchSubmissions();

    if (submissions.length === 0) {
        list.innerHTML = '<div class="no-submissions">No pending submissions.</div>';
        return;
    }

    list.innerHTML = '';
    submissions.forEach(submission => {
        const card = createSubmissionCard(submission);
        list.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initDashboard);