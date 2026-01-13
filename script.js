
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    // Dark theme class add/remove karein
    body.classList.toggle('dark-theme');

    // Icon change karein (Moon to Sun and vice versa)
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        icon.style.color = '#ffdb58'; // Yellow color for sun
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        icon.style.color = 'inherit';
    }
    
    // Theme preference ko browser mein save karne ke liye
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

// 2. Check for saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
        icon.style.color = '#ffdb58';
    }
});

// 3. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Agar link internal hai (# se shuru hota hai)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 4. Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.8rem 10%';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1rem 10%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});