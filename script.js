document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section1');
const navbar = document.querySelector('.nav');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });

    targetSection.classList.remove('section1');
    void targetSection.offsetWidth;
    targetSection.classList.add('section1');

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
function replayAnimations(section) {
  section.querySelectorAll('.menu-slider, .card, .about-card, .review-gallery, .hero-content').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth; // Force reflow
    el.style.animation = '';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
    replayAnimations(targetSection);
  });
});



const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☀️ / 🌙';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '16px';
toggleBtn.style.right = '16px';
toggleBtn.style.background = 'var(--accent)';
toggleBtn.style.color = '#fff';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.width = '48px';
toggleBtn.style.height = '48px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.fontSize = '18px';
toggleBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

toggleBtn.onclick = () => {
  document.body.classList.toggle('manual-dark');
};

document.body.appendChild(toggleBtn);

toggleBtn.onclick = () => {
  document.body.classList.toggle('manual-dark');
  const isDark = document.body.classList.contains('manual-dark');

  if (isDark) {
    document.documentElement.style.setProperty('--bg', '#1f1b18');
    document.documentElement.style.setProperty('--accent', '#c6a58b');
    document.documentElement.style.setProperty('--accent-2', '#7b4f2f');
    document.documentElement.style.setProperty('--muted', '#bfbfbf');
    document.documentElement.style.setProperty('--card', '#2a2521');
    document.body.style.color = '#f6f3ef';
  } else {
    document.documentElement.style.setProperty('--bg', '#f6f3ef');
    document.documentElement.style.setProperty('--accent', '#6b3f2a');
    document.documentElement.style.setProperty('--accent-2', '#d9b48f');
    document.documentElement.style.setProperty('--muted', '#6b6b6b');
    document.documentElement.style.setProperty('--card', '#fff');
    document.body.style.color = '#222';
  }
};

// Menu slider arrows
const menuSlider = document.querySelector('.menu-slider');
const slides = document.querySelectorAll('.menu-slide');
let currentIndex = 0;

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  menuSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  menuSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
// Show arrows only when the menu section is visible on screen
const menuSection = document.querySelector('#menu');
const arrows = document.querySelectorAll('.arrow');

window.addEventListener('scroll', () => {
  const rect = menuSection.getBoundingClientRect();

  // Check if menu section is in the viewport
  const isVisible = rect.top < window.innerHeight && rect.bottom > 720;

  arrows.forEach(arrow => {
    if (isVisible) {
      arrow.classList.add('visible');
    } else {
      arrow.classList.remove('visible');
    }
  });
});
