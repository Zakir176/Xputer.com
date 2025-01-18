document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    
    // Fade in each section with animation
    let delay = 0;
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, delay);
        delay += 300; // Increase delay between section animations
    });
});
