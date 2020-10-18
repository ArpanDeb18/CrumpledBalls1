var ball, ballSprite, ground;
var baseWall, sideWall1, sideWall2;
var baseW;
var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


    engine = Engine.create();
	world = engine.world;


	ground = new Ground(width/2, height-35, width, 10);

	baseW = new Dustbin(width/2 + 350, height - 50, 200, 20);

	sideWall1 = new Dustbin((width/2 + 350) - 200/2, height - 100, 20, 100);
	
	sideWall2 = new Dustbin((width/2 + 350) + 200/2, height - 100, 20, 100);

	ball = new Paper(100, height - 60, 40);

	
	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1200, 
			height: 700, 
			wireframes: false 
		} 
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() { 
	rectMode(CENTER); 
	background(0); 

	
	sideWall1.display();
	sideWall2.display();
	baseW.display();
	ball.display();
	ground.display();
	


}

function keyPressed() {

	if(keyCode === 	UP_ARROW){


		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85});

	}
}





