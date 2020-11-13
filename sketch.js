var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime = 0;
var banana;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  banana = createSprite(190, 120, 20, 20);
  banana.addAnimation("banana.png", bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -7

  obstacle = createSprite(300, 300, 20, 20);
  obstacle.addAnimation("obstacle.png", obstacleImage);
  obstacle.scale = 0.25;
  obstacle.velocityX = -7;

  var bananagroup = createGroup();
  var obstaclegroup = createGroup();



}

function draw() {
  background(255);


  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  drawSprites();

  stroke("white");
  text(20);
  fill("white");
  text("Score:" + score, 500, 500);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time:" + survivalTime, 100, 50);
  if (frameCount % 110 === 0) {
    banana.x = Math.round(random(300, 290));
    banana.velocityX = -5;
  }

  if (frameCount % 110 === 0) {
    obstacle.x = Math.round(random(300, 290));
    obstacle.velocityX = -5;
  }


}