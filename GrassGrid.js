function setup() {
    createCanvas(750, 750);
}

function draw(){
    background("#5a6c2b");
    drawGrass();
}

function drawGrass(){
    // background("#5a6c2b");
    // fill("#8bae4f");
    // noStroke();
    // square(0,0,175,0);
    // square (175,175,175);
    // square(200,200,100);
    // square (300,300,100);
    // square(0,200,100);
    // square(100,300,100);
    // square(200,0,100);
    // square(300,100,100);

    let offset = width / 5;
  for (let i = 0; i < 5; i++) {
    let x = i * offset;
    for (let j = 0; j < 5; j++) {
      let y = offset / 2 + j * offset;
      let stagger = 0;
      if (j % 2 == 1) {
        stagger = offset / 2;
      }
      drawSquare(x + stagger, y, 150, 150);
    }
  }
}

function drawSquare(){
    push(); 
    fill("#8bae4f");
    noStroke();
    square
    pop();
}