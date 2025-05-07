document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mkgrbjdv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    // Dark/Light Mode Toggle
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.style.position = 'fixed';
    toggleThemeButton.style.top = '10px';
    toggleThemeButton.style.right = '10px';
    toggleThemeButton.style.width = '50px';
    toggleThemeButton.style.height = '50px';
    toggleThemeButton.style.border = '2px solid var(--primary-color)';
    toggleThemeButton.style.borderRadius = '50%';
    toggleThemeButton.style.backgroundSize = 'cover';
    toggleThemeButton.style.cursor = 'pointer';
    toggleThemeButton.style.backgroundImage = "url('assets/icons/day-icon.png')";
    toggleThemeButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        toggleThemeButton.style.backgroundImage = newTheme === 'dark' ? "url('assets/icons/night-icon.png')" : "url('assets/icons/day-icon.png')";
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
});