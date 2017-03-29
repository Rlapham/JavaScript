// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  walker = new Walker();
  background(127);
}

function draw() {
   frameRate(3); 
       //drag to move the world.
  orbitControl();
   
  walker.stepX();
  walker.renderX();
  
  walker.stepX();
  walker.renderX();
}

function Walker() {
  this.x = 5;
  this.y = 5;
  this.z = 5; 

  this.renderX = function() {
    stroke(0);
    for (i = 0; i<100; i++){
    translate(random(-width, width), 0 ,0); 
    box(this.x,this.y, this.z);
    } 
  };

  this.stepX = function() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };
}