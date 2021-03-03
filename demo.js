window.onload = () => {
const btn_el = document.getElementById('btn-1');
const card_el = document.getElementById('card-1')
const button = document.querySelector('#button')
const card = document.querySelector('#card-container-2')
const card_1 = document.querySelector('#card-container-1')


button.addEventListener('click', function(e){
    e.target.classList.toggle('switch')
    card.classList.toggle('show')
    card_1.classList.toggle('show')

    
})
};

