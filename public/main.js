
const image = new Image();
image.src = 'flower.png';

var canvas= document.getElementById("game");
var ctx = canvas.getContext("2d");




var bee1 = document.getElementById('bee');
var bee2 = document.getElementById('bee2');


function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var myImg = document.getElementById("img");
ctx.drawImage(myImg, 0, 0, 390, 390);
ctx.drawImage(image, 350, 150,50, 50); 

window.requestAnimationFrame(draw);
};

draw();
