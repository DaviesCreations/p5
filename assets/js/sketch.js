function setup() {
  createCanvas(640, 520);
}

function resetSketch() {
  createCanvas(640, 520);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}