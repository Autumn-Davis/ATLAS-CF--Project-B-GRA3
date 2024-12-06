let farmerx = 0;
let farmery = 0;



function keyPressed () {
    if (keyCode === DOWN_ARROW){
      farmery +=1;
    }
  
    if (keyCode === UP_ARROW){
      farmery -=1;
    }
  
  if (keyCode === LEFT_ARROW){
    farmerx -=1;
  }
  
    if (keyCode === RIGHT_ARROW){
      farmerx += 1;
    }
    
  }
  

  function draw (){
    DrawFarmer();
  }

  function DrawFarmer () {
  
    push ();
      translate( farmerx * 100, farmery * 100);
      
      stroke(1);
      fill(sk);
      //halment of farmer
      let halmet = circle(50,150,25);
      fill("#e4d96f");
      
      //farmer
        circle (50,130,15);
      ellipse (50,140,30,15);
      fill(sk);
      rect(40,160,20,30)
      //eyes
      push();
      //left
      stroke(95, 76, 45);
      fill(111, 96, 51);
      circle(48, 150.5, 3);
      //point(55,150)
      //right
      circle(58.5, 149.5, 3);
      //point(45,150)
      pop();
      
      //mouth
      push();
      stroke(136, 114, 63);
      arc(53.5, 152, 2, 3, 2*PI, PI);
      pop();
      
    //arms 
      rect(35,160,10,15);
      rect(55,160,10,15);
      
      //feet
      fill("black");
      ellipse(45,190,5,10);
      ellipse(55,190,5,10);
      
      //overalls 
      stroke(2)
      fill("#0c426d");
      rect(40,160,5,10);
      rect(55,160,5,10);
      rect(40,170,20,20);
      
      pop();
      
    }