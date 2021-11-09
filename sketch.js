var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
   drawSprites();

//apple
   var select_sprites = Math.round(random(1,3));
    if (frameCount % 80 == 0) {
    if (select_sprites  == 1)
    { createApples(); }
    else if  (select_sprites == 2) {        createApples();}
    else { createApples();}}
  }   drawSprites();

  //red leaf
  var select_sprites = Math.round(random(1,3));
   if (frameCount % 100 == 0) {
   if (select_sprites == 1)
   { createRed(); }
   else if (select_sprites == 5) {          createRed();}
   else { createRed();}}
         drawSprites();
   
   




function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 5;
apple.lifetime = 150;
  
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 5;
  redL.lifetime = 150;
}
