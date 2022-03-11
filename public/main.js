import Bee from '/public/bee.js'

const image = new Image();
image.src = 'flower.png';

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");


var bee1 = new Bee();


//var bee1 = document.getElementById('bee');
//var bee2 = document.getElementById('bee2');

var test = new Honeypot(200, 200);
test.setOnScreenTime(5); //put in seconds for stopwatch


let watch = new Timer(0, test.getOnScreenTime());
watch.start();
test.setVisible(true);


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


function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var myImg = document.getElementById("img");
  //ctx.drawImage(bee,30, 150, 50, 50)
  ctx.drawImage(myImg, 0, 0, 390, 390);
  ctx.drawImage(image, 350, 150, 50, 50);


  bee1.update();
  bee1.draw(ctx);


  /*
  if (watch.state == "running" && watch.value != 100) {
    //could possibly change if statement to rely on honeypots visible variable
    test.drawPot();
    console.log("pot is on screen");

    //console.log(test.getVisible());
  } else {
    console.log("pot is off screen");
    test.setVisible(false);
  }
  */


  window.requestAnimationFrame(draw);
};

draw();
