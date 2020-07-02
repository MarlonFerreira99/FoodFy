const receitas = document.querySelectorAll('.receita');

const list_ingredients = document.querySelector('.list-ingredients');
const list_preparation = document.querySelector('.list-preparation');
const description = document.querySelector('.description');


for (let receita of receitas) {
  receita.addEventListener("click", function() {
    const receitaId = receita.getAttribute('id');
    window.location.href = `recipes/${receitaId}`;
  });
}


document.querySelector('#btn-ingredients').addEventListener("click", function() {
  if(list_ingredients.classList.contains('active')) {
      list_ingredients.classList.remove('active');
      document.getElementById('btn-ingredients').innerHTML = "OCULTAR";
  } else {
      list_ingredients.classList.add('active');
      document.getElementById('btn-ingredients').innerHTML = "MOSTRAR";
  }
});

document.querySelector('#btn-preparation').addEventListener("click", function() {
  if(list_preparation.classList.contains('active')) {
      list_preparation.classList.remove('active');
      document.getElementById('btn-preparation').innerHTML = "OCULTAR";
  } else {
      list_preparation.classList.add('active');
      document.getElementById('btn-preparation').innerHTML = "MOSTRAR";
  }
});

document.querySelector('#btn-information').addEventListener("click", function() {
  if(description.classList.contains('active')) {
      description.classList.remove('active');
      document.getElementById('btn-information').innerHTML = "OCULTAR";
  } else {
      description.classList.add('active');
      document.getElementById('btn-information').innerHTML = "MOSTRAR";
  }
});


















// CODIGO DO MODAL DAS RECEITAS

// const modalOverlay = document.querySelector('.modalOverlay');

// for (let receita of receitas) {
//   receita.addEventListener("click", function() {
//       const imageId = receita.getAttribute('id');
//       const title = receita.querySelector('.title').innerText;
//       const text = receita.querySelector('.text').innerText;
//       modalOverlay.classList.add('active');
//       modalOverlay.querySelector('img').src = `https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/launchbase/receitas/${imageId}.png`
//       modalOverlay.querySelector('h4').innerHTML = title;
//       modalOverlay.querySelector('p').innerHTML = text;
//   })
// }

// document.querySelector('.close-modal').addEventListener("click", function() {
//   modalOverlay.classList.remove('active');
// })

