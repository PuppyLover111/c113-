function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  background("midnightblue")
  image(video, 150, 125, 300, 250);
  fill("#ff9ebe")
  noStroke()
  circle(150,125,80)
  circle(450,125,80)
  circle(150,375,80)
  circle(450,375,80)

}

function take_snapshot(){    
  save('pictureophobia.png');
}

