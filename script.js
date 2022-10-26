'use strict';

const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn');
const percentCount = document.querySelector('#range-span');


function getColor() {
    square.style.background = input.value;
    input.value = '';
}

function circleSize() {
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
    percentCount.textContent = inputRange.value + '%';
}
eBtn.style.display = 'none';

circleSize();
btn.addEventListener('click', getColor);
inputRange.addEventListener('input', circleSize);


