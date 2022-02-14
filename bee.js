var speed;
var posX;
var posY;
var size;
var direction; 


function move()
{
  if (this.direction==0)
  {
    posX ++; 
  }
  if (this.direction==2)
  {
    posX --; 
  }
  if (this.direction==3)
  {
    posY --; 
  }
  if (this.direction==1)
  {
    posY ++; 
  }
  
}
