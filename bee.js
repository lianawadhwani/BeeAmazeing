class Bee{

var speed;
var posX;
var posY;
var size;
var direction; //2 = left, 0 = right, 1 = up, 3 = down

var ctx = document.getElementById('bee').getContext('2d');// need to have drawing in html first


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
function move()
{
  if (this.direction==0)
  {
    posX ++;
    ctx.translate(posX,posY);//set exact speed later
  }
  if (this.direction==2)
  {
    posX --;
    ctx.translate(posX,posY);
  }
  if (this.direction==3)
  {
    posY --;
    ctx.translate(posX,posY);
  }
  if (this.direction==1)
  {
    posY ++;
    ctx.translate(posX,posY);
  }

}

while(GameActive == true)
{
  this.move();
}



function checkHitWall ()
{
  if(hitWall())
  {
    Game.decreaseTime();
  }

}

function checkHitPot ()
{
  if(hitPot())
  {
    HoneyPot.collect(hitPot());
  }
}

function checkHitEnemy()
{
  if(hitEnemy())
  {
    Bee.die()
  }
}

function die()
{
  Game.gameOver();
}

function checkHitGoal()
{
  if (posX == Goal.posX && posY == Goal.posY);
  {
    if (Game.currentLevel <= 4)
    {
      Game.nextLevel();
    }
    else {
      Game.win();g
    }
  }
}

