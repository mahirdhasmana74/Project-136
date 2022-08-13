Status = "";
input_text = "";
function popUp() {
    alert("AI OBJECT FINDER")
} 
function setup() {
    canvas = createCanvas(480, 380);
    canvas.position(495, 220);
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}
function start() {
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_box").value;
}
function modelLoaded() {
     console.log("Model Loaded!");
     Status = true;   
}
function draw() {
    image(video, 0, 0, 480, 380);
}