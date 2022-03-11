import Bee from '/public/bee.js'

const image = new Image();
image.src = 'flower.png';

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");


var bee1 = new Bee();
var timer = new Timer(0,30);


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
  console.log("starting timer");
  timer.start();
});


document.getElementById("restart").addEventListener("click", (event)=>{
  bee1.resetBeeToStart();
  console.log("resetting timer");
  timer.reset();
});

function formatTime(num){
  let newNum = num/1000;

  if(num % 1000 == 0){
    return newNum + ".0";
  }

  return newNum;


}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var myImg = document.getElementById("img");
  //ctx.drawImage(bee,30, 150, 50, 50)
  ctx.drawImage(myImg, 0, 0, 390, 390);
  ctx.drawImage(image, 350, 150, 50, 50);

  pot.update(timer);
  pot.draw(ctx);

  if(timer.value > 0){
    bee1.update();
  }


  bee1.draw(ctx);

  console.log(timer.value);
  document.getElementById("timer").innerHTML = "Time Left: " + formatTime(timer.value) + " seconds";



  window.requestAnimationFrame(draw);
};

draw();
