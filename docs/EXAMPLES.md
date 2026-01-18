# Code Examples

## Dark Mode Implementation
```javascript
// State
const state = { theme: 'light' };

// Load from localStorage
function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    state.theme = saved;
    document.body.setAttribute('data-theme', saved);
}

// Toggle function
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
}

// CSS
[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #ffffff;
}
```

## Modal with Keyboard Support
```javascript
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Click overlay
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});
```

## Scroll Effect with Throttling
```javascript
let scrollTimeout;

function handleScroll() {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
}

window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
    }, 100);
});
```

## Form Validation
```javascript
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email.value)) {
        showError(email, 'Email tidak valid');
        return;
    }
    
    // Submit form
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add('error');
}
```

## Lazy Loading Images
```javascript
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

## Toast Notification
```javascript
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// CSS
.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 2rem;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s;
}

.toast.show {
    opacity: 1;
    transform: translateY(0);
}
```