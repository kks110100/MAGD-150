var theta = 1;
var s = 0.0;

function setup() {
  // put setup code here
  createCanvas (800, 600);
}


function draw() {
  background(51);
  noStroke();
  translate(width/2, height/2);
  pacman();
//The ghosts surround and circle pacman to keep him stationary
  push();
  rotate(theta+2);
  translate(210, 0);
  fill('#FF3F36');
  firstghost();
  pop();

  push(); 
  rotate(theta*2);
  translate(350, 0);
  fill('#4CE0FF');
  secondghost();
  pop();

  push();
  rotate(theta*10);
  translate(80, 0);
  fill('#FF9C30');
  questionableghost();
  pop();

  push(); 
  rotate(theta);
  translate(450, 0);
  fill('#FF6499');
  pinkghost();
  pop();

  theta += 0.01;

  b();
}
//I put this code into its own function so I could mess around with the placement of the circle without having to write and rewrite the code.
function b() {
	translate(width/2, height/2);
	scale(s);
	ellipse(0, 0, 100, 100);
	s += 0.01;
	if (s > 20) {
    s = 0;
    }
}
//I put this code into its own function because when I made it I wasn't certain where I was going to place it.
function pacman() {
	fill('#FFE935');
	arc(0, 0, 80, 80, 125, PI + QUARTER_PI, PIE)
	fill(41);
	ellipse(-15, 5, 15, 15);
}
//I put the ghosts into their own function because the ghosts aren't composed of a single object; they are composed of multiple.
function pinkghost() {
	fill('#FF6499');
	rect(0, 0, 75, 75);
	ellipse(37.5, 15, 77.5, 85);
	fill('#FEFCFB');
	ellipse(20, 20, 25, 25);
	ellipse(50, 20, 25, 25);
	fill(41);
	ellipse(25, 20, 15, 15);
	ellipse(55, 20, 15, 15);
}

function questionableghost(){
	fill('#FF9C30');
	rect(0, 0, 75, 75);
	ellipse(37.5, 15, 77.5, 85);
	fill('#FEFCFB');
	ellipse(20, 20, 25, 25);
	ellipse(50, 20, 25, 25);
	fill(41);
	ellipse(25, 20, 15, 15);
	ellipse(55, 20, 15, 15);
}

function secondghost(){
	fill('#4CE0FF');
	rect(0, 0, 75, 75);
	ellipse(37.5, 15, 77.5, 85);
	fill('#FEFCFB');
	ellipse(20, 20, 25, 25);
	ellipse(50, 20, 25, 25);
	fill(41);
	ellipse(25, 20, 15, 15);
	ellipse(55, 20, 15, 15);
}

function firstghost() {
	fill('#FF3F36');
	rect(0, 0, 75, 75);
	ellipse(37.5, 15, 77.5, 85);
	fill('#FEFCFB');
	ellipse(20, 20, 25, 25);
	ellipse(50, 20, 25, 25);
	fill(41);
	ellipse(25, 20, 15, 15);
	ellipse(55, 20, 15, 15);
}