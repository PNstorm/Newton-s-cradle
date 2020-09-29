
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var roof=(400,350,50,20);
	var stand1=(200,300,50,20);
	var stand2=(200,350,50,20);
	var string1=(400,350,30,5);
	var string2=(400,360,30,5);
	var string3=(400,370,30,5);
	var string4=(400,380,30,5);
	var string5=(400,390,30,5);
	var ball1=(370,350,10,10);
	var ball2=(370,360,10,10);
	var ball3=(370,370,10,10);
	var ball4=(370,380,10,10);
	var ball5=(370,390,10,10);



	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof=
  
  drawSprites();
 
}



