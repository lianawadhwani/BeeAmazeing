import Bee from '/public/bee.js'

const image = new Image();
image.src = 'flower.png';

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");


var bee1 = new Bee();


//var bee1 = document.getElementById('bee');
//var bee2 = document.getElementById('bee2');

var pot = new Honeypot(170, 150,bee1);
pot.setOnScreenTime(30);



document.addEventListener('keydown',(event)=>{
  //console.log(event.keyCode)
    switch (event.keyCode) {
       case 37:
          bee1.changeDirection(2);
          break;
       case 38:
          bee1.changeDirection(1);
          break;
       case 39:
          bee1.changeDirection(0);
          break;
       case 40:
          bee1.changeDirection(3);
          break;
    }
});
document.getElementById("start").addEventListener("click", (event)=>{
  bee1.start();
});


function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var myImg = document.getElementById("img");
  //ctx.drawImage(bee,30, 150, 50, 50)
  ctx.drawImage(myImg, 0, 0, 390, 390);
  ctx.drawImage(image, 350, 150, 50, 50);

  pot.update();
  pot.draw(ctx);


  bee1.update();
  bee1.draw(ctx);


  window.requestAnimationFrame(draw);
};

draw();
