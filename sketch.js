var plane
var planeimg
var aliens
var alienimg
var bullet
var bulletimg

var score=0

var title
var titleimg
var gameover
var gameoverimg


function preload() {
  gameoverimg=loadImage("Game Over.png")
  bulletimg=loadImage("bullet.png")
  planeimg=loadImage("Plane.png")
  alienimg=loadImage("Alien.png");
}

function setup() {
  createCanvas(800,400);
 
 gameover=createSprite(400, 350, 50, 50);
 gameover.addImage(gameoverimg)
 gameover.scale=0.4
 gameover.visible=false

 plane=createSprite(400, 350, 50, 50);
 plane.addImage(planeimg)
 plane.scale=0.4
 plane.visible=true


 bullet=createSprite(plane.x+10,plane.y-50,50,50)
 bullet.addImage(bulletimg)
 bullet.scale=2.5

 //alien=createSprite(400,40,50,50)
 //alien.addImage(alienimg)
 //alien.scale=0.4
 

}

function draw() {
background(0,0,0);
move()
aliens()
drawSprites();
}

function move() {
  if (keyIsDown(LEFT_ARROW)) {
    plane.x-=5
  }
     
  if (keyIsDown(RIGHT_ARROW)) {
    plane.x+=5
  }
  
  if (keyCode===32) {
    bullet.visible=true
    bullet.x=plane.x
    bullet.y=plane.y-50
    keyCode=0
  }
}

bullet.y-=0.5

function aliens() {

  var BRICK_W = 50;
var BRICK_H = 10;
var BRICK_MARGIN = 20;

  for(var c = 0; c<10; c++) {
    var alien = createSprite(50+c*(BRICK_W+BRICK_MARGIN), 20+(BRICK_H+BRICK_MARGIN), BRICK_W, BRICK_H);
    alien.addImage(alienimg)
    alien.scale=0.4

    if (bullet.isTouching(alien)) {
      bullet.visible=false
      score+=1
    }else{
      bullet.y-=0.5
    }

    //brick.setAnimation("candy");
    //alien.add(alien);
  }
}