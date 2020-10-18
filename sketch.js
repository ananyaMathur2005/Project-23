var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var red1 , red2 , red3 ; 
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
	
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	red1 = createSprite(300,610,20,100,red1_options);
	red1.shapeColor = color(255,0,0)

	red2 = createSprite(450,610,20,100,red2_options);
	red2.shapeColor = color(255,0,0)

	red3 = createSprite(370,650,150,20,red3_options);
	red3.shapeColor = color(255,0,0)

    engine = Engine.create();
	world = engine.world;
	
	var red1_options ={
		isStatic:true
		}	
	var red2_options ={
		isStatic:true
	}
	var red3_options ={
		isStatic:true
}
		
	var packageBody_options ={
		isStatic:true
		}

	var packageBody_options ={
	restitution: 0.3
	}
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options );
	World.add(world, packageBody);
	
	var ground_options ={
	isStatic:true
	}
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);

    Engine.run(engine);
  

}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
  }
}
red1.display();
red2.display();
red3.display();



