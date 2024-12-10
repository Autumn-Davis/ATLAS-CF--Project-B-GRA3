let c = "#a34749";
let sk = "#e5d2a8";
let farmerx = 0;
let farmery = 0;
let flowers = [];
let currentPhase = 0;
let nextSwitch;
let gridSize = 100;

// Define the flower decay phases
let phases = [
  {
    limit: 60 * 3,
    render: flowerAlive,
  },
  {
    limit: 60 * 3,
    render: flowerWilt1,
  },
  {
    limit: 60 * 3,
    render: flowerWilt2,
  },
  {
    limit: 60 * 3,
    render: flowerWilt3,
  },
  {
    limit: -1,
    render: flowerWilt4,
  },
];

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 0; // 0: alive, 1+: wilting
    this.isRevived = false;
  }

  draw() {
    push();
    translate(this.x, this.y);
    phases[this.state].render();
    pop();
  }

  update(farmerX, farmerY) {
    if (this.x === farmerX && this.y === farmerY) {
      this.isRevived = true;
      this.state = 0; // Reset to alive state
    } else if (!this.isRevived && frameCount % 180 === 0) {
      this.state = min(this.state + 1, phases.length - 1); // Increment state
    }
  }
}

function setup() {
  createCanvas(800, 800);

  // Create flowers at random grid positions
  for (let i = 0; i < 20; i++) {
    let x = int(random(8)) * gridSize;
    let y = int(random(8)) * gridSize;
    flowers.push(new Flower(x, y));
  }

  nextSwitch = phases[currentPhase].limit;
}

function draw() {
  drawBackground();

  // Update and draw each flower
  flowers.forEach((flower) => {
    flower.update(farmerx * gridSize, farmery * gridSize);
    flower.draw();
  });

  // Draw the farmer
  drawFarmer();

  // Phase switching logic
  if (frameCount >= nextSwitch) {
    currentPhase = (currentPhase + 1) % phases.length;
    const nextPhase = phases[currentPhase];
    nextSwitch = frameCount + (nextPhase.limit > 0 ? nextPhase.limit : Infinity);
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW && farmery < height / gridSize - 1) {
    farmery++;
  } else if (keyCode === UP_ARROW && farmery > 0) {
    farmery--;
  } else if (keyCode === LEFT_ARROW && farmerx > 0) {
    farmerx--;
  } else if (keyCode === RIGHT_ARROW && farmerx < width / gridSize - 1) {
    farmerx++;
  }
}

function drawBackground() {
  let offset = width / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      push();
      fill("#8bae4f");
      strokeWeight(15);
      stroke("#5a6c2b")
      square(i * gridSize, j * gridSize, gridSize);
      pop();
    }
  }
}

function drawFarmer() {
  push();
  translate(farmerx * gridSize, farmery * gridSize);

  // Farmer's body
  fill(sk);
  rect(40, 40, 20, 30);
  // Farmer's overalls
  fill("#0c426d");
  rect(40, 50, 20, 20);
  rect(40, 40, 5, 10);
  rect(55, 40, 5, 10);
  rect(40, 70, 10, 5);
  rect(50, 70, 10, 5);
  //Farmer's feet
  fill("black");
  ellipse(44, 75, 10, 7);
  ellipse(56, 75, 10, 7);
  

  // Farmer's head
  fill(sk);
  ellipse(50, 30, 25, 25);
  
    //eyes
      push();
    //left
      stroke(95, 76, 45);
      fill(111, 96, 51);
      circle(48, 31, 3);
    //right
      circle(58.5, 30, 3);
      pop();
    //mouth
      push();
      stroke(136, 114, 63);
      arc(53.5, 35, 2, 3, 2*PI, PI)
      pop();
    //hair
      push();
      stroke(95, 76, 45);
      strokeWeight(4);
      arc(40, 30, 3, 8, PI, 2*PI)
      pop();

  // Farmer's hat
  fill("#e4d96f");
  triangle(40, 25, 60, 25, 50, 10);
  ellipse(50, 23, 35, 7);

  // Farmer's arms
  fill(sk);
  rect(33, 42, 7, 15);
  rect(60, 42, 7, 15);
  
  //Watering can
  

  pop();
}

// Flower rendering functions
function flowerAlive() {
  drawFlower("#a34749", "#dec58f");
}

function flowerWilt1() {
  drawFlower("#936838", "#dec58f");
}

function flowerWilt2() {
  drawFlower("#6b4b29", "#dec58f");
}

function flowerWilt3() {
  drawFlower("#533a1f", "#8c8c8c");
}

function flowerWilt4() {
  drawFlower("#2b1f10", "#4c4c4c");
}

function drawFlower(petalColor, centerColor) {
  push();
  fill(petalColor);
  for (let i = 0; i < 8; i++) {
    ellipse(0, -15, 20, 40);
    rotate(PI / 4);
  }
  fill(centerColor);
  ellipse(0, 0, 15, 15);
  pop();
}
