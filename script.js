// Smooth scrolling for navigation links
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

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add parallax effect to hero header (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
        heroHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to the main title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.hero-header h1');
    if (titleElement) {
        const originalText = titleElement.textContent;
        // Uncomment the line below if you want the typing effect
        // typeWriter(titleElement, originalText, 150);
    }
});

// Add smooth reveal animation for cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

// Observe project and activity cards
document.querySelectorAll('.project-card, .activity-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// Add skill animation on scroll
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skills-list li');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'scale(1) translateY(0)';
                }, index * 50);
            });
        }
    });
}, { threshold: 0.3 });

// Observe skills section
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const skillItems = skillsSection.querySelectorAll('.skills-list li');
    skillItems.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'scale(0.8) translateY(20px)';
        skill.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    skillsObserver.observe(skillsSection);
}

// Add certificate animation
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const certs = entry.target.querySelectorAll('.certifications-list li');
            certs.forEach((cert, index) => {
                setTimeout(() => {
                    cert.style.opacity = '1';
                    cert.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

// Observe certifications section
const certSection = document.querySelector('.certifications-section');
if (certSection) {
    const certItems = certSection.querySelectorAll('.certifications-list li');
    certItems.forEach(cert => {
        cert.style.opacity = '0';
        cert.style.transform = 'translateX(-30px)';
        cert.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    certObserver.observe(certSection);
}