
function scrollToQuote(){
    document.getElementById("quote").scrollIntoView({
        behavior: "smooth"
    });
}

function openReviewForm(){
    let review = prompt("Write your review for WebsiteMax:");
    if(review){
        alert("Thank you for your feedback! ⭐");
    }
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

// quote modal
const quoteModal = document.getElementById('quoteModal');
const modalClose = document.getElementById('modalClose');
function openQuoteModal(){
    if(quoteModal) quoteModal.style.display = 'block';
}
function closeQuoteModal(){
    if(quoteModal) quoteModal.style.display = 'none';
}
if(modalClose){
    modalClose.addEventListener('click', closeQuoteModal);
}
window.addEventListener('click', (e) => {
    if(e.target === quoteModal){
        closeQuoteModal();
    }
});

// close modal when quote form submits
const quoteFormModal = document.getElementById('quoteFormModal');
if(quoteFormModal){
    quoteFormModal.addEventListener('submit', () => {
        setTimeout(closeQuoteModal, 500);
    });
}


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

// handle review form submission
const reviewForm = document.getElementById('reviewForm');
if(reviewForm){
    reviewForm.addEventListener('submit', function(e){
        e.preventDefault();
        const selected = document.querySelector('input[name="stars"]:checked');
        const rating = selected ? selected.value : 0;
        const text = document.getElementById('reviewText').value.trim();
        const name = document.getElementById('reviewName').value.trim();
        if(rating && text && name){
            addReviewCard(rating, text, name);
            this.reset();
            // scroll to new review
            const reviewsSection = document.getElementById('reviews');
            reviewsSection.scrollIntoView({behavior:'smooth'});
        }
    });
}

function addReviewCard(rating, text, name){
    const container = document.createElement('div');
    container.className = 'review';
    const stars = '★'.repeat(rating);
    container.innerHTML = `
        <img class="avatar" src="https://via.placeholder.com/60" alt="${name}">
        <div class="stars">${stars}</div>
        <p>"${text}"</p>
        <b>— ${name}</b>
    `;
    // insert before the form
    reviewForm.parentNode.insertBefore(container, reviewForm);
}

// modified openReviewForm to scroll to inline form
function openReviewForm(){
    const form = document.getElementById('reviewForm');
    if(form){
        form.scrollIntoView({behavior:'smooth'});
        form.querySelector('input[name="stars"]').focus();
    }
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