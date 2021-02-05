//rakettens hastighed defineres på forhånd.
speed = 7;
var distance;
var h;
var g;
//highscore defineres.
highscore = 0;

//array til boldene laves.
var balls = [];

//preload af billeder, så de er klar til visning inden resten af koden udføres/executes.
function preload(){
rocket = loadImage("images/rocket.png");
bg = loadImage("images/bg.jpg")
}

//canvas laves og rakettens første position defineres. Funktionen der laver nye bolde får en "forsnikelse" på 0,1 sekund.
function setup(){
  x_rocket = displayWidth/2;
  y_rocket = displayHeight-300;
  var interval = setInterval(newBall, 100);
}

//funktionen der laver nye bolde og definerer str. udfra hvor mange bolde der findes i forvejen (jo flere bolde, jo større bolde begynder der at komme).
function newBall(){

if (balls.length < 40){
  ball_min = 20;
  ball_max = 40;
}

else if (balls.length >= 40 && balls.length < 60){
  ball_min = 30;
  ball_max = 50;
}

else if (balls.length >= 60 && balls.length < 100){
  ball_min = 30;
  ball_max = 70;
}

else if (balls.length >= 100 && balls.length < 150){
  ball_min = 40;
  ball_max = 80;
}

else if (balls.length >= 150 && balls.length < 250){
  ball_min = 50;
  ball_max = 90;
}

else if (balls.length >= 250 && balls.length <500){
  ball_min = 80;
  ball_max = 120;
}

else if (balls.length >= 500 && balls.length <550){
  ball_min = 100;
  ball_max = 150;
  balls.splice(0,50)
}

  balls.push(new Ball(random (10,displayWidth-10), -20, random(ball_min, ball_max)));
  highscore +=1;
}

function draw(){

//baggrund og raket bliver "tegnet".
clear();
createCanvas(displayWidth,displayHeight);
background(bg);
ellipse(x_rocket+15, y_rocket+30, 30, 60)
image(rocket, x_rocket , y_rocket);


// højre og venstre piltast og "A" og "D" bevæger raketten.
if (keyIsDown(65) && x_rocket>0 || keyIsDown(37) && x_rocket>0){
    x_rocket -= speed;
  }
if (keyIsDown(68) && x_rocket<(displayWidth-30) || keyIsDown(39) && x_rocket<(displayWidth-30)){
    x_rocket += speed;
  }

// alle boldene vises.
for (var i = 0; i < balls.length; i++) {
  balls[i].fall();
  balls[i].display();
}



}

// "Ball" defineres med farve og dennes placering/fald opdateres.
class Ball {
  constructor(x_position, y_position, diameter) {
    this.x = x_position;
    this.y = y_position;
    this.d = diameter;
    this.speed = 5;
		this.position = new p5.Vector(this.x, this.y);

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

/*
  if(false){
    noLoop();
  };
*/

// Husk "noLoop();" til at stoppe spillet

/* brugt til at fastsætte de forskellige keyCodes (ikke relavant)
function keyPressed(){
    if(keyCode === 65 || keyCode === 37){
    console.log("venstre");}
    else if(keyCode === 68 || keyCode === 39){
    console.log("højre");}
    }
*/