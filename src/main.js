import './style.css'

// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Custom Cursor Logic
  const cursorDot = document.querySelector('.cursor-dot');

  // 1:1 Movement - No Lag
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .cta-button, .bento-card');

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('hovering');
    });
  });

  // Directional Hover Effect (CTA & Project Cards)
  const hoverElements = document.querySelectorAll('.cta-button, .bento-card');

  hoverElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    });
  });
});
