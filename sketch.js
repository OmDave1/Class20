//Pre defined Properties of Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables for engine world creation and bodies
var engine;
var world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  //creating canvas for project
  createCanvas(400,400);

  //creating the world and engine
  engine = Engine.create();
  world = engine.world;

  //properties of bodies
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var ops={
    isStatic:true
  };

  //creating ground and adding to the world
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(world,wall);
  
  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  //background
  background(51);

  //updating engine
  Engine.update(engine);
  
  //wedges creation and rotating and translating it
  Matter.Body.rotate(wedge,angle)
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

  //displaying the cirlce and the rectangle
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  rect(wall.position.x,wall.position.y,70,20);

  
  
}

