//make each flower a class, so that if they make contact with a farmer they stop decaying, then make a flower count to set up the win condition
//Set up a game manager/scene manager through a class




let c = ("#a34749")
let sk = ("#dec58f")
let farmerx = 0
let farmery = 0


function setup() {
  createCanvas(800, 800);
  fill(139, 174, 79);
  //creating flower class
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
  push()
    drawBackground();
  const now = phases[currentPhase];
  now.render();
  
  if (frameCount >= nextSwitch) {
    currentPhase = (currentPhase + 1) % phases.length;
    const nextPhase = phases[currentPhase];
    if (nextPhase.limit < 0) {
      nextSwitch = Infinity
    }
   else {nextSwitch = frameCount + nextPhase.limit}
  }

  drawFarmer()
  pop()
      
  
}
   

function drawBackground(){
  push()
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
  pop()
  }  
  
  
function drawSquare(x,y,stagger){
    noStroke();
    fill("#8bae4f");
    square(x + stagger, y, 100, 10);
  }
  
  
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
    
  function drawRect(){
  push()
        translate(55,140)
  scale(.1)
  noStroke()
  fill(67,149,160)
  rect(269,235,30,100)
  pop()
}

  
  
  
//I think that the keycode for spacebar is 32?
  
if (keyCode === 32 && dist(farmerx, farmery, 200, 200) < 50){
  drawRotatedRect();
}
  else {
  drawWateringCan();
} 
  
  
  
  
function drawWateringCan() {
//watering can body
  push()
  translate(55,140)
  scale(.1)
  stroke(0,0,0);
  strokeWeight(0.5)
  fill(67,149,160);
  rect(100, 200 , 200, 175);

//top of the watering can
  stroke(0,0,0);
  strokeWeight(0.5)
  fill(67,149,160);
  ellipse(200, 200 , 200, 75);

//handle
  noFill();
  stroke(67,149,160);
  strokeWeight(13);
  arc(125, 275, 175, 175, PI / 2, 3 * PI / 2);
  

//circle thing at the top of the can
  fill(49, 104, 112)
  ellipse(175,200,100,50)
  pop()
}

function drawRotatedRect() {
  push();
  translate(55,140)
  scale(.1)
  stroke(0,0,0);
  strokeWeight(0.5)
  fill(67,149,160);
  translate(350, 200);
  rotate(PI/4);
  rect(-10,-50,35,150)
 
  
//Spout thing
  
  scale(.1)
  stroke(0,0,0)
  strokeWeight(0.5)
  fill(63, 132, 143)
  rotate(PI/3)
  ellipse(343,-250 , 35,60)
  noFill()
  fill("orange")
  ellipse(345,-232  , 10,25)
  fill(0,0,0)
  ellipse(343.5,-237,2,2)
  
  
  pop()
}
  
  
  drawWateringCan();
  drawRotatedRect();
  drawRect();
}

function flower() {
  push()
    translate(200,200); 
 scale(.3)

//LAYER ONE (BOTTOM LAYER)
  stroke(186, 106, 107);
  fill(163,71,73);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 100, 250);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(145, 59, 61);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 240);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(145, 59, 61);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 200);
    rotate(TWO_PI / 9);
  }
 //LAYER TWO (MEDIUM COLOR) 
  stroke(214, 145, 145);
  rotate(PI / 4);
  fill(180,96,97)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 75,230);
    rotate(PI / 3);
  }
  noStroke();
  fill(214, 145, 145)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 220);
    rotate(PI / 3);
  }
   noStroke();
  fill(214, 145, 145);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 150);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(206,125,126);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 70, 130);
    rotate(PI / 1.5);
  } 
  noStroke();
  fill(237, 177, 177);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 120);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(237, 177, 177);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 105);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(163,71,73);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 25, 45);
    rotate(PI / 6);
  }
    noStroke();
  fill(1255,255,255);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 35);
  rotate(PI / 8);
  }
  pop()
}


// WILTING STAGE 1

function flowerWilt1() {
  push()
  scale(.3)
    translate(200,200)

  //LAYER ONE (BOTTOM LAYER)
  // stroke(186, 106, 107);
  noStroke();
  fill(145, 94, 48);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 100, 250);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(120, 77, 39);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 240);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(120, 77, 39);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 200);
    rotate(TWO_PI / 9);
  }
 //LAYER TWO (MEDIUM COLOR) 
  stroke(133, 90, 45);
  rotate(PI / 4);
  fill(161, 109, 54)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 75,230);
    rotate(PI / 3);
  }
  noStroke();
  fill(133, 90, 45)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 220);
    rotate(PI / 3);
  }
   noStroke();
  fill(133, 90, 45);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 150);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(163, 115, 81);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 70, 130);
    rotate(PI / 1.5);
  } 
  noStroke();
  fill(112, 81, 57);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 120);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(112, 81, 57);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 105);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(160, 110, 55);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 25, 45);
    rotate(PI / 6);
  }
    noStroke();
  fill(133, 90, 45);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 35);
  rotate(PI / 8);
  }
  pop()
}


//WILTING STAGE 2

function flowerWilt2() {
  push()
  scale(.3)
    translate(200,200)

  //LAYER ONE (BOTTOM LAYER)
  // stroke(186, 106, 107);
  noStroke();
  fill(107, 63, 22);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 50, 175);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(82, 50, 18);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 175);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(82, 50, 18);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 115);
    rotate(TWO_PI / 9);
  }
 //LAYER TWO (MEDIUM COLOR) 
  stroke(119, 75, 31);
  rotate(PI / 4);
  fill(120, 74, 30)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 35,155);
    rotate(PI / 3);
  }
  noStroke();
  fill(97, 60, 24)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 155);
    rotate(PI / 3);
  }
   noStroke();
  fill(97, 60, 24);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 100);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(128, 83, 42);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 30, 100);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(105, 69, 36);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 100);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(105, 69, 36);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 85);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(120, 74, 30);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 5, 35);
    rotate(PI / 6);
  }
    noStroke();
  fill(96, 61, 25);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 35);
  rotate(PI / 8);
  }
  pop()
}


//WILTING STAGE 3

function flowerWilt3() {
  push()
  scale(.3)
    translate(200,200)

  //LAYER ONE (BOTTOM LAYER)
  // stroke(186, 106, 107);
  noStroke();
  fill(51, 31, 11);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 35, 145);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(23, 14, 5);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 145);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(23, 14, 5);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 75);
    rotate(TWO_PI / 9);
  }
 //LAYER TWO (MEDIUM COLOR) 
  stroke(48, 31, 14);
  rotate(PI / 4);
  fill(66, 42, 17)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 20,130);
    rotate(PI / 3);
  }
  noStroke();
  fill(48, 31, 14)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 130);
    rotate(PI / 3);
  }
   noStroke();
  fill(48, 31, 14);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 75);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(77, 53, 31);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 15, 75);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(61, 43, 26);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 75);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(61, 43, 26);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 55);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(66, 42, 18);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 3, 25);
    rotate(PI / 6);
  }
    noStroke();
  fill(48, 31, 15);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 15);
  rotate(PI / 8);
  }
  pop()
}


//WILTING STAGE 4

function flowerWilt4() {
  push()
  scale(.3)
    translate(200,200)

  //LAYER ONE (BOTTOM LAYER)
  // stroke(186, 106, 107);
  noStroke();
  fill(23, 14, 5);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 40, 75);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(0, 0, 0);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 75);
    rotate(TWO_PI / 3);
  } 
 //LAYER TWO (MEDIUM COLOR) 
  stroke(0, 0, 0);
  rotate(PI / 4);
  fill(33, 21, 10)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 5,20);
    rotate(PI / 3);
  }
  noStroke();
  fill(0, 0, 0)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 45);
    rotate(PI / 3);
  }
   noStroke();
  fill(0, 0, 0);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 10);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(48, 35, 22);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 15, 45);
    rotate(PI / 1.5);
  } 
  noStroke();
  fill(28, 15, 2);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 35);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(28, 15, 2);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 15);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(33, 21, 10);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 3, 10);
    rotate(PI / 6);
  }
  pop()
}

function flowerAlive() {
  push()
  scale(.3)
    translate(200,200)
  

//LAYER ONE (BOTTOM LAYER)
  stroke(186, 106, 107);
  fill(163,71,73);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 100, 250);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(145, 59, 61);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 240);
    rotate(TWO_PI / 3);
  }
   noStroke();
  fill(145, 59, 61);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 200);
    rotate(TWO_PI / 9);
  }
 //LAYER TWO (MEDIUM COLOR) 
  stroke(214, 145, 145);
  rotate(PI / 4);
  fill(180,96,97)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 75,230);
    rotate(PI / 3);
  }
  noStroke();
  fill(214, 145, 145)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 220);
    rotate(PI / 3);
  }
   noStroke();
  fill(214, 145, 145);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 150);
    rotate(TWO_PI / 9);
  }
//LAYER THREE (LIGHT COLOR)   
  rotate(PI / 3);  
  fill(206,125,126);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 70, 130);
    rotate(PI / 1.5);
  } 
  noStroke();
  fill(237, 177, 177);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 2, 120);
    rotate(PI / 1.5);
  }
  noStroke();
  fill(237, 177, 177);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 0.5, 105);
    rotate(PI / 5);
  } 
//CENTER
  noStroke();
  fill(163,71,73);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 25, 45);
    rotate(PI / 6);
  }
    noStroke();
  fill(1255,255,255);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 0, 1, 35);
  rotate(PI / 8);
  }
  
  pop()
}


//Now declare the phases with their limits and render functions
let phases = [
  {
    limit: 60 * 3,
    render: flower,
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
  {
    limit:-1,
    render: flowerAlive,
  },
];

let currentPhase = 0;
let nextSwitch = phases[0].limit;





