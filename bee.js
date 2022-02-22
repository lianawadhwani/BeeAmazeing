var speed;
var posX;
var posY;
var size;
var direction; 


var ctx = document.getElementById('bee').getContext('2d');// need to have drawing in html first

function move()
{
  if (this.direction==0)
  {
    posX ++;
    ctx.translate(posX,posY);//set exact speed later
  }
  if (this.direction==2)
  {
    posX --;
    ctx.translate(posX,posY);
  }
  if (this.direction==3)
  {
    posY --;
    ctx.translate(posX,posY);
  }
  if (this.direction==1)
  {
    posY ++;
    ctx.translate(posX,posY);
  }

}

while(GameActive == true)
{
  this.move();
}


//ashjdfluasdhjkfashjkldf