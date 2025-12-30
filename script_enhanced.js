// ===============================
// Dark Mode Toggle
// ===============================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Inject dark-mode text fix CSS (IMPORTANT)
const darkTextFix = document.createElement('style');
darkTextFix.textContent = `
    body.dark-mode .hero-title,
    body.dark-mode .hero-subtitle,
    body.dark-mode .intro-text {
        color: #ffffff !important;
        text-shadow: 0 0 10px rgba(255,255,255,0.25);
    }
`;
document.head.appendChild(darkTextFix);

// Load saved preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        themeToggle.textContent = isNowDark ? '☀️' : '🌙';
    });
}

// ===============================
// Smooth Scrolling
// ===============================
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

// ===============================
// Active Navigation Highlight
// ===============================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===============================
// Scroll Reveal Animation
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.education-item, .project-card, .certificate-item, .skill-category'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===============================
// Contact Form → Open Gmail Compose
// ===============================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput?.value?.trim() || 'Visitor';
        const email = emailInput?.value?.trim() || 'Not provided';
        const message = messageInput?.value?.trim() || '';

        // Build subject & body for Gmail
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            '',
            'Message:',
            message
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));

        // Open Gmail compose with your email as receiver
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Prashantikkalaki143@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
    });
}

// ===============================
// Navbar Active Style Injection
// ===============================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--secondary-color);
        border-bottom: 3px solid var(--secondary-color);
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// ===============================
// Image Lazy Loading
// ===============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img =>
        imageObserver.observe(img)
    );
}

// ===============================
// Init Log
// ===============================
console.log('Portfolio loaded successfully!');
