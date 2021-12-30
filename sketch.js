const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var gameState = "Chained";
var pig1;
var floor, floor2;
var engine;
var world;
var box, box2;
var bird;
var table1;
var brick1, brick2;
var fondo;
var chain1;

function preload(){
 fondo = loadImage("Images/bg.png");

}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  rectMode(CENTER);
  floor = new Floor(600,600,windowWidth,10);  
  floor2 = new Floor(150,300,300,10);

  table1 = new Table(500,windowHeight-170, 2*PI);
  table2 = new Table(660,windowHeight-100, PI/2);
  table3 = new Table(750,windowHeight-100, PI/2);
  table4 = new Table(840,windowHeight-100, PI/2);
  table5 = new Table(970,windowHeight-100, PI/2);
  table6 = new Table(1030,windowHeight-100, PI/2);
  table7 = new Table(700,windowHeight-200, 2*PI);
  table8 = new Table(800,windowHeight-200, 2*PI);
  table9 = new Table(1000,windowHeight-200, 2*PI);

  brick1 = new Block(500,windowHeight-50);
  brick2 = new Block(650,windowHeight-50);
  brick3 = new Block(750,windowHeight-50);
  brick4 = new Block(850,windowHeight-50);
  brick5 = new Block(1000,windowHeight-50);
  
  pig1 = new Pig(600,300);

  bird = new Bird(200,120);

  box = new Box(500,windowHeight-150);
  box2 = new Box(400,300);
  box3 = new Box();
  
  chain1 = new Chain(bird.body,{x:200,y:120});
}

function draw() {
  background(fondo);  
  Engine.update(engine);

  floor2.paint(0);
  floor2.show();
   
  console.log(mouseX);

  box.show();

  //pig1.show();

  bird.show();

  chain1.show();

  floor.paint(0);
  floor.show();

  table1.show();
  table2.show();
  table3.show();
  table4.show();
  table5.show();
  table6.show();
  table7.show();
  table8.show();
  table9.show();


  brick1.show();
  brick2.show();
  brick3.show();
  brick4.show();
  brick5.show();
}

function mouseDragged(){
  if(gameState === "Chained"&&mouseX > 100&&mouseX < 300){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
  else if(mouseX < 100){
    Matter.Body.setPosition(bird.body,{x:100,y:mouseY});
  }
  else if(mouseX > 300){
    Matter.Body.setPosition(bird.body,{x:300,y:mouseY});
  }
}


function mouseReleased(){
  chain1.release();
  //gameState = "Released";
}