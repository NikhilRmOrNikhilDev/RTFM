leftWX = 0;
rightWX = 0;
font_size = 0;
function preload(){

}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(800, 220);

    video = createCapture(VIDEO);
    video.size(500, 550);
    video.position(120, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    textSize(font_size);
    fill("#009dff");
    text("NIKHIl", 50, 400)
}
function gotPoses(results){
    if(results > 0){
        console.log(results);

        leftWX = results[0].pose.leftWrist.x;
        rightWX = results[0].pose.rightWrist.x;
        font_size = floor(leftWX - rightWX);

    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}