let blueXCor;
let redXCor;

let xPos;
let yPos;

let xSpeed;
let ySpeed;

let xDirection = 3; 
let yDirection = 3;

let p1Left, p1Right;
let p2Left, p2Right;

let p1Score;
let p2Score;

function setup(){

    createCanvas(750, 900);
    background(0);
    blueXCor = 375;
    redXCor = 375;

    xPos = 375
    yPos = 450

    xSpeed = random(1, 6);
    ySpeed = random(1, 6);

    p1Score = 0;
    p2Score = 0;

    rectMode(CENTER);
}

function draw(){
    background(0);
    
    //top and bottom border
    fill (40, 70, 100);
    rect (375, 10, 750, 20);
    rect (375, 890, 750, 20);

    //the ball
    fill(50, 50, 50);
    ellipse(xPos, yPos, 50, 50);

    //player1 shield
    fill(255, 0, 0);
    rect(redXCor, 100, 150, 20);

    //player2 shield
    fill(0, 0, 255);
    rect(blueXCor, 800, 150, 20);

    xPos += xSpeed * xDirection;
    yPos += ySpeed * yDirection;

    //ball bounce control
    if (xPos > 750 || xPos < 0) {
            xDirection *= -1;
    }

    if (yPos > 900 || yPos < 0){
            yDirection *= -1;
    }

    //p1 movement
    if (keyIsDown(RIGHT_ARROW)){
        redXCor += 60;
    }
    
    if (keyIsDown(LEFT_ARROW)){
        redXCor -= 60;
    }

    //p1 boundary
    if(redXCor > 700){
        redXCor -=60;
    }

    if(redXCor < 50 ){
        redXCor += 60;
    }

    blueXCor = mouseX;

    //p2 boundary
    if (blueXCor > 700){
        blueXCor -=60;
    }

    if (blueXCor < 50){
        blueXCor +=60
    }

    fill(255);
    textSize(18);
    text("Blue Score:" + p1Score, 25, 450)

    fill(255);
    textSize(18);
    text("Red Score:" + p2Score, 625, 450)

    p1Right = redXCor += 75;
    p1Left = redXCor -= 75;

    p2Right = blueXCor += 75;
    p2Left = blueXCor -= 75;

    if(p1Right < xPos || p1Right > xPos){

    }

    else{
        xDirection *= -1;
        yDirection *= -1;
    }
}


// // Anna Wasson
// // Lab 4: Pong
// // 2-10-19
// // Random Ball Placement
// var xBall = Math.floor(Math.random() * 300) + 50;
// var yBall = 50;
// var xSpeed = (2, 7);
// var ySpeed = (-7, -2);
// var score = 0
// // Canvas
// function setup() {
//   createCanvas(400, 400);
// }
// //Background
// function draw() {
//   // Background
//   background(0);
//   // Paddle
//   fill('#FFFFFF');
//   rect(mouseX, 375, 90, 15);
//   //Functions
//   move();
//   display();
//   bounce();
//   //resetBall();
//   paddle();
//   //Score
//   fill('#D9C3F7');
//   textSize(24);
//   text("Score: " + score, 10, 25);
// }
// // Ball Functions
// function move() {
//   xBall += xSpeed;
//   yBall += ySpeed;
// }
// function bounce() {
//   if (xBall < 10 ||
//     xBall > 400 - 10) {
//     xSpeed *= -1;
//   }
//   if (yBall < 10 ||
//     yBall > 400 - 10) {
//     ySpeed *= -1;
//   }
// }
// // Reset Ball
// //function resetBall() {
// //  if (yBall >= 400 ||
// //    yBall > 400 - 10) {
// //    ySpeed = 4;
// // }
// //}
// function display() {
//   fill('#D9C3F7');
//   ellipse(xBall, yBall, 20, 20);
// }
// // Bounce off Paddle
// function paddle() {
//   if ((xBall > mouseX &&
//       xBall < mouseX + 90) &&
//     (yBall + 10 >= 375)) {
//     xSpeed *= -1;
//     ySpeed *= -1;
//     score++;
//   }









