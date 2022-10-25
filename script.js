const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');


function getColor() {
    square.style.background = input.value;
}


btn.addEventListener('click', getColor);