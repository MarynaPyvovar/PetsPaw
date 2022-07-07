const refs = {
    toggleBtn: document.querySelector('#toggle'),
    body: document.body,
};

console.log(refs.toggleBtn);

refs.toggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    refs.body.classList.toggle('nigth-mode');
}