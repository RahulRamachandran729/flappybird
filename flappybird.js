let flappybird_running;
var PLAY=1;
var END=0;
var gameState=PLAY;
let flappybird;
let bg_img;
let bg;
let obstacle;
let obs_img;


function preload(){
    bg_img=loadImage("flappybirdbg2.png");
    flappybird_running=loadImage("flappybird.png");
    obs_img=loadImage("obstacle2.png");
    
}

function setup(){
    createCanvas(1000,700);
    bg = createSprite(500,200,50,50);
    bg.addImage(bg_img);
    flappybird =createSprite(400,300,100);
    flappybird.addImage(flappybird_running);
    flappybird.scale=0.01;
    
    
    

}
function draw(){
    background("yellow");
    spawnObstacles();

    
    drawSprites();
}

function spawnObstacles(){
    if (frameCount % 50==0){
        let obstacle=createSprite(500,300,20,20);
        obstacle.addImage(obs_img);
    }
}
