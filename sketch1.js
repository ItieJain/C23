var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var box1;

var engine, world;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box1(300,100,50,50);


}

function draw(){

    background("Black");
    Engine.update(engine);

    box1.display();
}