'use strict';

const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn');


function getColor() {
    square.style.background = input.value;
}


btn.addEventListener('click', getColor);

eBtn.style.display = 'none';

inputRange.addEventListener('input', function(event) {
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';
});