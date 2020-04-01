
let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['red', 'green', 'blue', 'purple', 'yellow', 'pink', 'orange', 'white', 'black'];

body.style.backgroundColor = 'yellow';
button.addEventListener('click', changeColor);

function changeColor(){
    let colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}




