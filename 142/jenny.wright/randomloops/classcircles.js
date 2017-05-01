

//=========================================================
function zachary(X,Y,R){
  save();

        translate(X,Y);
  scale(R/200);

  var x

  save();
  linewidth(1);
  color(0,0,0,0);
  circle(0,0,183);
  fillcolor("white");
  fill();
  restore();

  circle(0,0,10);
  fillcolor("darkblue");
  fill();

  save();
  linewidth(10);
  color("darkgreen");
  circle(0,0,20);
  restore();

  for(x=5;x<=360;x=x+10){
  save();
  linewidth(3);
  color("lightblue");
  rotate(x);
  line(20,20,100,5);
  restore();
  }

  for(x=5;x<=360;x=x+10){
  save();
  linewidth(3);
  color("darkblue");
  rotate(x);
  circle(0,80,10);
  restore();
  }

  for(x=5;x<=360;x=x+5){
  save();
  linewidth(3);
  color("darkgreen");
  rotate(x);
  line(110,50,100,30);
  restore();
  }
  save();
  linewidth(7);
  color("lightgreen");
  circle(0,0,97);
  restore();

  save();
  linewidth(3);
  color("lightblue");
  circle(0,0,126);
  restore();

  for(x=5;x<=360;x=x+10){
  save();
  linewidth(3);
  color("darkblue");
    fillcolor("lightgreen")
  rotate(x);
  circle(0,140,10);
    fill();
  restore();
  }

  for(x=5;x<=360;x=x+5){
  save();
  linewidth(5);
  color("darkgreen");
  rotate(x);
  line(150,100,120,100);
  restore();
  }
  restore();
      }
//============================================================================

//----------------------------------------------
function jenny(X,Y,R){
	save();
	translate(X,Y);
	scale(R/200);
	  circle(0,0,200);
  fillcolor("lightblue");
  fill();
	clip();

  circle(0,0,180)
  fillcolor("orange");
  fill();
  circle(0,0,165);
  fillcolor("white");
  fill();
  circle(0,0,160);
  fillcolor("magenta");
  fill();
  fill();
  circle(0,0,55);
  fillcolor("lightblue");
  fill();
  circle(0,0,45);
  fillcolor("white");
  fill();
  circle(0,0,40);
  fillcolor("orange");
  fill();


  //variables for the angle to which we will rotate
  var angle;

  //Let angle take the values 20, 40,... up to 360
  //Play wth the number 20 here to see the results
  for (angle=0;angle<360;angle=angle+20){
    //save the graphics state so that transformations
    //do not accumulate
    save();

    //rotate angle
    rotate(angle);

    //draw our shape pointing straight down
    circle(0,100,10,185,-10,185);
    fillcolor("pink");
    fill();

    circle(0,180,10,200,-10,200);
    fillcolor("pink");
    fill();



    triangle(0,190,10,200,-10,200);
    fillcolor("magenta");
    fill();

    triangle(0,190,0,200,-10,200);
    fillcolor("orange");
    fill();


    line(0,150,20,150,-20,150);
    circle(0,150,5,185,5,185);
    fillcolor("lightblue");
    fill();

    triangle(0,90,10,80,-10,80);
    fillcolor("lightblue");
    fill();

    triangle(0,70,15,80,-15,80);
    fillcolor("orange");
    fill();


    //restore the graphics state to undo transforms
    restore();
  }

	restore();
}
function cassie(X,Y,R){
  save();
  translate(X,Y);
  scale(R/180);

  var a;//variables for the angle to which we will rotate
  color('white');
  circle(0,0,180);
  fillcolor('white');
  fill();

  for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('red');
    line(150,0,180,0);
    restore();
  }
  for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('blue');
    circle(135,0,10,0);
    restore();
  }
    for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('green');
    circle(135,0,5,0);
    restore();
  }
    for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('red');
    line(110,0,120,20);
    restore();
  }

    for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('purple');
    triangle(90,40,50,95,5,80);
    restore();
  }
   for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('green');
    circle(60,0,10,0);
    restore();
  }
   for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('red');
    line(150,0,180,0);
    restore();
  }
  for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('blue');
    circle(135,0,10,0);
    restore();
  }
    for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('green');
    circle(135,0,5,0);
    restore();
  }
    for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('green');
    line(110,0,120,20);
    restore();
  }

    for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('purple');
    triangle(90,40,50,95,5,80);
    restore();
  }
   for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('red');
    circle(60,0,10,0);
    restore();
  }
  //
   for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('purple');
    line(35,0,45,0);
    restore();
  }
  for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('blue');
    circle(30,0,2,0);
    restore();
  }
    for (a=0;a<360;a=a+10){
    save();
    rotate(a);
    color('green');
    line(15,0,18,-20);
    restore();
  }

   for (a=0;a<360;a=a+5){
    save();
    rotate(a);
    color('purple');
    circle(5,0,5,0);
    restore();
  }
  restore();
}
