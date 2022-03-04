
const image = new Image();
image.src = 'flower.png';

var canvas= document.getElementById("game");
var ctx = canvas.getContext("2d");



function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var myImg = document.getElementById("img");
var bee= document. getElementById("bee");
ctx.drawImage(bee,30, 150, 50, 50)
ctx.drawImage(myImg, 0, 0, 390, 390);
ctx.drawImage(image, 350, 150,50, 50);

window.requestAnimationFrame(draw);
};

draw();
