const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener ('click', () => {
    document.body.classList.toggle('nav-open');
});