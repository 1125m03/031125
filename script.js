document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in');
  elements.forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });

  const form = document.querySelector('.signup-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thanks for applying! We'll be in touch soon.");
      form.reset();
    });
  }
});