///CREDITS: sketch inspired and modified from Sin/Cosine example sketch: https://p5js.org/examples/3d-sine-cosine-in-3d.html, and Multiple Particle System example: https://p5js.org/examples/simulate-multiple-particle-systems.html
// Code of VR integration from created by Patrick Catanzariti: https://www.sitepoint.com/bringing-vr-to-web-google-cardboard-three-js/
//////////////////////

// var seeds; 
// var change = 0; 

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
//  seeds = []; 
}

function draw(){
//  background(200);
   box(100, 200, 200); 
   
  //drag to move the world.
  orbitControl();
   
//  for (i = 0; i < seeds.length; i++) {
//     seeds[i].run();
//     seeds[i].addParticle();
//  }   
  
//  this.p = new Particle (100 + change, 200, 100);
//  seeds.push(p);
//  change += 1; 
   
//  //drag to move the world.
//  orbitControl();
  
  
// // A simple Particle class
//  var Particle = function(position) {
// //  this.acceleration = createVector(0, 0.05);
// //  this.velocity = createVector(random(-1, 1), random(-1, 0));
//  this.position = position.copy();
// //  this.lifespan = 255;
// };
  
//  Particle.prototype.run = function() {
// //  this.update();
//  this.display();
// };

// // // Method to update position
// // Particle.prototype.update = function(){
// //  this.velocity.add(this.acceleration);
// //  this.position.add(this.velocity);
// //  this.lifespan -= 2;
// // };

// // Method to display
// Particle.prototype.display = function () {
// //  stroke(200, this.lifespan);
// //  strokeWeight(2);
// //  fill(127, this.lifespan);
//  sphere(100, 200, 12);
// };

// // // Is the particle still useful?
// // Particle.prototype.isDead = function () {
// //  if (this.lifespan < 0) {
// //     return true;
// //  } else {
// //     return false;
// //  }
// // };

  
}