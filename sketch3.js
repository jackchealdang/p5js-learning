let points = [];
let noiseVal = [];
let noiseScale = 0.003;
let mult = 0.005;
var t;

function setup() {
  createCanvas(400, 400);
  t = 0;

  density = 100;
  space = width / density;
  for (x = 0; x < width; x += space) {
    for (y = 0; y < height; y += space) {
      noiseVal = noise(x * noiseScale, y * noiseScale) * 20;
      let p = createVector(x + noiseVal, y + noiseVal);
      points.push(p);
    }
  }
  console.log(noiseVal);
}

function draw() {
  fill(10);

  for (i = 0; i < points.length; i++) {
    ellipse(points[i].x, points[i].y, 1);
  }
}
