let size;
let grassContainer = document.getElementById('grassContainer'); 

function setup() {
    size = min(windowWidth, windowHeight);
    createCanvas(size, size);
}

function draw(){
    background("#5a6c2b");
    drawGrass();
}

function drawGrass(){
  for (i = 1; i < 9; i++){
    let box1 = document.createElement("div")
    if (i % 2 == 0){
      box1.style.backgroundColor = "black"  //("#8bae4f")
    }
    else(
      box1.style.backgroundColor = "white"
    )
  }
  grassContainer.appendChild(box1)

  for (i = 1; i < 9; i++){
    let box2 = document.createElement("div")
    if (i % 2 == 0){
      box2.style.backgroundColor = "white"  //("#8bae4f")
    }
    else(
      box2.style.backgroundColor = "black"
    )
  }
  grassContainer.appendChild(box2)

  for (i = 1; i < 9; i++){
    let box3 = document.createElement("div")
    if (i % 2 == 0){
      box3.style.backgroundColor = "black"  //("#8bae4f")
    }
    else(
      box3.style.backgroundColor = "white"
    )
  }
  grassContainer.appendChild(box3)

  for (i = 1; i < 9; i++){
    let box4 = document.createElement("div")
    if (i % 2 == 0){
      box4.style.backgroundColor = "white"  //("#8bae4f")
    }
    else(
      box4.style.backgroundColor = "black"
    )
  }
  grassContainer.appendChild(box4)

  for (i = 1; i < 9; i++){
    let box5 = document.createElement("div")
    if (i % 2 == 0){
      box5.style.backgroundColor = "black"  //("#8bae4f")
    }
    else(
      box5.style.backgroundColor = "white"
    )
  }
  grassContainer.appendChild(box5)

  for (i = 1; i < 9; i++){
    let box6 = document.createElement("div")
    if (i % 2 == 0){
      box6.style.backgroundColor = "white"  //("#8bae4f")
    }
    else(
      box6.style.backgroundColor = "black"
    )
  }
  grassContainer.appendChild(box6)

  for (i = 1; i < 9; i++){
    let box7 = document.createElement("div")
    if (i % 2 == 0){
      box7.style.backgroundColor = "black"  //("#8bae4f")
    }
    else(
      box7.style.backgroundColor = "white"
    )
  }
  grassContainer.appendChild(box7)

  for (i = 1; i < 9; i++){
    let box8 = document.createElement("div")
    if (i % 2 == 0){
      box8.style.backgroundColor = "white"  //("#8bae4f")
    }
    else(
      box8.style.backgroundColor = "black"
    )
  }
  grassContainer.appendChild(box8)

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

//     let offset = width / 8;
//   for (let i = 0; i < 8; i++) {
//     let x = i * offset;
//     for (let j = 0; j < 8; j++) {
//       let y = offset / 2 + j * offset;
//       let stagger = 0;
//       if (j % 2 == 1) {
//         stagger = offset / 2;
//       }
//       drawSquare(x + stagger, y, 100, 100);
//     }
//   }
// }

// function drawSquare(x, y, w, h){
//     push(); 
//     fill("#8bae4f");
//     noStroke();
//     pop();
 }