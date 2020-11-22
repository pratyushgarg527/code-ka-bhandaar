
var fixedRect,movingRect; 
var edges


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400,400,50,80);
  movingRect = createSprite(200,400,80,30);

  fixedRect.shapeColor ="blue";
  movingRect.shapeColor = "yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityX =-5;
  movingRect.velocityX = 5;
  
}
function draw() {
  background("black"); 

  edges = createEdgeSprites();

  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

   

  bounceoff(movingRect , fixedRect);  
  

  

  drawSprites();
}

