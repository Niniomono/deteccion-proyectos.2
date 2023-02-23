objectDetector = "";
img = "";
status = "";
objects = [];

function preload(){
  img = loadImage('frutero.jpg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video.size(380, 380);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estado: detectando objetos";
  video.hide();
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 380, 380);
  if (status != ""); {
  r = random(255)
  g = random(225)
  b = random(225)
  objectDetector.detect(video, gotResult);    
    for(i = 0; i < objects.length; i++); {
       document.getElementById("status").innerHTML = "Estado: objeto detectado";
       document.getElementById("number_of_objects").innerHTML = "Numero de Objetos detectados: "+ objects.length;
       fill(r, g, b);
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
       noFill();
       stroke(r, g, b);
       rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
  }
  }
