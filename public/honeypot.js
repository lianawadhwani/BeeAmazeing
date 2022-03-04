//var ctx = document.getElementById('honeypot').getContext('2d');

class Honeypot {
  //let potNumber;

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.onScreenTime = 0;
    this.visible = true;
    this.gameCanvas = document.getElementById("game");
    this.gameCtx = this.gameCanvas.getContext("2d");
    this.potImg = new Image();
    this.potImg.src = "honeypot.png";

  }

  //  let honeypot = document.getElementById('honeypot');

  setOnScreenTime() {
    let randTime = Math.floor(Math.random() * 20) + 5;
    this.onScreenTime = randTime * 1000;
  }

  getOnScreenTime() {
    return this.onScreenTime;
  }

  setPosX(x) {
    this.posX = x;
  }

  getPosX() {
    return this.posX;
  }
  setPosY(y) {
    this.posY = y;
  }

  getPosY() {
    return this.posY;
  }


  collect(gameTimer) {
    //call if pot is touched
    gameTimer += 5;
    this.visible = false;
  }

  drawPot(ctx, posX, posY) {

    ctx.drawImage(this.potImg, posX, posY, 50,50);

  }

  runPotTime() {
    console.log("RUNPOTRUNPOT")
    this.setOnScreenTime();
    let watch = new Stopwatch();
    //watch.start();
    //let drawing = setInterval(this.drawPot(this.gameCtx, this.posX, this.posY), 1000 / 500);
    this.drawPot(this.gameCtx, this.posX, this.posY);
    //if (this.visible == false) {
    //  clearInterval(drawing);
    //  }

  //  watch.stopAt(this.getOnScreenTime());

  //  if(watch.state == "paused"){
  //    clearInterval(drawing);
  //  }

  }


}


//const checker = new CollisionChecker(gameCanvasElement);

//var img = document.createElement("honeypot.png");
//img.setAttribute(id,‘honeypot’);
//this.runPotTime();
