var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
  music = loadSound("music.mp3");
}

function setup() {
  canvas = createCanvas(900, 700);

  block1 = createSprite(120, 580, 200, 30);
  block1.shapeColor = "blue";

  block2 = createSprite(340, 580, 200, 30);
  block2.shapeColor = "orange";

  block3 = createSprite(560, 580, 200, 30);
  block3.shapeColor = "red";

  block4 = createSprite(780, 580, 200, 30);
  block4.shapeColor = "green";

  ball = createSprite(800, 100, 40, 40);
  ball.shapeColor = rgb(255, 255, 255);
  ball.velocityX = 4;
  ball.velocityY = 3;
}

function draw() {
  background(rgb(169, 169, 169));
  edges = createEdgeSprites();
  ball.bounceOff(edges);

  //write code to bounce off ball from the block1
  if (ball.isTouching(block1) && ball.bounceOff(block1)) {
    ball.shapeColor = "blue";
    music.play();
  }

  if (ball.isTouching(block2) && ball.bounceOff(block2)) {
    ball.shapeColor = "orange";
    music.play();
    
  }

  if(ball.isTouching(block3)) {
    ball.shapeColor = "red";
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  if(ball.isTouching(block4) && ball.bounceOff(block4)) {
    ball.shapeColor = "green";
    music.play();
}

  

  drawSprites();
}
