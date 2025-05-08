document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode Toggle
    const toggleThemeButton = document.querySelector('.light-dark-toggle img');

    toggleThemeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        toggleThemeButton.src = newTheme === 'dark' ? 'assets/icons/night-icon.png' : 'assets/icons/day-icon.png';
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Intersection Observer for 'How I Work' title animation
    const howIWorkTitle = document.querySelector('.how-i-work h2');

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                howIWorkTitle.classList.add('animate');
            } else {
                howIWorkTitle.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    titleObserver.observe(howIWorkTitle);

    // Intersection Observer for 'About Me' title animation
    const aboutMeTitle = document.querySelector('.about-content h2');

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMeTitle.classList.add('animate');
            } else {
                aboutMeTitle.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutMeTitle);
});