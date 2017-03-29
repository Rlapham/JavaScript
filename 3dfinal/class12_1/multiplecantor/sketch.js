

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
}
 
function draw() {
  background(255);
 frameRate(2);
//  translate(-350,0,0);
  
    //drag to move the world.
  orbitControl();
  
  cantor(10, 10, 30); 
  translate(580, 0, 620); 
  cantorX(10, 10, 30); 
  translate(-600, -20, 620); 
  cantorY(10, 10, 30); 
 translate(0, -580, 620); 
 cantorY2(10, 10, 30); 

   
}  
  
  
  
  
function cantor(x, y, len) {
   // Stop at 1 pixel!

   translate(-20, 0, -20);
  if (len >= 1) {
    ellipsoid(x, y, x/len);
    y += 20;
    cantor(x,y,len/3);
    cantor(x+len*2/3,y,len/3);

  }
}

function cantorX(x, y, len) {
   // Stop at 1 pixel!

   translate(20, 0, -20);
 if (len >= 1) {
    ellipsoid(x, y, x/len);
    y += 20;
    cantorX(x,y,len/3);
    cantorX(x+len*2/3,y,len/3);

 }
}

function cantorY(x, y, len) {
   // Stop at 1 pixel!

   translate(0, 20, -20);
 if (len >= 1) {
    ellipsoid(x, y, x/len);
    y += 20;
    cantorY(x,y,len/3);
    cantorY(x+len*2/3,y,len/3);

 }
}

function cantorY2(x, y, len) {
   // Stop at 1 pixel!

   translate(0, -20, -20);
 if (len >= 1) {
    ellipsoid(x, y, x/len);
    y += 20;
    cantorY2(x,y,len/3);
    cantorY2(x+len*2/3,y,len/3);

 }
}

