//rakettens position og hastighed defineres på forhånd
x_rocket = 235;
y_rocket = 520;
speed = 4;

//highscore defineres
highscore = 0;

//array til boldene
var balls = [];

//preload af billeder, så de er klar til visning inden resten af koden udføres/executes
function preload(){
rocket = loadImage("images/rocket.png");
cloud = loadImage("images/cloud.png");  
cloud1 = loadImage("images/cloud_rev.png");
cloud2 = loadImage("images/cloud_long.png");
}

//canvas laves og funktionen der laver nye bolde får en "forsnikelse" på mellem 0,35 og 0,7 sekund
function setup(){
  createCanvas(500,600);

  var interval = setInterval(newBall, random(250, 700));
}

//funktionen der laver nye bolde og definerer str. udfra hvor mange bolde der findes i forvejen (jo flere bolde, jo større bolde begynder der at komme)
function newBall(){

if (balls.length < 20){
  ball_min = 20;
  ball_max = 40;
}

else if (balls.length >= 20 && balls.length < 40){
  ball_min = 20;
  ball_max = 50;
}

else if (balls.length >= 40 && balls.length < 60){
  ball_min = 30;
  ball_max = 60;
}

else if (balls.length >= 60 && balls.length < 80){
  ball_min = 30;
  ball_max = 70;
}

else if (balls.length >= 60 && balls.length < 100){
  ball_min = 40;
  ball_max = 80;
}

else{
  ball_min = 50;
  ball_max = 100;
}

  balls.push(new Ball(random (10,490), 0, random(ball_min, ball_max)));
}

function draw(){

//baggrund og raket bliver "tegnet"
clear();
createCanvas(500,600);
background("lightblue");
image(cloud, 20,30);
image(cloud2, 45,40);
image(cloud1, 370,30);
image(rocket, x_rocket, y_rocket);

// højre og venstre piltast og "A" og "D" bevæger raketten
if (keyIsDown(65) && x_rocket>0 || keyIsDown(37) && x_rocket>0){
    x_rocket -= speed;
  }
if (keyIsDown(68) && x_rocket<470 || keyIsDown(39) && x_rocket<470){
    x_rocket += speed;
  }

// alle boldene vises
for (var i = 0; i < balls.length; i++) {
  balls[i].fall();
  balls[i].display();
}

}

/* brugt til at fastsætte de forskellige keyCodes (ikke relavant)
function keyPressed(){
    if(keyCode === 65 || keyCode === 37){
    console.log("venstre");}
    else if(keyCode === 68 || keyCode === 39){
    console.log("højre");}
    }
*/

// "Ball" defineres med farve og dennes placering/fald opdateres
class Ball {
  constructor(x_position, y_position, diameter) {
    this.x = x_position;
    this.y = y_position;
    this.d = diameter;
    this.speed = 5;

    this.display = function () {
      fill(226,88,34);
      stroke(0,0,0);
      ellipse(this.x, this.y, this.d, this.d);
    };

    this.fall = function () {
      this.y = this.y + this.speed;
    };
  }
}


// Husk "noLoop();" til at stoppe spillet