const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10;


function preload() {
    backgroundImg = loadImage("sprites/ground1.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    brick1 = new Box(700,320,120,70);
    brick2 = new Box(920,320,120,70);
brick3 = new Box(700,320,120,70);
brick4 = new Box(920,320,120,70)
    brick5 = new Box(700,300,120,70);
    brick6 = new Box(920,300,120,70);
    brick7 = new Box(700,320,120,70)
    brick8 = new Box(920,320,120,70);
   // brick5 = new Box(810,160,120,70);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:350, y:50});
}

function draw(){
    background(0);
    background(backgroundImg);
  
    Engine.update(engine);
    strokeWeight(4);
    brick1.display();
    brick2.display();
    ground.display();
   brick3.display();
brick4.display();
    brick5.display();
    brick6.display();
 brick7.display();
 brick8.display();
    //brick5.display();


    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}