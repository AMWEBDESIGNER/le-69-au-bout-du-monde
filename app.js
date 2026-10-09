document.body.classList.add('loading');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.querySelector('.loader')?.classList.add('done');
    document.body.classList.remove('loading');
  }, 650);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });
reveals.forEach((item) => observer.observe(item));

if (!reducedMotion) {
  const cursor = document.querySelector('.cursor');
  window.addEventListener('pointermove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });
  document.querySelectorAll('a, .menu-card').forEach((item) => {
    item.addEventListener('mouseenter', () => cursor.classList.add('active'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach((item) => {
      const amount = Number(item.dataset.parallax) || 0;
      item.style.translate = `0 ${Math.min(y * amount / 110, 90)}px`;
    });
  }, { passive: true });

  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      card.style.transform = `rotate(${5 + x * 3}deg) perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = 'rotate(5deg)');
  });

  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const bounds = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * .12}px, ${(event.clientY - bounds.top - bounds.height / 2) * .16}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform = '');
  });
}
