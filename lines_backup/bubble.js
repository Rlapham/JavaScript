var serial; // variable to hold an instance of the serialport library
var sensorValueX = 0;
var sensorValueY = 0;   // ellipse position
var lines = [];
var spheresx = [];

function setup() {
  createCanvas(400, 400);
  //serial//
  serial = new p5.SerialPort(); // make a new instance of  serialport library
  serial.on('list', printList); // callback function for serialport list event
  serial.on('data', serialEvent); // callback for new data coming in
  serial.list(); // list the serial ports
  serial.open("/dev/cu.usbmodem1411"); // open a port
  noCursor();

  ///array
  for (var i = 0; i < 40; i++){
    lines[i] = new Line();
  }

  ///SphereX
  for (var i = 0; i < 1; i++){
    spheresx[i] = new SphereX();
  }
}

function draw() {
  background(240);
  text(sensorValueX, 20, 20);
  text(sensorValueY, 50, 20);
  noFill();
  for (var i = 0; i < lines.length; i++){
    for (b = 0; b < 400; b += 5){
      lines[i].display(b);
    }
  }
  for (var i = 0; i < spheresx.length; i++){
    spheresx[i].ellipse();
    for (r = 0; r < 200; r += 50){
      spheresx[i].display(r);
    }
  }



}

function SphereX(){
  this.ellipse = function(){
    var anchorX = sensorValueX;
    var anchorY = sensorValueY;
    var radius = 200;
    fill(230);
    ellipse(anchorX, anchorY, radius, radius);
  }

  this.display = function(z){
      var anchorX = sensorValueX;
      var anchorY = sensorValueY;
      var radius = 200;
      noFill();

      ///x
      arc(anchorX, anchorY, radius, radius-z, 0, PI, OPEN);
      arc(anchorX, anchorY, radius, radius-z, PI, 0, OPEN);
      arc(anchorX, anchorY, radius, .1 , 0, 0, OPEN);

      ////y
      arc(anchorX, anchorY, radius-z, radius, 0, PI, OPEN);
      arc(anchorX, anchorY, radius-z, radius, PI, 0, OPEN);
      arc(anchorX, anchorY, .1, radius , 0, 0, OPEN);

};
}



function Line(){

  this.display = function(h){
      bezier(0, h, 0, h, width, h, width , h);
      bezier(h, 0, h, 0, h, height, h, height);
};
}



// get the list of ports:
function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    println(i + " " + portList[i]);
  }
}


function serialEvent() {
  var inString = serial.readStringUntil('\r\n');

  if (inString.length > 0) {
    var sensors = split(inString, ',');            // split the string on the commas
        if (sensors.length > 1) {                      // if there are three elements
          sensorValueX = map(sensors[0], 0, 255, -50, 450);
          sensorValueY = map(sensors[1], 0, 255, -50, 450);
        }
  }
}
