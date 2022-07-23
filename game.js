let blueXCor;
let redXCor;

let ballX;
let ballY;

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

    ballX = 375
    ballY = 450

    xSpeed = random(1, 6);
    ySpeed = random(1, 6);

    p1Score = 0;
    p2Score = 0;

    rectMode(CENTER);
    textAlign(CENTER);
}

function draw(){
    background(0);
    
    //ball speed
    ballX += xSpeed * xDirection;
    ballY += ySpeed * yDirection;

    //top and bottom border
    fill (40, 70, 100);
    rect (375, 10, 750, 20);
    rect (375, 890, 750, 20);

    //the ball
    fill(50, 50, 50);
    ellipse(ballX, ballY, 50, 50);

    //player1red shield
    fill(255, 0, 0);
    rect(redXCor, 100, 150, 20);

    //player2blue shield
    fill(0, 0, 255);
    rect(blueXCor, 800, 150, 20);

    //woring on the shield function
    p1Right = redXCor + 75;
    p1Left = redXCor - 75;

    p2Right = blueXCor + 75;
    p2Left = blueXCor - 75;

    if(ballX < p1Right && ballX > p1Left && ballY - 10 <= 100){
        yDirection *= -1;
    }

    if(ballX < p2Right && ballX > p2Left && ballY + 10 >= 800){
        yDirection *= -1;
    } 

    //ball bounce control
    if (ballX > 750 || ballX < 0) {
        xDirection *= -1;
    }

    if (ballY > 880){
        yDirection *= -1;
        p1Score ++;
        ballY = 450
        
    }
    else if(ballY < 20){
        yDirection *= -1;
        p2Score ++;
        ballY = 450;
    }

    //p1red movement
    if (keyIsDown(RIGHT_ARROW)){
        redXCor += 60;
    }
    
    if (keyIsDown(LEFT_ARROW)){
        redXCor -= 60;
    }

    //p1red boundary
    if(redXCor > 700){
        redXCor -=60;
    }

    if(redXCor < 50 ){
        redXCor += 60;
    }
    //p2blue mouse control movement
    blueXCor = mouseX;

    //p2blue boundary
    if (blueXCor > 700){
        blueXCor -=60;
    }

    if (blueXCor < 50){
        blueXCor +=60
    }

    //scores and position 
    fill(255);
    textSize(18);
    text("Blue Score:" + p1Score, 75, 450)

    fill(255);
    textSize(18);
    text("Red Score:" + p2Score, 675, 450)


    //winner text
    if(p1Score > 1){
        background(255, 0, 0);
        fill(0);
        textSize(100)
        text("Red Win!!!",375, 450);
    }

    if(p2Score > 1){
        background(0, 0, 255);
        fill(0);
        textSize(100)
        text("Blue Win!!!",375, 450);
    }
}


