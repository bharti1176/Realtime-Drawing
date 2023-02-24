noseX=0;
noseY=0;
difference= 0;
rightWristX = 0;
leftWristX= 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,450);
    canvas.position(620,100);
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#808080');
    document.getElementById("Square_side").innerHTML = "SIde of the square will be = " + difference + "px" 
    fill('#FFC0CB');
    stroke("#FFC0CB");
    square(noseX,noseY,difference);
}
function ModelLoaded() {
    console.log('poseNet is initalized!');
}
function gotPoses(results)
{
    if (results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX= " + noseX +" noseY = " + noseY);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
    }
}