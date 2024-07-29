// Criando um contador de cliques em um botão usando JavaScript para manipular o DOM.

const btn = document.querySelector('button');
const count = document.querySelector('h3');

let counter = 0;
btn.addEventListener('click', () => {
    counter += 1;
    count.textContent = counter;
});