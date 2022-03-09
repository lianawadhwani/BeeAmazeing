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
let beeCanvasElement = document.getElementById('game');
var cc = new CollisionChecker(beeCanvasElement);

function changeDirection(direction) {
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

bee.onclick = function() {//function starts when bee icon is clicked
    toMove = setInterval(function() {
      var rect = bee.getBoundingClientRect();
      //console.log(rect.left, rect.top);
      if(cc.checkPixelType((rect.left+20), (rect.top-24)) == "wall")
      {
        console.log("COLLISION! at "+(rect.left+20)+", "+(rect.top-24));
      }
      else {
          //console.log("position:"+rect.left+", "+rect.top);
      }
      //console.log("position:"+rect.left+", "+rect.top);

      if(this.direction==0)
      {
       x++;
       bee.style.left = x + 'px';
       //console.log(bee.style.left);
      }
      if(this.direction==2)
      {
      x--;
      bee.style.left = x + 'px';

      }
      if(this.direction==1)
      {
        y--;
        bee.style.top = y + 'px';

      }
      if(this.direction==3)
      {
        y++;
        bee.style.top = y + 'px';

      }

      // console.log(bee.style.top);


    }, 20);
  }


  //henlohiii

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
