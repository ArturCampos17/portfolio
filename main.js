
const devTypes = ["Back-End", "Full Stack"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; 
const delayBetweenWords = 1000; 

function typeEffect() {
    const currentText = devTypes[index];
    const displayedText = isDeleting 
        ? currentText.substring(0, charIndex--) 
        : currentText.substring(0, charIndex++);

    document.getElementById("devType").textContent = displayedText;

    if (!isDeleting && charIndex === currentText.length + 1) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % devTypes.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();

function toggleMode() {
    document.body.classList.toggle('light-mode');
}

document.getElementById('toggle-mode-button').addEventListener('click', toggleMode);