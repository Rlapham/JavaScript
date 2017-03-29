var vid;
var img; 
var playing = false;
var dragging = false; 
var rollover = false;
var radius; 

// function preload() {
//  img = loadImage("test.png");
// }

function setup() {
 createCanvas(600, 400);
 vid = createVideo("realbadspace.mp4");
 vid.size(600, 400);
   vid.loop()
   vid.hide();
   stroke(0);
   strokeWeight(.3);

}

function draw() {
 background(50);
   vid.volume(0);
   // frameRate(10); 
   vid.loadPixels();
   
   if (dragging == true){
      ///left
      radius = 5
      push();
      translate(-width/2 + 50 , 0);
    for (var y = 0; y < height + radius; y += 6) {
    for (var x = 0; x < width; x += 1) {
      var offset = ((y*width)+x)*3;
      fill(vid.pixels[offset]+mouseX,
       vid.pixels[offset+1]+mouseX,
       vid.pixels[offset+2]+mouseX) - 25;
      strokeWeight(3);  
      stroke(vid.pixels[offset+2],
       vid.pixels[offset],
       vid.pixels[offset+1]);
      ellipse(x, y, radius*4, radius); 
    }
    pop();
    }
     ///right 
      push();
      translate(width/2 +50, 0);
    for (var y = 0; y < height + radius; y += 6) {
    for (var x = 0; x < width; x += 6) {
      var offset = ((y*width)+x)*3;
      fill(vid.pixels[offset]+mouseX,
       vid.pixels[offset+1]+mouseX,
       vid.pixels[offset+2]+mouseX);
      strokeWeight(3);  
      stroke(vid.pixels[offset+2],
       vid.pixels[offset],
       vid.pixels[offset+1]);
      ellipse(x, y, radius*4, radius); 
      // ellipse(x * cos(x), y * sin(y), sin(y), 3); 
    }
    }
    pop();
   }
 
else {
 for (var y = 0; y < height; y += 6) {
    for (var x = 0; x < width; x += 6) {
      var offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
       vid.pixels[offset+1],
       vid.pixels[offset+2]);
      strokeWeight(1);  
      stroke(vid.pixels[offset],
       vid.pixels[offset+1],
       vid.pixels[offset+2]);
      rect(x, y, 5, 5); 
    }
 }
   }
}


//////
function keyPressed() {
 if (!playing) {
    vid.play();
    vid.time((mouseX/width) * vid.duration());
    playing = true;
 }
 else {
    vid.pause();
    playing = false;
 }
}

function mousePressed() {
    dragging = true;
}

function mouseReleased() {
 // Stop dragging
 dragging = false;
}