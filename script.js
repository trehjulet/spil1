x_rocket = 235;
y_rocket = 535;
speed = 4;

function preload(){
rocket = loadImage("images/rocket.png");
}

function setup(){

}

function draw(){
clear();
createCanvas(500,600);
background("lightblue");
image(rocket, x_rocket, y_rocket);
if (keyIsDown(38) && y_rocket>0 || keyIsDown(87) && y_rocket>0){
    y_rocket-=speed;
  }
if (keyIsDown(40) && y_rocket<540 || keyIsDown(83) && y_rocket<540){
    y_rocket+=speed;
  }
}

function keyPressed(){
    if(keyCode === 38 || keyCode === 87)
    console.log("op");
    else if(keyCode === 40 || keyCode === 83)
    console.log("ned");
}
