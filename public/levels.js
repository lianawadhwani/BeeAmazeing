
class Levels{
constructor(){
  this.currentLevel = 1;
  this.level1 = new Image();
  this.level1.src = "mazes/maze1black.png";
  this.level2 = new Image();
  this.level2.src = "mazes/maze2black.png";
  this.level3 = new Image();
  this.level3.src = "mazes/maze3black.png";
  this.level4 = new Image();
  this.level4.src = "mazes/maze4black.png";
  this.level5 = new Image();
  this.level5.src = "mazes/maze5black.png";

}

  changeLevel(newLevel){
    this.currentLevel = newLevel;
  }
  draw(ctx){

    if (this.currentLevel == 5){
      ctx.drawImage(this.level5, 0, 0, 400, 400);
    }
    if (this.currentLevel == 1){
      ctx.drawImage(this.level1, 0, 0, 400, 400);
    }
    if (this.currentLevel == 2){
      ctx.drawImage(this.level2, 0, 0, 400, 400);
    }
    if (this.currentLevel == 3){
      ctx.drawImage(this.level3, 0, 0, 400, 400);
    }
    if (this.currentLevel == 4){
      ctx.drawImage(this.level4, 0, 0, 400, 400);
    }
  }

  displayWin(){
    window.alert("You won!");
  }

}
