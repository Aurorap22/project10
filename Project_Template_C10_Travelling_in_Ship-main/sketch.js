var seaImg;
var shipImg1;

function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea.addImage(seaImg);
}

function setup() {
  createCanvas(400,400);
  
  shipImg1 = createSprite(50,180,20,50);
  shipImg1.addAnimation("ship",ship-1.png);
  shipImg1.scale=0.5;

seaImg = createSprite(200,180,400,20);
seaImg.addImage("sea", sea.png);
seaImg.x = seaImg.width /2;

}

function draw() {
  background("blue");

  seaImg.velocityX=-2

if (seaImg.x<0)
seaImg.x = seaImg.width /2;

drawSprites;  
}