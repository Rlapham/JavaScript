var gold;
var Leaf = []; 

for(var b = 0; b < 10; b++){
   Leaf [b] = {
      x: 0,
      y: 0,
      display: function(x, y, w, h, s, f){
         stroke(s);
         fill(f);
         ellipse(x, y, w, h);
      },
      rotate: function(r){
         rotate(r); 
   },
}
}


function setup() {
   createCanvas (600, 600); 
   // background(0);
}

function draw() {
   background(0);
   // frameRate(5);
      push();
      translate(width/2,height/2);
      for (var a = 0; a < Leaf.length; a++){
          for (var i = 60; i > 1; i--){
            rotate(a);
            gold = map(i, 1, 60, 255, 0);
            Leaf[a].display(0, .001, i * 3, i * 8, gold, gold);
            Leaf[a].rotate(1.618033); 
            println(Leaf);
      }
   }
   pop();
}
   
   // (i*1.618033)*10
   
//    for (var i = 10; i > 0; i--){
//       Leaf(i);
//    }
// }

// function Leaf(g){
//    gold = (g * 1.618033);
//    gold = gold * 3; 
//    fill(map(gold, 0, 60, 50, 255)); 
//    stroke(200);
//    rotate(1.618033/40);
//    ellipse(width/2, height/2, (gold*3), (gold*8));
//    translate(8, -15); 
// } 
