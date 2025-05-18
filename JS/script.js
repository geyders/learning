// faq-section
function faqAnswer() {
    const items = document.querySelectorAll('.faq-item');
    if (items.length === 0) return;

    items.forEach(item => {
        const faqBtn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        faqBtn.addEventListener('click', () => {
            faqBtn.classList.toggle('active');
            faqBtn.classList.toggle('inactive');

            if (faqBtn.classList.contains('active')) {
                answer.classList.add('active');
                answer.classList.remove('inactive');
                icon.src = '/img/minus.png';
            } else {
                answer.classList.remove('active');
                answer.classList.add('inactive');
                icon.src = '/img/plus.png';
            }
        });
    });
};

if (document.querySelector('.faq-grid')) {
    faqAnswer();
}

// toggle monthly/yearly
function switchBtn() {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const basic = document.querySelector('.basic');
    const standard = document.querySelector('.standard');
    const premium = document.querySelector('.premium');


    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.add('inactive');
            });

            btn.classList.add('active');
            btn.classList.remove('inactive');

            if (btn.textContent === 'Yearly') {
                basic.innerHTML = '$120<span>/year</span>'
                standard.innerHTML = '$150<span>/year</span>'
                premium.innerHTML = '$170<span>/year</span>'
            } else {
                basic.innerHTML = '$9.99<span>/month</span>'
                standard.innerHTML = '$12.99<span>/month</span>'
                premium.innerHTML = '$14.99<span>/month</span>'
            }
        });
    });
};

if (document.querySelector('.switch-container')) {
    switchBtn();
}


function toggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const movie = document.querySelector('.movie-block');
    const show = document.querySelector('.show-block');
    const moviesBtn = document.querySelector('.movies-btn');
    const showsBtn = document.querySelector('.shows-btn');

    toggleBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            if (btn.textContent === 'Shows') {
                movie.style.display = 'none';
                show.style.display = 'block';
                showsBtn.classList.add('active');
                showsBtn.classList.remove('inactive');
                moviesBtn.classList.remove('active');
                moviesBtn.classList.add('inactive');
            } else if (btn.textContent === 'Movies') {
                show.style.display = 'none';
                movie.style.display = 'block';
                moviesBtn.classList.add('active');
                moviesBtn.classList.remove('inactive');
                showsBtn.classList.remove('active');
                showsBtn.classList.add('inactive');
            }
        });
    });
};

if (document.querySelector('.toggle-container')) {
    toggle();
};


function planToggle() {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const price = document.querySelector('.info-price');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.add('inactive');
            });

            btn.classList.add('active');
            btn.classList.remove('inactive');

            if (btn.textContent === 'Basic') {
                price.textContent = '$9.99/year'
            } else if (btn.textContent === "Standard") {
                price.textContent = '$12.99/year'
            } else {
                price.textContent = '$14.99/year'
            }
        });
    });
}

if (document.querySelector('.choose-container')) {
    planToggle();
}