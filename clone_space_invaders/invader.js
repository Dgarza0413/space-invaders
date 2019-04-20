// this is a constructor argument and when i use keyword this they will place an arbitrary variable that can be placed anywhere versus hard coding the x and y position
function Invader(x, y) {
  this.x = x;
  this.y = y;
 
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 60,60);
  } 

}