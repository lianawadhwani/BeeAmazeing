var size;
var speed;
var direction;
var posX = bee.style.left;
var PosY = bee.style.top;
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
    let start = Date.now();

    let toMove = setInterval(function() {
      let timePassed = Date.now() - start;
      if(this.direction==0)
      {
      bee.style.left = timePassed / 100 + 'px';
      }
      if(this.direction==2)
      {
      bee.style.left = -timePassed / 100 + 'px';
      }
      if(this.direction==1)
      {
      bee.style.top = -timePassed / 100 + 'px';
      }
      if(this.direction==3)
      {
      bee.style.top = timePassed / 100 + 'px';
      }

      console.log(bee.style.top);


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
