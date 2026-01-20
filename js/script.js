/* ==========================
   ANIMAÇÃO FADE-IN AO SCROLL
========================== */

const animatedElements = document.querySelectorAll('.animate-fade');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // performance
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(el => observer.observe(el));

/* ==========================
   HEADER SHADOW ON SCROLL
========================== */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

/* ==========================
   BOTÃO WHATSAPP — FEEDBACK DE CLIQUE
========================== */

const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    whatsappButton.classList.add('scale-90');
    setTimeout(() => {
      whatsappButton.classList.remove('scale-90');
    }, 150);
  });
}

/* ==========================
   SCROLL SUAVE PARA ÂNCORAS
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* ==========================
   ANIMAÇÃO EXTRA CTA (PULSE)
========================== */

const ctaButtons = document.querySelectorAll('.btn-primary');

ctaButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('scale-105');
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('scale-105');
  });
});
