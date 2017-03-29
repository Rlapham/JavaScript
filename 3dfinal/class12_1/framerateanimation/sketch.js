var change = 0; 

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
}
 
function draw() {
  background(255);
 frameRate(2);
 translate(0,0,300);
  
    //drag to move the world.
  orbitControl();
  
  cantor(10, 10, 30); 

   
}  
  
  
  
  
function cantor(x, y, len) {
   // Stop at 1 pixel!
   change +=1; 

   translate(0, 0, -change);
  if (len >= 1) {
    box(x, y, x+len);
    y += 20;
    cantor(x,y,len/3);
    cantor(x+len*2/3,y,len/3);

  }
  if (change > 100){
   change = 0; 
  }
  
}
