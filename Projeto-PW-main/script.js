const pesquisa = document.querySelector('#pesquisa');
const carrinho = document.querySelector('#carrinho');
const quantidade = document.querySelector('#quantidade');
quantidade.style.display = 'none';


const lupa = document.querySelector('#lupa').addEventListener('click', () => {
    pesquisa.value = '';
})

let count = 0;

const adicionar = document.querySelectorAll('.adicionar');
adicionar.forEach(item => {
    item.addEventListener('click', () => {
        quantidade.style.display = 'flex'; 
        count++;  
        quantidade.innerText = count; 
    });
});





