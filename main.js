nosex = 0
nosey = 0

function preload() {
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    var canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Model Successfully Loaded! 100% and 100/100")
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(img, nosex, nosey, 80, 40)
}

function take_snapshot() {
    save("eye-ball.png")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("nosex = " + results[0].pose.nose.x)
        console.log("nosey = " + results[0].pose.nose.y)
        nosex = results[0].pose.nose.x - 35;
        nosey = results[0].pose.nose.y - 7;
    }

}