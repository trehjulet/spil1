x_rocket = 235;
y_rocket = 535;
speed = 4;

function preload(){
rocket = loadImage("images/rocket.png");
cloud = loadImage("images/cloud.png");
cloud1 = loadImage("images/cloud_rev.png");
cloud2 = loadImage("images/cloud_long.png");
}

function setup(){

}

function draw(){
clear();
createCanvas(500,600);
background("lightblue");
image(cloud, 20,30);
image(cloud2, 45,40);
image(cloud1, 370,30);
image(rocket, x_rocket, y_rocket);
if (keyIsDown(38) && y_rocket>0 || keyIsDown(87) && y_rocket>0){
    y_rocket -= speed;
  }
if (keyIsDown(40) && y_rocket<540 || keyIsDown(83) && y_rocket<540){
    y_rocket += speed;
  }
}

function keyPressed(){
    if(keyCode === 38 || keyCode === 87)
    console.log("op");
    else if(keyCode === 40 || keyCode === 83)
    console.log("ned");
}

h = document.getElementById("knap_h");
m = document.getElementById("knap_m");
l = document.getElementById("knap_l");

function h(){
  speed = 6;
  h.style.backgroundColor = "grey";
  m.style.backgroundColor = "white";
  l.style.backgroundColor = "white";
}
function m(){
  speed = 4;
}
function l(){
  speed = 2;
}