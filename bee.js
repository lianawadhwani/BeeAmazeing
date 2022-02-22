var speed;
var posX;
var posY;
var size;
var direction;

function changeDirection(int direction) {
  this.direction = direction;
}

//arrow key html listener
this.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          console.log("Left key is pressed.");
          changeDirection(2);
          break;
       case 38:
          console.log("Up key is pressed.");
          changeDirection(1);
          break;
       case 39:
          console.log("Right key is pressed.");
          changeDirection(0);
          break;
       case 40:
          console.log("Down key is pressed.");
          changeDirection(3);
          break;
    }
 };
