let body = document.querySelector('body');
let link = document.querySelector('a');
let linkColor = document.getElementsByClassName("link");
let responseContent = document.getElementsByClassName("responseContent");
let text = document.getElementsByClassName("text");
let colors = ['red', 'green', 'blue', 'purple', 'yellow'];

link.addEventListener('click', changeColor);

function changeColor(){
    let colorIndex = parseInt(Math.random() * colors.length);
    linkColor.style.backgroundColor = colors[colorIndex];
    responseContent.style.color = colors[colorIndex];
    text.style.color = colors[colorIndex];
}

