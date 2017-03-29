

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  var radius = 30; 
}
 
function draw() {
  background(255);
  
    //drag to move the world.
  orbitControl();
  
  drawCircle(20,20,20);
  
   // drawCircle(150 + radius/2, 100, radius/2);
   // drawCircle(150 - radius/2, 100, radius/2);
 

//  radius -= 2; 
  
}
 
function drawCircle(x, y, radius) {
  
  stroke(0);
  noFill();
  push(); 


  translate(10, 10, 10); 
  ellipsoid(x, y, radius);
  pop();
//  radius -= 2; 
  if (radius > 2){
   // drawCircle(10 + radius/2, y+50, radius/2);
   // drawCircle(10-radius/2, y-50, radius/4);
   
      drawCircle(x+50, y+50, radius/2);
   drawCircle(x-50, 10-radius/2, radius/4);
   } 
}
