const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas) {
  receita.addEventListener("click", function() {
      const imageId = receita.getAttribute('id');
      const title = receita.querySelector('.title').innerText;
      const text = receita.querySelector('.text').innerText;
      modalOverlay.classList.add('active');
      modalOverlay.querySelector('img').src = `assets/${imageId}.png`
      modalOverlay.querySelector('h4').innerHTML = title;
      modalOverlay.querySelector('p').innerHTML = text;
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active');
})

