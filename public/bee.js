
var size;
var speed;
var direction = 0;
var posX = bee.style.left;
var PosY = bee.style.top;
var xinit = 50;
var yinit = 50;
var x = xinit;
var y = yinit;
var toMove;

function changeDirection(direction) {
  this.direction = direction;
}


this.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          changeDirection(2);
          break;
       case 38:
          changeDirection(1);
          break;
       case 39:
          changeDirection(0);
          break;
       case 40:
          changeDirection(3);
          break;
    }
 };

bee.onclick = function() {//function starts when bee icon is clicked
    toMove = setInterval(function() {

      if(this.direction==0)
      {
       x++;
       x++;
       bee.style.left = x + 'px';
       // console.log(bee.style.left);
      }
      if(this.direction==2)
      {
      x--;
      x--;
      bee.style.left = x + 'px';

      }
      if(this.direction==1)
      {
        y--;
        y--;
        bee.style.top = y + 'px';

      }
      if(this.direction==3)
      {
        y++;
        y++;
        bee.style.top = y + 'px';

      }

      // console.log(bee.style.top);


    }, 20);
  }

function resetBeeToStart ()
{
  clearInterval(toMove);
  bee.style.left = xinit + 'px';
  bee.style.top = yinit + 'px';

}


  function checkHitWall ()
  {
    if(hitWall())//method not yet made-- some additions needed to cc class (use pixel type to make functions check hit wall, hit pot, etc.)
    {
      Game.decreaseTime();//these objects to be instantiated in game class
    }

  }

  function checkHitPot ()
  {
    if(hitPot())//method not yet made
    {
      HoneyPot.collect(hitPot());//these objects to be instantiated in game class
    }
  }

  function checkHitEnemy()//method not yet made
  {
    if(hitEnemy())
    {
      Bee.die()//these objects to be instantiated in game class
    }
  }

  function die()
  {
    Game.gameOver();//method not yet made
  }

  function checkHitGoal()//methods not yet made/testable
  {
    if (posX == Goal.posX && posY == Goal.posY);
    {
      if (Game.currentLevel <= 4)
      {
        Game.nextLevel();
      }
      else {
        Game.win();
      }
    }
  }
