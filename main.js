difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 450);
    canvas.position(560,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#CBC3E3');

    document.getElementById("square_side").innerHTML = "Font Size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFFF00');
    text('Keep Coding' , 50 , 400);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX + "difference = " + difference);
    }
}