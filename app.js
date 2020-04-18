const navSlide = () => {
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');
    
    container.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
});

    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 +1.5}s';
        console.log(index / 7);
    });
}
    
navSlide();