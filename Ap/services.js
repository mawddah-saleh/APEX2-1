
const logo = document.querySelector('.logo');
let t = 0;

if (logo) {
    setInterval(() => {
        t += 0.05;
        const y = Math.sin(t) * 8;
        logo.style.transform = `translateY(${y}px)`;
    }, 30);
}

const circle = document.querySelector('.orbit-ring'); 
let angle = 0;

if (circle) {
    setInterval(() => {
        angle += 0.03;
        const x = Math.cos(angle) * 25;
        const y = Math.sin(angle) * 8;

        circle.style.transform = `
            translate(${x}px, ${y}px)
            rotate(15deg)
        `;
    }, 30);
}

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    if (logo) {
        logo.style.filter = `drop-shadow(${x}px ${y}px 25px rgba(217, 70, 239, 0.5))`;
    }
});

const navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});