
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(300,50,200,20); 
    bobObject1 = new bob(220,200,45);
	bobObject2 = new bob(260,200,45);
	bobObject3 = new bob(300,200,45);
	bobObject4 = new bob(340,200,45);
	bobObject5 = new bob(380,200,45);
    rope1 = new rope(bobObject1.body,{x:220,y:50});
	rope2 = new rope(bobObject2.body,{x:260,y:50});
	rope3 = new rope(bobObject3.body,{x:300,y:50});
	rope4 = new rope(bobObject4.body,{x:340,y:50});
	rope5 = new rope(bobObject5.body,{x:380,y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(190);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:-50});
	}
}


