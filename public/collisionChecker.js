class CollisionChecker {
  constructor(canvasElement) {
  this.canvas = beeCanvasElement;

      // set this to true to test everything
      this._test = true;
      if (this._test) {
        this._test_logMouseMovement();
      }

      this.typeOfGameElement = {
        nothing : "nothing",
        wall : "wall"
      }
  }

  // ==============================================
  // checkPixelType  ==============================
  // inputs
      // pixelX  - x pixel coordinate to check
      // pixelY  - y pixel coordinate to check
  // outputs
    // any type of (typeOfGameElement)
  // ==============================================
  checkPixelType(pixelX, pixelY) {

    // How did I figure this out?  Stolen from: https://bfy.tw/SbUU
    var pixelData = this.canvas.getContext('2d').getImageData(pixelX, pixelY, 1, 1).data;

    // If (this.test) is set to TRUE (in the constructor), log details
    if (this._test) {
      this._test_logTestData(pixelData);
    }


    if (pixelData) {
      // Check if wall
      if (this.isWall(pixelData)) {
        return this.typeOfGameElement.wall;
      }
    }
  }

  // Checks if its a wall (assumed RGB values are 255,255,255)
  isWall(pixelData) {
    if (pixelData[0] == '0' && pixelData[1] == '0' && pixelData[2] == '0' && pixelData[3] == '0') {
      console.log('hitting wall');
      return true;
    }
    return false;
  }


  // This is only used for testing, can be deleted...
  // This draws a gradient and shows the RGB values at any given pixel
  // stolen from https://tinyurl.com/ytmnvtct
  _test_logMouseMovement() {
    let self = this;
    this.canvas.addEventListener('mousemove', e => {
      self.checkPixelType(e.offsetX, e.offsetY);
    });
    var ctx = this.canvas.getContext("2d");
    var ctx = this.canvas.getContext("2d");
    var myImg = document.getElementById("img");
    ctx.drawImage(myImg, 0, 0, 1000, 1000);
  }

  _test_logTestData(pixelData) {
    if (pixelData) {
      console.log('R: ' + pixelData[0]);
      console.log('G: ' + pixelData[1]);
      console.log('B: ' + pixelData[2]);
      console.log('A: ' + pixelData[3]);
    }
  }

}

let beeCanvasElement = document.getElementById('game');
const cc = new CollisionChecker(beeCanvasElement);
