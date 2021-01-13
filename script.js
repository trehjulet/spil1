x_rocket = 235;
y_rocket = 520;
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
if (keyIsDown(65) && x_rocket>0 || keyIsDown(37) && x_rocket>0){
    x_rocket -= speed;
  }
if (keyIsDown(68) && x_rocket<470 || keyIsDown(39) && x_rocket<470){
    x_rocket += speed;
  }

}

function keyPressed(){
    if(keyCode === 65 || keyCode === 37){
    console.log("venstre");}
    else if(keyCode === 68 || keyCode === 39){
    console.log("højre");}

    if(keyCode === 72){
      if (speed === 2){
        m()
      }
      else if (speed === 4){
        h()
      }
      else if (speed === 6){
        l()
      }
    
    }
}

ha = document.getElementById("knap_h");
ma = document.getElementById("knap_m");
la = document.getElementById("knap_l");

function l(){
  speed = 2;
  ha.style.backgroundColor = "white";
  ma.style.backgroundColor = "white";
  la.style.backgroundColor = "grey";
  console.log("langsom");
}

function m(){
  speed = 4;
  ha.style.backgroundColor = "white";
  ma.style.backgroundColor = "grey";
  la.style.backgroundColor = "white";
  console.log("medium");
}

function h(){
  speed = 6;
  ha.style.backgroundColor = "grey";
  ma.style.backgroundColor = "white";
  la.style.backgroundColor = "white";
  console.log("hurtig");
}



