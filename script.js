// STATE MANAGEMENT (Manual)
const state = {
    theme: localStorage.getItem('theme') || 'light',
    isModalOpen: false,
    isScrolled: false
};

// DOM ELEMENTS
const elements = {
    navbar: document.getElementById('navbar'),
    themeToggle: document.getElementById('themeToggle'),
    openModalBtn: document.getElementById('openModal'),
    closeModalBtn: document.getElementById('closeModal'),
    closeModalX: document.getElementById('closeModalBtn'),
    modalOverlay: document.getElementById('modalOverlay'),
    modal: document.getElementById('modal')
};

// FITUR 1: DARK MODE TOGGLE
function initTheme() {
    document.body.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    console.log('Theme changed to:', state.theme);
}

elements.themeToggle.addEventListener('click', toggleTheme);

// FITUR 2: MODAL POPUP
function openModal() {
    state.isModalOpen = true;
    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    state.isModalOpen = false;
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

elements.openModalBtn.addEventListener('click', openModal);
elements.closeModalBtn.addEventListener('click', closeModal);
elements.closeModalX.addEventListener('click', closeModal);

// Click overlay untuk close (EVENT BUBBLING)
elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) {
        closeModal();
    }
});

// Keyboard support (ESC)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.isModalOpen) {
        closeModal();
    }
});

// FITUR 3: NAVBAR SCROLL EFFECT
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50 && !state.isScrolled) {
        state.isScrolled = true;
        elements.navbar.classList.add('scrolled');
    } else if (scrollPosition <= 50 && state.isScrolled) {
        state.isScrolled = false;
        elements.navbar.classList.remove('scrolled');
    }
}

// Scroll listener dengan THROTTLING
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
    }, 100);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// INITIALIZATION
function init() {
    initTheme();
    console.log('App initialized');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}