var radius = 3; 

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
}
 
function draw() {
  background(255);
  
    //drag to move the world.
  orbitControl();
  
  drawCircle(150,100,100);
  
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
   drawCircle(10 + radius/2, y+10, radius);
   drawCircle(10-radius/2, y+10, radius);
   } 
}
