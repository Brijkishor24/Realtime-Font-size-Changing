leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    canvas=createCanvas(600,490);
    canvas.position(650,200);
    video=createCapture(VIDEO);
    video.size(600,400);
    video.position(50,250);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',getPoses);
}
function modelloaded(){
    console.log("PoseNet Initialized!");
}
function getPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}
function draw(){
    background("lightgreen");
    
    text("Be Happy",40,450);
    textSize(difference);
}