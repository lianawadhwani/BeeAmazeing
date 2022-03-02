//var ctx = document.getElementById('honeypot').getContext('2d');

class Honeypot{
  let onScreenTime;
  let posX;
  let posY;
  //let potNumber;
  let visible = true;

  public Honeypot(posX, posY){
    this.posX = posX;
    this.posY = posY;
  }

//  let honeypot = document.getElementById('honeypot');

  function setOnScreenTime(){
    let randTime = Math.floor(Math.random() * 20) + 5;
    onScreenTime = randtime* 1000;
  }

  function getOnScreenTime(){
    return onScreenTime;
  }

  function setPosX(){
    posX = x;
  }

  function getPosX(){
    return posX;
  }
  function setPosY(y){
    posY = y;
  }

  function getPosX(){
    return posY;
  }


  function collect(gameTimer){
    //call if pot is touched
    gameTimer += 5;
    visible = false;
  }

  function runPotTime(posX, posY) {
    console.log("RUNPOTRUNPOT")
    setOnScreenTime();
    potImg = document.getElementById("honeypot");

    Stopwatch watch = new Stopwatch();
    watch.start();
    let drawing = setInterval(drawPot(gameCtx, posX, posY), 500);

    if(visible == false){
      clearInterval(drawing);
    }

    watch.stopAt(this.getOnScreenTime());

    clearInterval(drawing);
  }

  function drawPot(ctx, posX, posY){
    let gameCtx = document.getElementById('game');
    gameCtx.drawImage('honeypot.png', posX, posY);

  }

}


const checker = new CollisionChecker(gameCanvasElement);

//var img = document.createElement("honeypot.png");
//img.setAttribute(id,‘honeypot’);
//this.runPotTime();
