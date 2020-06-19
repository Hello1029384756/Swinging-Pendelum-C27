const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var balls;
var beam

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(395,310,30);
	ball1 = new Ball(365,310,30);
	ball2 = new Ball(335,310,30);
	ball3 = new Ball(425,310,30);
	ball4 = new Ball(1955,310,30);
	ground = new Ground(400,50,800,20);

	var options = {
		bodyA: ball.body,
		bodyB: ground.body,
		length: 400,
		stiffness: 0.05
	}

	var options1 = {
		bodyA: ball1.body,
		bodyB: ground.body,
		length: 400,
		stiffness: 0.05
	}

	var options2 = {
		bodyA: ball2.body,
		bodyB: ground.body,
		length: 410,
		stiffness: 0.05
	}

	var options3 = {
		bodyA: ball3.body,
		bodyB: ground.body,
		length: 410,
		stiffness: 0.05
	}

	var options4 = {
		bodyA: ball4.body,
		bodyB: ground.body,
		length: 410,
		stiffness: 0.05,
		density: 100
	}

	var constraint = Constraint.create(options);
	World.add(world, constraint);
	
	var constraint1 = Constraint.create(options1);
	World.add(world, constraint1);
	
	var constraint2 = Constraint.create(options2);
	World.add(world, constraint2);

	var constraint3 = Constraint.create(options3);
	World.add(world, constraint3);

	var constraint4 = Constraint.create(options4);
	World.add(world, constraint4);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  line(ball.body.position.x, ball.body.position.y, ground.body.position.x, ground.body.position.y)
  line(ball1.body.position.x, ball1.body.position.y, ground.body.position.x - 60, ground.body.position.y)
  line(ball2.body.position.x, ball2.body.position.y, ground.body.position.x - 120, ground.body.position.y)
  line(ball3.body.position.x, ball3.body.position.y, ground.body.position.x + 60, ground.body.position.y)
  line(ball4.body.position.x, ball4.body.position.y, ground.body.position.x + 120, ground.body.position.y)

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85})
	}
}

