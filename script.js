
function scrollToQuote(){
    document.getElementById("quote").scrollIntoView({
        behavior: "smooth"
    });
}

// mobile navigation toggle
function toggleMenu(){
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
}

document.getElementById('navToggle').addEventListener('click', toggleMenu);

// dark mode toggle
function toggleDarkMode(){
    document.body.classList.toggle('dark');
    const btn = document.getElementById('darkToggle');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

document.getElementById('darkToggle').addEventListener('click', toggleDarkMode);

// scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));


// faq accordion
const faqItems = document.querySelectorAll('.accordion .item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// newsletter subscription
const newsletterForm = document.getElementById('newsletterForm');
if(newsletterForm){
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thanks for subscribing!');
        newsletterForm.reset();
    });
}

// simple reveal on scroll
const revealElements = document.querySelectorAll('.service-card, .project, .review');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('reveal');
        }
    });
}, {threshold:0.1});
revealElements.forEach(el => observer.observe(el));