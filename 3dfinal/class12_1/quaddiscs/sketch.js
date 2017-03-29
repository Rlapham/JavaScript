

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  var radius = 30; 
}
 
function draw() {
  background(255);
//  frameRate(1);
//  translate(-350,0,0);
  
    //drag to move the world.
  orbitControl();
  
  drawCircleZ(40,40,20);
// drawCircleX(40,40,20);
  
   // drawCircle(150 + radius/2, 100, radius/2);
   // drawCircle(150 - radius/2, 100, radius/2);
 

//  radius -= 2; 
  
}
 
function drawCircleZ(x, y, radius) {
  
  stroke(0);
  noFill();
  translate(0, 0, 5); 
  cone(x, y, radius);
//  no push/pop!
  if (radius > 2){
   drawCircleZ(10 + radius/2, y+100, radius/2);
   drawCircleZ(10-radius/2, y-100, radius/4);
   
   drawCircleZ(x, 10 + radius/2, radius/2);
   drawCircleZ(x, 10-radius/2, radius/4);
   
   } 
}

// function drawCircleX(x, y, radius) {
  
//  stroke(0);
//  noFill();
//  translate(0, -50, 0); 
//  ellipsoid(x, y, radius);
// //  no push/pop!
//  if (radius > 2){
//    drawCircleX(10 + radius/2, y+100, radius/2);
//    drawCircleX(10-radius/2, y-100, radius/4);
   
//    drawCircleX(x+50, 10 + radius/2, radius/2);
//    drawCircleX(x-50, 10-radius/2, radius/4);
   
//    } 
// }
