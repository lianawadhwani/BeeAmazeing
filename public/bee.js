export default class Bee{
  constructor(){
    this.size = 50;
    this.direction = 0;
    this.xinit=50;
    this.yinit=50;
    this.x=this.xinit;
    this.y=this.yinit;
    this.beeImage = new Image();
    this.beeImage.src = "/public/bee2.png";
  }
  changeDirection(direction) {
    this.direction = direction;
  }
  draw(ctx)
  {
    ctx.drawImage(this.beeImage,this.x,this.y,50,50);
  }
  resetBeeToStart ()
  {
    this.x = this.xinit;
    this.y = this.yinit;
  }
  update()
  {
    
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
