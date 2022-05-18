// Initial angles of rotation
let thetaX = 0;
let thetaY = 0;
let thetaZ = 0;

// Rotation speed
let rotationSpeed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth(8);
}

// Cube size
let t =
  window.innerHeight > window.innerWidth
    ? window.innerWidth / 9.5
    : window.innerHeight / 9.5; // originally 10

function draw() {
  translate(-width / 2, -height / 2);
  background(0);
  rectMode(CENTER);
  noStroke();

  // Save the transformation state
  push();
  translate(width / 2, height / 2, 0);
  rotateX(thetaX);
  rotateY(thetaY);
  rotateZ(thetaZ);

  // Draw the sides of the cube and apply color
  beginShape(TRIANGLE_FAN);

  // front side
  fill(color(0xff, 0x14, 0xeb));
  vertex(-t, -t, 0);
  vertex(t, -t, 0);
  vertex(t, t, 0);
  vertex(-t, t, 0);

  // right side
  fill(color(0x14, 0xf7, 0xff));
  vertex(t, -t, 0);
  vertex(t, -t, -2 * t);
  vertex(t, t, -2 * t);
  vertex(t, t, 0);

  // back side
  fill(color(0xff, 0x14, 0xeb));
  vertex(t, -t, -2 * t);
  vertex(t, t, -2 * t);
  vertex(-t, t, -2 * t);
  vertex(-t, -t, -2 * t);

  // left side
  fill(color(0x14, 0xf7, 0xff));
  vertex(-t, -t, -2 * t);
  vertex(-t, t, -2 * t);
  vertex(-t, t, 0);
  vertex(-t, -t, 0);

  // bottom side
  fill(color(0x14, 0xff, 0x3b));
  vertex(-t, t, 0);
  vertex(t, t, 0);
  vertex(t, t, -2 * t);
  vertex(-t, t, -2 * t);

  // top side
  fill(color(0xf3, 0xff, 0x14));
  vertex(-t, -t, 0);
  vertex(t, -t, 0);
  vertex(t, -t, -2 * t);
  vertex(-t, -t, -2 * t);
  endShape();

  // Resore the transformation state
  pop();

  thetaX = map(mouseX, 0, width, 0, TWO_PI);
  thetaY = map(mouseY, 0, height, 0, TWO_PI);
  thetaZ = map((mouseX + mouseY) / 2, 0, (width + height) / 2, 0, TWO_PI);
}
