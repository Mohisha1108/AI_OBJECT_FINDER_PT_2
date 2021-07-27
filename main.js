var status = '';
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object is detecting";
    input_value = document.getElementById("object").value;
}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
}
function draw(){
    image(video,0,0,400,400);
}