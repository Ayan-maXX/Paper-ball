var ground, groundSprite, rect1, rect2, rect3, Paper, Papersprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(400, 350, 800, 15)

	ground = Bodies.rectangle(500, 610, 800, 15, {isStatic:true})
	World.add(world, ground)

	rect1sprite = createSprite(600, 335, 200, 20)
	rect1sprite.shapeColor="red"
	rect2sprite = createSprite(500, 295, 20, 100)
	rect2sprite.shapeColor="red"
	rect3sprite = createSprite(700, 295, 20, 100)
	rect3sprite.shapeColor="red"
	
	
	rect1 = Bodies.rectangle(600, 335, 200, 20, {isStatic:true})
	World.add(world, rect1)
	rect2 = Bodies.rectangle(500, 295, 20, 100, {isStatic:true})
	World.add(world, rect2)
	rect3 = Bodies.rectangle(700, 295, 20, 100, {isStatic:true})
	World.add(world, rect3)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



