var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  
  car = createSprite(50,200,50,50);
  car.shapeColor="white"
  car.velocityX=speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="white"
}

function draw() {
  background(0); 
   drawSprites();
  
   if(car.isTouching(wall)){
    car.velocity.x=0;
    var deformation =Math.round(0.5 * weight * speed * speed/22509);
    console.log(deformation)
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
   }
  
}

