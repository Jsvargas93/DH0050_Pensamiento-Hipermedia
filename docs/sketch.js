// Where is the car
let x, y;

//crearclasecarro
class carro {
 constructor(alto,ancho,color,name){
  this.name=name;
  this.alto=alto;
  this.ancho=ancho;
  this.color=color;
 }
}

function setup() {
  
  createCanvas(400, 200);
  // Starts position
  y = height - height/4;
  x = 0;

// crearuna instancia de carro llamada mimaquina
 let mycar = new carro (5,15,(blue),"my first carr");

console.log("mycar ancho is: "+mycar.ancho);
console.log("mycar alto is: "+ mycar.alto);
console.log("nombre de mycar es:"+mycar.name);
}


function draw() {
  background(80);  
  display();
  move();
}


   
function move(){
  // Jiggling randomly
  y = y + random(-1, 1);
  
  if (x > width) {
    // Reset 
    x = 0;
  } else {
    // Moving up at a constant speed
    x = x + 1;
  }
}

function display(){
  // Draw a car
  stroke(50);
  fill(255,4,150);
  rect(x, y, 20, 10);
}
