
var fixedRect,movingRect;
var gameobject1;
var gameobject2;
var gameobject3;
var gameobject4;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400,400,50,80);
  movingRect = createSprite(200,400,80,30);

  fixedRect.shapeColor ="blue";
  movingRect.shapeColor = "yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor ="blue";
  gameobject2 = createSprite(100,200,50,50);
  gameobject2.shapeColor ="blue";
  gameobject3= createSprite(100,300,50,50);
  gameobject3.shapeColor ="blue";
  gameobject4 = createSprite(100,400,50,50)
  gameobject4.shapeColor ="blue"

}
function draw() {
  background("black"); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  //console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect,gameobject1)){
    gameobject1.shapeColor ="red";
    movingRect.shapeColor = "red";

  }
  else if(isTouching(movingRect,gameobject2)){
    gameobject2.shapeColor ="yellow";
    movingRect.shapeColor = "green";

  }
  else{

    gameobject1.shapeColor ="blue";
    gameobject2.shapeColor = "blue" 
    movingRect.shapeColor = "yellow";
  }
  
  
  
  drawSprites();
}
