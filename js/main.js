document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully");

    // Add interactivity to the contact button
    const contactBtn = document.querySelector('a[href="#contact"]');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            console.log("User is interested in connecting!");
        });
    }
});
var typed = new Typed("#auto-type", {
    strings: ["Backend Engineer", "DevOps Enthusiast", "Django Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#5580f7" }, // This is the purple color
    "line_linked": { "enable": true, "distance": 150, "color": "#5596f7", "opacity": 0.4 },
    "move": { "enable": true, "speed": 2 }
  }
});
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to all links and buttons
document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseover', () => cursor.classList.add('cursor-hover'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
