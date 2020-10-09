
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,480,40);
	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)



     
     
     
	db1=new Dustbin(900,600,100,PI); 
	db2=new Dustbin(1050,600,100,PI); 
	db3=new Dustbin(975,650,170,PI/2);



	


	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//World.add(world,dustbin);

	


}


function draw() {
  rectMode(CENTER);
  background(0);
  


  paper.display();
  db1.display();
  db2.display();
  db3.display();
 // ground.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-505} )



}



}

