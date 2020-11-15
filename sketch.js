const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,ball,ground;
var backgroundImg;

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  backgroundImg = loadImage("bg.jpg")

  var ground_options={
    isStatic : true
  }


  var platform_options={
    isStatic: true
  }

  ground = Bodies.rectangle(750,350,400,20,ground_options)
  World.add(world,ground);

platform = Bodies.rectangle(750,100,200,20,platform_options);
World.add(world,platform);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(750,200,50,ball_options);
World.add(world,ball);


var string_options = {
  bodyA : ball,
  bodyB : platform,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(string_options);
World.add(world,string);

fill("yellow");
}


function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  textSize(15);
  text("Instructions:",10,300)  
  text("1) Click Space. ",10,320);
  text("2) To oscillate the pendulum, move the mouse.",10,340)
  text("3) Press Enter to stop the Pendulum from oscillating with the mouse.",10,360);
  textSize(45);
  fill("cyan")
  text("OSCILLATING PENDULUM",500,50)

  fill ("green");
rectMode(CENTER);
rect(platform.position.x,platform.position.y,200,20);

fill("red");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("pink");
ellipseMode(RADIUS);
stroke("blue")
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("turquoise");
line(ball.position.x,ball.position.y,platform.position.x,platform.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 750;

}

}