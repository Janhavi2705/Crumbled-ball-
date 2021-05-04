
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(350,420);
   // paper.scale  = 0.1;
    ground = new Ground(400,500,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  drawSprites();
 
  

}

function keyPressed(){
 if (keyCode === UP_ARROW);
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
}

