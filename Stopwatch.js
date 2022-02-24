//stopAt() which stopps the watch a certian time
class Stopwatch {
  constructor(/**id,*/ delay=100) { //Delay in ms
    this.state = "paused";
    this.delay = delay;
    this.display = document.getElementById(id);
    this.value = 0;
  }
  // to desplay timer in website
/**
  formatTime(ms) {
    var hours   = Math.floor(ms / 3600000);
    var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
    var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
    var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds+'.'+ds;
  }
  */
// to desplay timer in werbsite
  update() {
    if (this.state=="running") {
      this.value += this.delay;
    }
    this.display.innerHTML = this.formatTime(this.value);
  }

  start() {
    if (this.state=="paused") {
      this.state="running";
      if (!this.interval) {
        var t=this;
        this.interval = setInterval(function(){t.update();}, this.delay);
      }
    }
  }

  stop() {
       if (this.state=="running") {
      this.state="paused";
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
       }
  }
  // time in seconds
runFor(s){
  this.run();
  this.stopAt(s);
}
// time in s
 stopAt(s){
   while (this.state =="running"){
     if (this.value >= s*1000){
       this.stop();
     }
   }
 }
// decrease time by 10 seconds
 decreasetime(){
   this.value = this.value + 10*1000;
 }
// adds time by specified time put it in seconds
 addtime(s){
   his.value = this.value - s*1000;

 }

  reset() {
    this.stop();
    this.value=0;
    this.update();
  }
}

class StopWatchTester() impliments Stopwatch(){
  StopWatch watch = new Stopwatch();
  watch.runFor(10);
  
}
