function Ship() {
  this.x = width/2;
 
  
  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20,20,60);
  } 
  
// dir = the argument that will happen between 1 and -1
  
this.move = function(dir) {
  this.x += dir*5;
  }
  
}