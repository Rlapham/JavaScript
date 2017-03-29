// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;


function setup() {
  createCanvas(640,360, WEBGL);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

function Walker() {
  this.x = 1;
  this.y = 1;
  this.z = random(20); 

  this.render = function() {
    stroke(0);
    box(this.x,this.y,this.z);
  };

  this.step = function() {
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