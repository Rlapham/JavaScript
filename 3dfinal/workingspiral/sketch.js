///CREDITS: sketch inspired and modified from Sin/Cosine example sketch: https://p5js.org/examples/3d-sine-cosine-in-3d.html, and Multiple Particle System example: https://p5js.org/examples/simulate-multiple-particle-systems.html
// Code of VR integration from Google Cardboard: https://vr.chromeexperiments.com/
//////////////////////


  

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
 translate(0, 0, -8000); 


 
//drag to move the world.
 orbitControl();

 
  for(var j = 0; j < 1; j++){
    push();
    for(var i = 0; i < 800; i++){
      // translate(sin(frameCount * 0.0005 + j) * (0+100), sin(frameCount * 0.0005 + j) * 1,  4);
      // translate(cos(frameCount * 0.0005 + j) * (0+100), cos(frameCount * 0.0005 + j) * 1,  4);
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.00008);
      push();
      sphere(12, 10, 10); 
      pop();
      // sphereSize += .001; 
      }
    pop();
 }
 
//  push();
 
//    for(var j = 0; j < 1; j++){
//     push();
//     rotateY(3); 
//     for(var i = 0; i < 800; i++){
//       // translate(sin(frameCount * 0.0005 + j) * (0+100), sin(frameCount * 0.0005 + j) * 1,  4);
//       // translate(cos(frameCount * 0.0005 + j) * (0+100), cos(frameCount * 0.0005 + j) * 1,  4);
//       translate(0, -i, 0); 
//       // rotateX(frameCount * 0.0005); 
//       rotateY(frameCount * 0.000008); 
//       rotateZ(frameCount * 0.0002);
//       push();
//       sphere(12, 10, 10); 
//       pop();
//       // sphereSize += .001; 
//       }
//     pop();
//  }
//  pop();
}

