function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
background(10); 
  orbitControl();
  for (i = 0; i <100; i++){
rotateZ(frameCount * .0004);  
rotateY(frameCount * .00004);  
   //  sphere(50,10,10); 
   //  box(200,10,10);
    torus(200, 10,10);
   box(20,10,10);

}
}