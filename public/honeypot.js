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

  randOnScreenTime() {
    let randTime = Math.floor(Math.random() * 20) + 5;
    this.onScreenTime = randTime;
  }
  setOnScreenTime(time){
    this.onScreenTime = time;
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

  setVisible(bool) {
    this.visible = bool;
  }

  getVisible() {
    return this.visible;
  }


  collect(gameTimer) {
    //call if pot is touched
    gameTimer += 5;
    this.visible = false;
  }

  drawPot() {
    console.log("RUNPOTRUNPOT");
    if(this.visible){
      this.gameCtx.drawImage(this.potImg, this.posX, this.posY, 50,50);
    }
  }



}


//const checker = new CollisionChecker(gameCanvasElement);

//var img = document.createElement("honeypot.png");
//img.setAttribute(id,‘honeypot’);
//this.runPotTime();
