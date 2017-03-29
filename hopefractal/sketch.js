///credit for function branch - dan shiffman making trees// 

var canvas;
var col;
var woahbutton;
var woahslider; 
var positionslider; 
var slidepos; 
var angle; 
var woahwords; 
var reset; 
var notrees; 
var fratcalX; 


function setup(){
canvas = createCanvas(screen.width, screen.height/1.5);
canvas.position("absolute");
canvas.position(0, 110);
   col = color(30);
   background(col);
   ///buttons
   woahbutton = createButton("woah");
   woahbutton.position("relative");
   woahbutton.class("myButton");
   reset = createButton("too many trees");
   reset.position("relative");
   reset.class("myReset"); 
   moretrees = createButton("not enough trees");
   moretrees.position("relative");
   moretrees.class("myMore");
   ///
   woahbutton.mousePressed(change);
   reset.mousePressed(resetback);
   moretrees.mousePressed(everywhere);
   fractalX = 0; 

   
   woahslider = createSlider(PI, 0, PI/4);
   woahslider.class("mySlider"); 
   ////
   positionslider = createSlider(0, 300, 200);
   positionslider.class("posSlide"); 

}

function draw (){

   ///FRACTAL
   translate(screen.width/2, height); 
   stroke(230); 
   ellipse(0, 0, 50, 50);
   angle = woahslider.value(); 
   slidepos = positionslider.value();
   
   branch(fractalX, slidepos);
   
   
}


function change(){
     fractalX = 100; 
}

function resetback(){
   background(col); 
   woahslider.value(PI/4);
   fractalX = 0; 
   
}

function everywhere(){
   push();
   translate(300, 200);
   branch(fractalX, slidepos); 
   pop();
   push();
   translate(-300, 200);
   branch(fractalX, slidepos); 
   pop(); 
   push();
   translate(500, 200);
   branch(fractalX, slidepos); 
   pop(); 
   push();
   translate(-500, 200);
   branch(fractalX, slidepos); 
   pop(); 
   
}



function branch(lines, len) {
  // Each branch will be 2/3rds the size of the previous one

  //float sw = map(len,2,120,1,10);
  //strokeWeight(sw);
  strokeWeight(2);
      
  line(0, 0, lines, -len);
  // Move to the end of that line
  translate(0, -len);
//  rotate(angle); 

  len *= 0.6138;
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
 if (len > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(angle);   // Rotate by theta
    branch(lines, len);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-angle);
    branch(lines, len);
    pop();
 }
}