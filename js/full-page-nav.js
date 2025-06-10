document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const fullPageNav = document.querySelector('.full-page-nav');
    const body = document.body;

    if (menuToggle && fullPageNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            // Toggle ARIA attributes
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            fullPageNav.setAttribute('aria-hidden', isExpanded);

            // Toggle active classes for styling and animations
            menuToggle.classList.toggle('active');
            fullPageNav.classList.toggle('active');
            
            // Toggle body class to prevent scrolling
            body.classList.toggle('nav-open');
        });
    }
});