var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Box1 , Box2 , Box3;
var engine;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	Box1 = new Box((width/2)-90,height-75,20,100);
	Box2 = new Box(width/2,height-25,200,20);
	Box3 = new Box((width/2)+90,height-75,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  Box1.display();
  Box2.display();
  Box3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		packageBody.isStatic = false;
  	}
}