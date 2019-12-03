var x = 50;
var y = 50;
var diameter = 25;
var x1 = 50;
var y1 = 50;
var diameter1 = 25;
var x2 = 150;
var y2 = 150;
var diameter2 = 25;
var mousex = 0;
var mousey = 0;
var movement = 10


function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(255, 250, 212);
  fill(232, 138, 7);
  circle(x, y, diameter);
  circle(x1,y1,diameter1);
  circle(x2,y2,diameter2);
  if(x1 >= 600 || x1<=0)
  {
    movement *= -1;
  }
  
  x1+=movement;
  
  
  if(x2 >= 600 || x2<=0)
  {
    movement *= -1;
  }
  
  x2+=movement;


  if (x >= 500) 
  {
    x = 50;
  }

  if (keyIsDown(83)) 
  {
    y += 10;
  } 
  else if (keyIsDown(87)) 
  {
    y -= 10;
  }

  if (y >= 500) 
  {
    y = 50;
  }

  if (diameter < 200) 
  {
    diameter += 2;
  } 
  else if (diameter >= 200) 
  {
    diameter = 25;
  }
     ellipse(mousex, mousey, 15, 50);
}

function keyPressed() 
{
  if (key == 'd') 
  {
    x += 10;
  } 
  else if (key == 'a') 
  {
    x -= 10;
  }
}

function mousePressed() 
{  
  mousex = mouseX;
  mousey = mouseY;

}

