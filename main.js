rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(660,143);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("MODEL LOADED (TRUE)");
}

function gotPoses(results){
    if(results.length>0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}

function draw(){
    background('#333');
    textSize(difference);
    fill('whitesmoke');
    text('Naruto Is One Of The Biggest Selling Manga Titles In The World',50,400);
}