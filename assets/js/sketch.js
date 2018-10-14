var button;

function setup() {
  createCanvas(1280, 720);
  strokeWeight(2);
  background(237,34,93);

  //Create Rectangle
  button = createButton('Create Rectangle');
  button.position(19, 800);
  button.mousePressed(createRect);

  //Create Ellipse 
  button = createButton('Create Ellipse');
  button.position(200, 800);
  button.mousePressed(createEllipse);

  //Create Triangle 
  button = createButton('Create Triangle');
  button.position(381, 800);
  button.mousePressed(createTriangle);
  
  //Create Quad 
  button = createButton('Create Quad');
  button.position(562, 800);
  button.mousePressed(createQuad);

  //Create Arc 
  button = createButton('Create Arc');
  button.position(743, 800);
  button.mousePressed(createArc);

  //Create Line 
  button = createButton('Create Line');
  button.position(924, 800);
  button.mousePressed(createLine);
}

function createRect() {
  var c = color(random(0,255), random(0,255), random(0,255));
  var s = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  stroke(s);
  rect(random(0,1280), random(0,720), random(0,500), random(0,500));
}

function createEllipse() {
  var c = color(random(0,255), random(0,255), random(0,255));
  var s = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  stroke(s);
  ellipse(random(0,1280), random(0,720), random(0,500), random(0,500));
}

function createTriangle() {
  var c = color(random(0,255), random(0,255), random(0,255));
  var s = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  stroke(s);
  // triangle(random(0,1280), random(0,720), random(10,200), random(10,200), random(10,200), random(10,200));
  triangle(random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000));
}

function createQuad() {
  var c = color(random(0,255), random(0,255), random(0,255));
  var s = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  stroke(s);
  quad(random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000), random(0,1000));
}

function createArc() {
  var c = color(random(0,255), random(0,255), random(0,255));
  var s = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  stroke(s);
  arc(random(0,1280), random(0,720), random(0,500), random(0,500), random(0,500), random(0,500));
}

function createLine() {
  var s = color(random(0,255), random(0,255), random(0,255));
  noFill();
  strokeWeight(random(0,10));
  stroke(s);
  line(random(0,1280), random(0,720), random(0,500), random(0,500));
}

function keyPressed(){
  if( key === 's' || key === 'S' ){
   saveCanvas('image-' + frameCount + '.png');
  }
}