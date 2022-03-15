class Honeypot {
  //let potNumber;

  constructor(posX, posY, bee) {
    this.posX = posX;
    this.posY = posY;
    this.bee = bee;
    this.onScreenTime = 0;
    this.visible = true;;
    this.collected =false;
    this.gameCanvas = document.getElementById("game");
    this.gameCtx = this.gameCanvas.getContext("2d");
    this.potImg = new Image();
    this.potImg.src = "honeypot.png";

    this.watch = new Timer(0,0);
  }

  //  let honeypot = document.getElementById('honeypot');

  randOnScreenTime() {
    let randTime = Math.floor(Math.random() * 20) + 5;
    setOnScreenTime(randTime);
  }
  setOnScreenTime(time){
    this.onScreenTime = time;
    this.watch = new Timer(0, this.onScreenTime);
    this.setVisible(true);
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
    gameTimer.value += 5000;

    this.visible = false;
    this.collected=true;
  }
  update(timer)
  {
    if(this.watch.value>0&&this.collected==false)
      this.visible = true;

    if(this.visible==false)
      return;

    if(this.bee.x+this.bee.size/2>=this.posX&&this.bee.x+this.bee.size/2<=this.posX+50&&
    this.bee.y+this.bee.size/2>=this.posY&&this.bee.y+this.bee.size/2<=this.posY+50)
    {
      this.collect(timer);
      console.log("Honeypot! at "+(this.bee.x+this.bee.size/2)+", "+(this.bee.y+this.bee.size/2));
    }
    if(this.watch.value<=0)
    {
      this.visible=false;
    }
  }

  draw() {
    if(this.visible){
      this.gameCtx.drawImage(this.potImg, this.posX, this.posY, 50,50);
    }
  }



}


//const checker = new CollisionChecker(gameCanvasElement);

//var img = document.createElement("honeypot.png");
//img.setAttribute(id,‘honeypot’);
//this.runPotTime();
