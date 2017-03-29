///CREDITS: sketch inspired and modified from Sin/Cosine example sketch: https://p5js.org/examples/3d-sine-cosine-in-3d.html
// Code of VR integration from created by Patrick Catanzariti: https://www.sitepoint.com/bringing-vr-to-web-google-cardboard-three-js/
//////////////////////


// var middle = 0; 

//VR Variables
      var scene,
          camera, 
          renderer,
          element,
          container,
          effect,
          controls,
          clock; 
          
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(250);
  
   // VR();
  
//  frameRate(30); 
//  rotateY(frameCount * 0.01);

  //drag to move the world.
  orbitControl();

 for(var j = 0; j < 1; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(sin(frameCount * 0.0005 + j) * (0+100), sin(frameCount * 0.0005 + j) * 1,  4);
      // translate(cos(frameCount * 0.0005 + j) * (0+100), cos(frameCount * 0.0005 + j) * 1,  4);
      // translate(1.61, 1.61, 5); 
      rotateZ(frameCount * 0.002);
      push();
      sphere(6, 6, 4); 
      pop();
      // middle += 1;
      // if (middle > 5){
      //    middle = 0; 
      // }
      }
    pop();
 }
}

 function VR() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.001, 700);
        camera.position.set(0, 15, 0);
        scene.add(camera);
        renderer = new THREE.WebGLRenderer();
        element = renderer.domElement;
        container = document.getElementById('webglviewer');
        container.appendChild(element);
        effect = new THREE.StereoEffect(renderer);
        // Our initial control fallback with mouse/touch events in case DeviceOrientation is not enabled
        controls = new THREE.OrbitControls(camera, element);
        controls.target.set(
          camera.position.x + 0.15,
          camera.position.y,
          camera.position.z
        );
        controls.noPan = true;
        controls.noZoom = true;


 function setOrientationControls(e) {
          if (!e.alpha) {
            return;
          }
          controls = new THREE.DeviceOrientationControls(camera, true);
          controls.connect();
          controls.update();
          element.addEventListener('click', fullscreen, false);
          window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
       
        window.addEventListener('deviceorientation', setOrientationControls, true);
        
              function resize() {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        effect.setSize(width, height);
      }
      function update(dt) {
        resize();
        camera.updateProjectionMatrix();
        controls.update(dt);
      }
      function render(dt) {
        effect.render(scene, camera);
      }
      function fullscreen() {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.msRequestFullscreen) {
          container.msRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        }
      }
      function getURL(url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4) {
             if (xmlhttp.status == 200){
                 callback(JSON.parse(xmlhttp.responseText));
             }
             else {
                 console.log('We had an error, status code: ', xmlhttp.status);
             }
          }
        }
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
}
}


