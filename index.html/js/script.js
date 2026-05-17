// BarCo Coffee Shop - Main JavaScript File

// Dark Mode Toggle
function initDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    
    if (darkModeBtn) {
        // Check if dark mode was previously enabled
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️ Light Mode';
        }
        
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeBtn.textContent = '☀️ Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeBtn.textContent = '🌙 Dark Mode';
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animation - Fade in elements when they come into view
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card, .review-card, section').forEach(el => {
        observer.observe(el);
    });
}

// Form Validation for Contact Page
function validateContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    
    let isValid = true;
    
    // Simple validation
    if (!name || name.value.trim() === '') {
        alert('Please enter your name');
        isValid = false;
    }
    
    if (!email || !isValidEmail(email.value)) {
        alert('Please enter a valid email address');
        isValid = false;
    }
    
    if (!message || message.value.trim() === '') {
        alert('Please enter a message');
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }
    
    return false;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile Menu Toggle (if needed)
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Navbar Active Link Highlighting
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage) {
            link.style.color = '#C4A484';
            link.style.fontWeight = 'bold';
        } else {
            link.style.color = '#FFFFFF';
            link.style.fontWeight = '500';
        }
    });
}

// Initialize all functions on page load
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
    updateActiveNavLink();
});
