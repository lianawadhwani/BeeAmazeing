
var bee1 = document.getElementById('bee');
var bee2 = document.getElementById('bee2');

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width=window.screen.width;
canvas.height=window.screen.height;
var context= canvas.getContext("2d");

var x=.25;
var y=20;
var xstep=.25;
var ystep=.25;
/**
window.requestAnimationFrame(function loop(){
context.clearRect(0,0, canvas.width, canvas.height);
if (x>200 || y>200 || x<0 || y<0){
    xstep=-xstep;
    ystep=-ystep;
  }
  x+=xstep;
  y+=ystep;
context.save();
context.translate(x,0);
console.log(x);
context.fillStyle="pink";
context.fillRect(0,0, 100, 100);
context.restore();
context.save();
context.translate(0,y);
console.log(y);
context.fillStyle="blue";
context.fillRect(0,0,100, 100);
context.restore();
window.requestAnimationFrame(loop);
*/
});
