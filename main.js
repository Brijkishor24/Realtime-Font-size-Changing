noseX=0;
noseY=0;
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function draw(){
    background("lightgreen");
}