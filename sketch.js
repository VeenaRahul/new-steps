var bunny;
var carrot;
var edges;

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
bunny = createSprite(40,550,15,15); 
carrot = createSprite(560,40,30,30);
brick1 = createSprite(50,270,100,25);
brick1.velocityX = 0;
brick2 = createSprite(175,270,100,25);
brick2.velocityX = 0;
brick3 = createSprite(300,270,100,25);
brick3.velocityX = 0;
brick4 = createSprite(425,270,100,25);
brick4.velocityX = 0;
brick5 = createSprite(550,270,100,25);
brick5.velocityX = 0;
brick6 = createSprite(-15,225,100,25);
brick6.velocityX = 0;
brick7 = createSprite(110,225,100,25);
brick7.velocityX = 0;
brick8 = createSprite(235,225,100,25);
brick8.velocityX = 0;
brick9 = createSprite(360,225,100,25);
brick9.velocityX = 0;
brick10 = createSprite(485,225,100,25);
brick10.velocityX = 0;
brick11 = createSprite(610,225,100,25);
brick11.velocityX = 0;

carrot.shapeColor = "pink"
brick1.shapeColor = "maroon" 
brick2.shapeColor = "maroon"
brick3.shapeColor = "maroon"
brick4.shapeColor = "maroon"
brick5.shapeColor = "maroon"
brick6.shapeColor = "maroon"
brick7.shapeColor = "maroon"
brick8.shapeColor = "maroon"
brick9.shapeColor = "maroon"
brick10.shapeColor = "maroon"
brick11.shapeColor = "maroon"
bunny.shapeColor= "white"
}

function draw() {
background("green");

bunny.bounceOff(edges[0]);
bunny.bounceOff(edges[1]);
bunny.bounceOff(edges[2]);
bunny.bounceOff(edges[3]);

if(keyDown("up")){
  bunny.y=bunny.y-3;
}
if(keyDown("down")){
  bunny.y=bunny.y+3;
}
if(keyDown("left")){
  bunny.x=bunny.x-3;
}
if(keyDown("right")){
  bunny.x=bunny.x+3;
}
if(bunny.isTouching(carrot)){
  text("YOU WIN",200,200);
}
if(bunny.isTouching(brick1)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick3)){
  bunny.x=40;
  bunny.y=550; 
}
if(bunny.isTouching(brick4)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick5)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick6)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick7)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick8)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick9)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick10)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick11)){
  bunny.x=40;
  bunny.y=550;
}
  drawSprites();
}