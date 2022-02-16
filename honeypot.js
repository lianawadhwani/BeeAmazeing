var ctx = document.getElementById('honeypot').getContext('2d');

class Honeypot{
  let onScreenTime;
  let posX;
  let posY;
  let potNumber;
  let visible = false;


  let honeypot = document.getElementById('honeypot');

  function setOnScreenTime(){
    onScreenTime = Math.floor(Math.random() * 20) + 5;
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
    //change style of honeypot element to be invisible
    gameTimer += 5;
  }
//got rid of the dissapear method

  function runPotTime() {
    Stopwatch watch = new Stopwatch();
    setOnScreenTime();
    this.visible = true;
    //change css of honeypot to be visible
    watch.start();
    watch.stopAt(this.getOnScreenTime());
    this.visible = false;
    //this should be called right after a honeypot is drawn


  }

}

//draw honeypot

let img = document.getElementById("idname");
ctx.drawImage("img of honeypot change later", posX, posY);
this.runPotTime();

while (this.visible = false){
  //change css of honeypot
}
