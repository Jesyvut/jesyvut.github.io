// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 100; // Number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('sparkle');
        star.style.top = `${Math.random() * 200}vh`; // Random position within 200% of viewport height
        star.style.left = `${Math.random() * 100}vw`; // Random position within viewport width
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration between 1s and 4s
        starsContainer.appendChild(star);
    }
});