function setup() 
{
	createCanvas(400,400);
}

let c = ("#a34749");
let sk = ("#dec58f");

function draw()
{
    console.log("Yo");

    background("#5a6c2b");
    fill("#8bae4f");
    noStroke();
    square(0,0,100,0);
    square (100,100,100);
    square(200,200,100);
    square (300,300,100);
    square(0,200,100);
    square(100,300,100);
    square(200,0,100);
    square(300,100,100)


    //flower
  
  fill(c);
  ellipse(50,30,10,20);
  ellipse(50,60,10,20);
  ellipse(35,45,20,10);
  ellipse(65,45,20,10);
  fill("brown")
  circle(50,45,15)
  
  // let farmer =
  
  stroke(1)
  fill(sk);
  //halment of farmer
  let halmet = circle(50,150,25);
  fill("#e4d96f");
  
  //farmer
    circle (50,130,15)
  ellipse (50,140,30,15);
  fill(sk);
  rect(40,160,20,30)
  //eyes
  push();
  //left
  stroke(95, 76, 45)
  fill(111, 96, 51)
  circle(48, 150.5, 3)
  //point(55,150)
  //right
  circle(58.5, 149.5, 3)
  //point(45,150)
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
  fill("black")
  ellipse(45,190,5,10)
  ellipse(55,190,5,10)
  
  //overalls 
  stroke(2)
  fill("#0c426d");
  rect(40,160,5,10);
  rect(55,160,5,10);
  rect(40,170,20,20);
  

  
}







