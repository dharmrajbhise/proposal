// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    addScrollAnimation();
});