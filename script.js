const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('.appointment-form');
const note = document.querySelector('.form-note');

menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  note.textContent = `Thank you, ${name}. Your appointment request has been received.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
