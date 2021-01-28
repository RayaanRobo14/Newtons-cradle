
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var roofObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    //ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bobObject1 = new Bob(300,350,30);
	bobObject2 = new Bob(350,350,30);
	bobObject3 = new Bob(400,350,30);
	bobObject4 = new Bob(450,350,30);
	bobObject5 = new Bob(500,350,30);
	roof = new Roof(400,175,500,35);
	sling1= new Rope(bobObject1.body,roof.body,-60*2,0);
	sling2= new Rope(bobObject2.body,roof.body,-30*2,0);
	sling3= new Rope(bobObject3.body,roof.body,0*2,0);
	sling4= new Rope(bobObject4.body,roof.body,30*2,0);
	sling5= new Rope(bobObject5.body,roof.body,60*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);

  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}
function keyPressed() {
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});}	
if(keyCode === LEFT_ARROW) {
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});}	
	}




