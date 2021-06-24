const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var stand1, stand2;
var polygon;
var object;
var slingshot; 

function preload(){
    polygon = loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(410,280,40,50);
    box2 = new Box(400,280,40,50);
    box3  = new Box(390,280,40,50);
    box4  = new Box(380,280,40,50);
    box5  = new Box(405,260,40,50);
    box6 = new Box(395,260,40,50);
    box7  = new Box(385,260,40,50);
    box8 = new Box(400,240,40,50);
    box9 = new Box(390,240,40,50);
    box10  = new Box(395,220,40,50);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(750, 150, 250,10);
    //ground = new Ground(390,300,250,10)
    object = Bodies.circle(120,200,30); 
    World.add(world, object);
    slingshot= new Slingshot(this.object,{x:120 , y:210});
    
}
function mouseDragged(){
    
    //if(gamestate!=="launched"){
        Matter.Body.setPosition(this.object,{x : mouseX , y: mouseY});
    //}
}

function mouseReleased(){

    slingshot.fly();
}
// function keyPressed(){
//     if (keyCode === 32){
//         Matter.Body.setPosition(bird.body,{x : 200 , y: 50});
//         slingshot.attach(bird.body); 
//         bird.trajectory= []
//     }
// }

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    imageMode(CENTER);
    image(polygon,object.position.x, object.position.y,30,30);
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    //ground.display();
    stand1.display();
    stand2.display();

}