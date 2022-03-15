import CollisionChecker from '/public/collisionChecker.js'
export default class Bee{
  constructor(){
    this.size = 50;
    this.direction = -1;//-1 means not moving
    this.xinit=10;
    this.yinit=160;
    this.gameWidth = 400;
    this.gameHeight = 400;
    this.x=this.xinit;
    this.y=this.yinit;
    this.beeCanvasElement = document.getElementById('game');
    this.cc = new CollisionChecker(this.beeCanvasElement);
    this.beeImage = new Image();
    this.beeImage.src = "/public/bee2.png";
    this.started = false;
  }
  changeDirection(direction) {
    this.direction = direction;
  }
  draw(ctx)
  {
    ctx.drawImage(this.beeImage,this.x,this.y,50,50);
  }
  start()
  {
    this.started=true;
  }
  resetBeeToStart()
  {
    this.x = this.xinit;
    this.y = this.yinit;
    this.started = false;
    this.direction = -1;
  }
  update()
  {
    if(this.x+this.size<0||this.y+this.size<0||this.x>=this.gameWidth||this.y>=this.gameWidth)
    {
      this.resetBeeToStart();
    }

    //console.log(rect.left, rect.top);
    if(!this.started)
    {
      this.direction=-1;
      return;
    }
    switch (this.cc.checkPixelType(this.x+this.size/2,this.y+this.size/2)){
      case "wall":
        console.log("HIT WALL! at "+(this.x+this.size/2)+", "+(this.y+this.size/2));
        this.resetBeeToStart();
        break;
      case "enemy":
        console.log("HIT ENEMY! at "+(this.x+this.size/2)+", "+(this.y+this.size/2));
        this.resetBeeToStart();
        break;
    }

    if(this.direction==0)
    {
      this.x+=2;
     // console.log(bee.style.left);
    }
    if(this.direction==2)
    {
      this.x-=2;
    }
    if(this.direction==1)
    {
      this.y-=2;

    }
    if(this.direction==3)
    {
      this.y+=2;
    }
  }
}
