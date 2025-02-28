// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '') return; // Skip empty hrefs
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "-50px"
});

// Function to start animations
function startAnimations() {
    const animateElements = document.querySelectorAll('.intro, .aside, .card, .video-yt, .title-service, .title-portfolio');
    
    // Add hidden class and observe each element
    animateElements.forEach((el, index) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
}

// Start animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    startAnimations();
}); 