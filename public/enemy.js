export default class Enemy{
  constructor(xinit, yinit, range, direction){
    this.started = false;
    this.counter = 0;
    this.size = 50;
    this.direction = -1;//-1 means not moving
    this.xinit=xinit;
    this.yinit=yinit;
    this.range = range;
    this.direction = direction;
    this.x=this.xinit;
    this.y=this.yinit;
    this.enemyImage = new Image();
    this.enemyImage.src = "/public/enemySprite.png";
  }
  draw(ctx)
  {
    ctx.drawImage(this.enemyImage,this.x,this.y,40,40);
  }
  start()
  {
    this.started=true;
  }

  resetEnemyToStart()
  {
    this.x = this.xinit;
    this.y = this.yinit;
    this.started=false;
    this.direction = -1;
  }
  update()
  {



    //console.log(rect.left, rect.top);
    if(!this.started)
    {
      return;
    }
    if (this.direction == "up"){
      if(this.counter%2==0 && this.y>this.yinit-this.range)
      {
        this.y--;
      }
      else if (this.counter%2==0 && this.y == this.yinit-this.range){
        this.counter++;
      }
      else if (this.counter%2==1 && this.y<this.yinit){
        this.y++;
      }
      else if (this.counter%2==1 && this.y == this.yinit){
        this.counter--;
      }
    }
    else if (this.direction == "down"){
      this.range = Math.abs(this.range) * -1;
      if(this.counter%2==0 && this.y<this.yinit-this.range)
      {
        this.y++;
      }
      else if (this.counter%2==0 && this.y == this.yinit-this.range){
        this.counter++;
      }
      else if (this.counter%2==1 && this.y>this.yinit){
        this.y--;
      }
      else if (this.counter%2==1 && this.y == this.yinit){
        this.counter--;
      }
    }
    if (this.direction == "left"){
      if(this.counter%2==0 && this.x>this.xinit-this.range)
      {
        this.x--;
      }
      else if (this.counter%2==0 && this.x == this.xinit-this.range){
        this.counter++;
      }
      else if (this.counter%2==1 && this.x<this.xinit){
        this.x++;
      }
      else if (this.counter%2==1 && this.x == this.xinit){
        this.counter--;
      }
    }
    else if (this.direction == "right"){
      this.range = Math.abs(this.range) * -1;
      if(this.counter%2==0 && this.x<this.xinit-this.range)
      {
        this.x++;
      }
      else if (this.counter%2==0 && this.x == this.xinit-this.range){
        this.counter++;
      }
      else if (this.counter%2==1 && this.x>this.xinit){
        this.x--;
      }
      else if (this.counter%2==1 && this.x == this.xinit){
        this.counter--;
      }
    }




  }
}
