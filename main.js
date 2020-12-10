function setup(){
    canvas=createCanvas(600,400);
    canvas.position(50,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,400);
}