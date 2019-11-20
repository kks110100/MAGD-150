var x = 600;
var y = 370;
var w = 100;
var h = 100;

var cx = 600;
var cy = 100;
var cw = 100;
var ch = 100;

var ax,ay; //circle
var cspeed; // motion for circle

function setup() {
  // put setup code here
  createCanvas (800, 600);
  ax=25;
  ay=height/2;
  cspeed =5;
}

function draw() {
  // put drawing code here
  background (51);
  //tv base
  fill('#856B52');
  rect(15, 25, 750, 550);
  //area for buttons
  fill('#CC9D70');
  rect(550, 50, 200, 500);
  //indent
  fill('#664D38');
  rect(40, 50, 500, 500);
  //screen
  fill('#6A6A6A');
  rect(50, 60, 480, 480);
  //buttons
  //on
  fill('#997554');
  ellipse(650, 150, 120, 120);
  fill('#7BFA81');
  ellipse(650, 150, 100, 100);
  //off
  fill('#997554');
  rect(590, 360, 120, 120);
  fill('#FF5739');
  rect(600, 370, 100, 100);
  //text
  textSize(32);
  fill(80);
  text('ON', 625, 160);
  text('OFF', 620, 430)

  if(mouseIsPressed){
    if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
    print("The mouse is pressed and over the button");
    fill(40);
    rect(50, 60, 480, 480);
  }
 } 

  if(mouseIsPressed){
    if(mouseX>cx && mouseX <cx+cw && mouseY>cy && mouseY <cy+ch){
    print("The mouse is pressed and over the button");
    fill('#D0F7F7');
    rect(50, 60, 480, 480);
  }
 }

 //an annoying bug named carl whose sole purpose in life is to annoy you but hes shy
  fill(20);
  ellipse(ax,ay,15,15);
 ax+= cspeed;
  
  if(ax-25 <= 0 || ax+25>width){  
    cspeed *= -2;
  }
}