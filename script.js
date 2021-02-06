//rakettens hastighed defineres på forhånd.
speed = 7;
var distance;
var h;
var g;

//hvis der ikke findes en gemt highscore endnu, bliver den lavet nu
if(! localStorage.getItem(a)){
  var a;
  localStorage.setItem(a, 0)
}

//highscore og score defineres.
highscore = localStorage.getItem(a);
score = 0;

//array til boldene laves.
var balls = [];


//preload af billeder, så de er klar til visning inden resten af koden udføres/executes.
function preload(){
  rocket = loadImage("images/rocket.png");
  bg = loadImage("images/bg.jpg")
  hit_sound = loadSound('sounds/hit.mp3');
}

//canvas laves og rakettens første position defineres. Funktionen der laver nye bolde får en "forsnikelse" på 0,1 sekund.
function setup(){
  x_rocket = displayWidth/2-15;
  y_rocket = displayHeight-250;
  var interval = setInterval(newBall, 100);
}

//funktionen der laver nye bolde og definerer str. udfra hvor mange bolde der findes i forvejen (jo flere bolde, jo større bolde begynder der at komme).
function newBall(){

if (balls.length < 20){
  ball_min = 20;
  ball_max = 40;
}

else if (balls.length >= 20 && balls.length < 40){
  ball_min = 30;
  ball_max = 50;
}

else if (balls.length >= 40 && balls.length < 80){
  ball_min = 30;
  ball_max = 70;
}

else if (balls.length >= 80 && balls.length < 110){
  ball_min = 40;
  ball_max = 80;
}

else if (balls.length >= 110 && balls.length < 150){
  ball_min = 50;
  ball_max = 90;
}

else if (balls.length >= 150 && balls.length <170){
  ball_min = 80;
  ball_max = 120;
}

else if (balls.length >= 170 && balls.length <200){
  ball_min = 100;
  ball_max = 150;
  balls.splice(0,20)
}

  balls.push(new Ball(random (10,displayWidth-10), -20, random(ball_min, ball_max)));
  score +=1;
}

function draw(){

  //baggrund og raket bliver "tegnet".
  clear();
  createCanvas(displayWidth,displayHeight);
  background(bg);
  image(rocket, x_rocket , y_rocket);
  ellipse(x_rocket+30,y_rocket+35,3,3)
  text("Nuværende score: " + score,5,15);
  text("Din highscore: " + localStorage.getItem(a),5,30);


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

  //der tjekkes om distancen fra rakettens top, eller en af siderne til en bolds midtpunkt er mindre end boldens diameter, med andre ord bliver der tjekket for en coliision af de to objekter
  for (i in balls){
    if (dist(x_rocket+15, y_rocket, balls[i].x, balls[i].y) < balls[i].d/2 || dist(x_rocket, y_rocket+35, balls[i].x, balls[i].y) < balls[i].d/2 || dist(x_rocket+30, y_rocket+35, balls[i].x, balls[i].y) < balls[i].d/2){
      gameOver();
    }
  }

  //highscore opdateres hvis score er større
  if (score> localStorage.getItem(a)){
    localStorage.setItem(a,score)
  };

}

// "Ball" defineres med farve og dennes placering/fald opdateres.
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

function gameOver(){
  noLoop();
  hit_sound.play(0,1,1,0.5);
  window.alert("Din raket blev ramt af en meteor:(" + "\r\n" + "\r\n" + "Du scorede " + score + " point" + "\r\n" + "Din highscore er " + localStorage.getItem(a) + "\r\n" + "\r\n" + 'Tryk enter for at prøve igen');
  location.reload();
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