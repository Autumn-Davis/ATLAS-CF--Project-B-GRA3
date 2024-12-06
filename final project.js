//make each flower a class, so that if they make contact with a farmer they stop decaying, then make a flower count to set up the win condition
//Set up a game manager/scene manager through a class




let c = ("#a34749")
let sk = ("#dec58f")
let farmerx = 0
let farmery = 0

function setup() {
  createCanvas(800, 800);
}


function keyPressed () {
  if (keyCode === DOWN_ARROW && farmery < 6){
    farmery +=1;
}

  if (keyCode === UP_ARROW && farmery > -1){
    farmery -=1;
}

if (keyCode === LEFT_ARROW && farmerx > 0){
    farmerx -=1;
}

  if (keyCode === RIGHT_ARROW && farmerx < 7){
    farmerx += 1;
}
  
}


function draw() {
    background(220);
    drawBackground();
    drawFarmer();  
}


function drawBackground(){
    let offset = width / 4;
    for (let i = 0; i < 8; i++) {
      let x = i * offset;
      for (let j = 0; j < 8; j++) {
        let y = j * offset / 2;
        let stagger = 0;
        if (j % 2 == 1) {
          stagger = offset / 2;
        }
        drawSquare(x,y,stagger);
      }
    }
  }  
  
  
function drawSquare(x,y,stagger){
    noStroke();
    fill("#8bae4f");
    square(x + stagger, y, 100, 10);
  }


farmer.drawFarmer
    function drawFarmer() {
        push();
            translate( farmerx * 100, farmery * 100)
  
        strokeWeight(1);
        fill(sk);
            //farmer hat
            let hat = circle(50,150,25);
  fill("#e4d96f");
  
  //body
  circle (50,130,15);
  ellipse (50,140,30,15);
  fill(sk);
  rect(40,160,20,30);

  //eyes
  push();
  //left
  stroke(95, 76, 45);
  fill(111, 96, 51);
  circle(48, 150.5, 3);
  //right
  circle(58.5, 149.5, 3);
  pop();
  
  //mouth
  push();
  stroke(136, 114, 63);
  arc(53.5, 152, 2, 3, 2*PI, PI)
  pop();
  
  //arms 
  rect(35,160,10,15);
  rect(55,160,10,15);
  
  //feet
  fill("black");
  ellipse(45,190,5,10);
  ellipse(55,190,5,10);
  
  //overalls 
  stroke(2);
  fill("#0c426d");
  rect(40,160,5,10);
  rect(55,160,5,10);
  rect(40,170,20,20);
  
  pop();
}

  

// function drawBackground(){
//   background("#5a6c2b");
//   fill("#8bae4f");
//   noStroke();

//   square(0,0,100,0);
//   square(100,100,100);
//   square(200,200,100);
//   square(300,300,100);
//   square(0,200,100);
//   square(100,300,100);
//   square(200,0,100);
//   square(300,100,100);

//   square(0+400,0,100,0);
//   square(100+400,100,100);
//   square(200+400,200,100);
//   square(300+400,300,100);
//   square(0+400,200,100);
//   square(100+400,300,100);
//   square(200+400,0,100);
//   square(300+400,100,100);

//   square(0,0+400,100,0);
//   square(100,100+400,100);
//   square(200,200+400,100);
//   square(300,300+400,100);
//   square(0,200+400,100);
//   square(100,300+400,100);
//   square(200,0+400,100);
//   square(300,100+400,100);
  
//   square(0+400,0+400,100,0);
//   square(100+400,100+400,100);
//   square(200+400,200+400,100);
//   square(300+400,300+400,100);
//   square(0+400,200+400,100);
//   square(100+400,300+400,100);
//   square(200+400,0+400,100);
//   square(300+400,100+400,100);
//   }