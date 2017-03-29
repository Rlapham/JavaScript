///credit for function branch - dan shiffman making trees//

var canvas;
var col;
// var woahbutton;
// var woahslider;
var positionslider;
var angle;
var woahwords;
var reset;
var notrees;
var fratcalX;

var table;
var slidepos;
var slideStart; 
var slideMid; 
var slideEnd; 

var oneYear; 
var oneStart;
var oneMid; 
var oneEnd; 
var oneYearText

var fakeSlide; 
var fakeStart;
var fakeMid; 
var fakeEnd; 

var mappedYear; 


function preload() {
  ///table
  table = loadTable("realtemp.csv", "csv", "header");
   tableAlt = loadTable("realtempalt.csv", "csv", "header");
}


// function draw() {
//   background(50);
//   for (var i = 1; i < tempur.getRowCount(); i++) {
//     fill(255);
//     ellipse(i*5, (tempur.getNum(i, "Global")+ 100), 5, 5);
//     fill(0);
//     ellipse(i*5, (tempur.getNum(i, "5-year_Mean")+100), 5, 5);
//   }
// }


function setup(){
canvas = createCanvas(screen.width, screen.height);
canvas.position("absolute");
canvas.position(0, 0)
   col = color(15);

   ///buttons
   // woahbutton = createButton("woah");
   // woahbutton.position("relative");
   // woahbutton.class("myButton");
   // reset = createButton("too many trees");
   // reset.position("relative");
   // reset.class("myReset");
   // moretrees = createButton("not enough trees");
   // moretrees.position("relative");
   // moretrees.class("myMore");
   ///
   // woahbutton.mousePressed(change);
   // reset.mousePressed(resetback);
   // moretrees.mousePressed(everywhere);
   // fractalX = 0;


   oneStart = tableAlt.getNum(1, "OneYearMean");  
   oneEnd = tableAlt.getNum(135, "OneYearMean"); 
   oneMid =  tableAlt.getNum(50, "OneYearMean"); 

   woahslider = createSlider(oneStart, oneEnd, oneMid);
   woahslider.class("mySlider");
   
   //climate change fake
   fakeStart = 0;  
   fakeEnd = 100; 
   fakeMid =  50; 

   fakeslider = createSlider(fakeStart, fakeEnd, fakeMid);
   fakeslider.class("myFakeSlider");
   
   
   ////
   slideStart = table.getNum(1, "Year");  
   slideEnd = table.getNum(135, "Year"); 
   slideMid =  table.getNum(50, "Year"); 
   

   positionslider = createSlider(slideStart, slideEnd, slideMid);
   positionslider.class("posSlide");
   

}

function draw (){
   background(col);
   slidepos = positionslider.value();
   oneYear = woahslider.value();
   fakeSlide = fakeslider.value();
   
   fill(240);
   stroke(240); 
   strokeWeight(1);

   // text(slidepos, 200, 100); 
   textSize(15);
   text("temp increase", 250, 100);
   text("year", 600, 100);
   
   mappedYear = map(oneYear, oneStart, oneEnd, slideStart, slideEnd); 
   fakemappedYear = map(oneYear, fakeStart, fakeEnd, slideStart, slideEnd); 
   textSize(24);
   oneYearText = oneYear/100;
   text(oneYearText, 370, 100); 
   text(fakemappedYear, 670, 100);
   
    
   // text(oneStart, 500, 100);
   // text(oneEnd, 500, 200);
   // text(oneMid, 500, 300);
   // text(slideEnd, 300, 100);
   // text(slideMid, 400, 100); 

   // ellipse(100, table.getNum(6, "OneYearMean")+100, 100, 100); 

   // for (var i = 1; i < table.getRowCount(); i++) {
   //     fill(150);
   //     ellipse(100, table.getNum(i, "OneYearMean")*i, 100, 100); 
   //     fill(0);
   //     ellipse(i*5, (tempur.getNum(i, "FiveYearMean")+100), 5, 5);
   //  }


   // ///FRACTAL
   translate(0, height/2);
   translate(width/4, 0);
   stroke(240);
   push();
   stroke(240); 
   fill(240); 
   line(0, 0, -400, 0); 
   pop();
   push();
   stroke(240); 
   fill(240); 
   line(0, 0, width, 0); 
   pop();

   fractalVal = slidepos; 
   angle = oneYear *3;
   
   branch(0, angle);
   


}

function branch(lines, len) {
  // Each branch will be 2/3rds the size of the previous one

  //float sw = map(len,2,120,1,10);
  //strokeWeight(sw);
  rotate(HALF_PI)
  fill(240); 
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





// function change(){
//     fractalX = 100;
// }

// function resetback(){
//    background(col);
//    woahslider.value(PI/4);
//    fractalX = 0;

// }

// function everywhere(){
//    push();
//    translate(300, 200);
//    branch(fractalX, slidepos);
//    pop();
//    push();
//    translate(-300, 200);
//    branch(fractalX, slidepos);
//    pop();
//    push();
//    translate(500, 200);
//    branch(fractalX, slidepos);
//    pop();
//    push();
//    translate(-500, 200);
//    branch(fractalX, slidepos);
//    pop();

// }

