
const image = new Image();
image.src = 'flower.png';

var canvas= document.getElementById("game");
var ctx = canvas.getContext("2d");




var bee1 = document.getElementById('bee');
var bee2 = document.getElementById('bee2');

var test = new Honeypot(200,200);
test.setOnScreenTime(12000);


let watch = new Stopwatch();
//watch.start();
test.visible = true;
//watch.stopAt(test.getOnScreenTime());

if(watch.state == "paused"){
  this.visible = false;
}

function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var myImg = document.getElementById("img");
var bee= document. getElementById("bee");
ctx.drawImage(bee,30, 150, 50, 50)
ctx.drawImage(myImg, 0, 0, 390, 390);
ctx.drawImage(image, 350, 150,50, 50);
test.drawPot();


window.requestAnimationFrame(draw);
};

draw();
