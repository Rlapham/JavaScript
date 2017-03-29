// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walkerX;
// var walkerY;
// var walkerZ;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  walkerX = new WalkerX();
//  walkerY = new WalkerY();
//  walkerY = new WalkerZ();
  background(127);
}

function draw() {
   frameRate(3); 
       //drag to move the world.
  orbitControl();
   
  walkerX.step();
  walkerX.render();
  
//  walkerY.step();
//  walkerY.render();
  
//  walkerZ.step();
//  walkerZ.render();
}

function WalkerX() {
  this.x = 50;
  this.y = 50;
  this.z = 50; 

  this.render = function() {
    stroke(0);
    for (i = 0; i<100; i++){
    translate(random(-width, width), random(-width, width) ,random(-width, width)); 
    box(this.x,this.y, this.z);
    } 
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

// function WalkerY() {
//  this.x = 5;
//  this.y = 5;
//  this.z = 5; 

//  this.render = function() {
//     stroke(0);
//     for (i = 0; i<100; i++){
//     translate(0, random(-width, width) ,0); 
//     box(this.x,this.y, this.z);
//     } 
//  };

//  this.step = function() {
//     var choice = floor(random(4));
//     if (choice === 0) {
//       this.x++;
//     } else if (choice == 1) {
//       this.x--;
//     } else if (choice == 2) {
//       this.y++;
//     } else {
//       this.y--;
//     }
//     this.x = constrain(this.x,0,width-1);
//     this.y = constrain(this.y,0,height-1);
//  };
// }

// function WalkerZ() {
//  this.x = 5;
//  this.y = 5;
//  this.z = 5; 

//  this.render = function() {
//     stroke(0);
//     for (i = 0; i<100; i++){
//     translate(0, 0 ,random(-width, width)); 
//     box(this.x,this.y, this.z);
//     } 
//  };

//  this.step = function() {
//     var choice = floor(random(4));
//     if (choice === 0) {
//       this.x++;
//     } else if (choice == 1) {
//       this.x--;
//     } else if (choice == 2) {
//       this.y++;
//     } else {
//       this.y--;
//     }
//     this.x = constrain(this.x,0,width-1);
//     this.y = constrain(this.y,0,height-1);
//  };
// }