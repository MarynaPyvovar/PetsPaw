const refs = {
  toggleBtn: document.querySelector('#toggle'),
  body: document.body,
};

refs.toggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
  refs.body.classList.toggle('night-mode');
}
