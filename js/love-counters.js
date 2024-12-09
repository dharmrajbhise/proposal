// Function to animate counting up
function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = (targetValue / duration) * 10; // Update every 10ms
    let currentValue = startValue;

    const updateCounter = () => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            element.textContent = Math.round(targetValue).toLocaleString();
        } else {
            element.textContent = Math.round(currentValue).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
}

// Calculate days together (example date - replace with your actual date)
const startDate = new Date('2023-01-01'); // Replace with your relationship start date
const today = new Date();
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Initialize counters when the section becomes visible
function initializeCounters() {
    animateCounter('daysCounter', daysTogether);
    animateCounter('memoriesCounter', 108); // Replace with your number
    animateCounter('laughsCounter', 1000); // Replace with your number
}

// Start animation when the section comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('love-reasons');
    if (section) {
        observer.observe(section);
    }
});
