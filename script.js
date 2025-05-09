// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 200);
    });
};

// Intersection Observer for progress bars
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill').forEach(skill => {
    observer.observe(skill);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = contactForm.querySelector('.btn-primary');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            // Remove loading state
            submitBtn.classList.remove('loading');
            
            // Show success message (you can customize this)
            alert('Message sent successfully!');
            
            // Reset form
            contactForm.reset();
        }, 2000); // Simulate 2 second delay
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typewriter effect
function typeSubtitleText() {
    const el = document.getElementById('subtitle-text');
    if (!el) return;
    
    const phrases = [
        'Passionate about clean code and design.',
        'Building modern web experiences.',
        'Always learning. Always coding.',
        "Let's create something amazing together!"
    ];
    
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let cursorInterval = null;

    function updateText(text, showCursor) {
        el.innerHTML = text + (showCursor ? '<span class="cursor">|</span>' : '<span class="cursor" style="opacity: 0">|</span>');
    }

    function type() {
        const currentPhrase = phrases[phraseIdx];
        
        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        const currentText = currentPhrase.substring(0, charIdx);
        updateText(currentText, true);

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIdx === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            typeSpeed = 500; // Pause before starting new phrase
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    type();
}

// Start typewriter effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    typeSubtitleText();
});

// Go to Top Button
const goToTopButton = document.getElementById('goToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goToTopButton.classList.add('visible');
    } else {
        goToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});