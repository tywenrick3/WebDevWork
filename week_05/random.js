var colors = ['#008000', '#D3D3D3'];
var green = '#008000';
var grey = '#D3D3D3';

var random_color = false;

if (colors[Math.floor(Math.random() * colors.length)] == 1){
    random_color = true;
}else{
    random_color = false;
}
console.log(random_color);

//document.getElementById("doIt").style.backgroundColor = random_color;

//if (random_color == 0){
  //  document.getElementById("dont").style.backgroundColor = random_color;
//} else if (random_color == 1){
    //document.getElementById("dont").style.backgroundColor = random_color;
//}
