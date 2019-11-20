let k;
let k1;
let k2;
let k3;
let k4;
let k5;
var theta = 1

function setup() {
  // put setup code here
  createCanvas(600, 600);
  k = new dumbbug();
  k1 = new dumbbug();
  k2 = new dumbbug();
  k3 = new dumbbug();
  k4 = new dumbbug();
  k5 = new dumbbug();
}

function draw() {
	background(40);
	//The rectangle's purpose is to act like a light so the bugs are attracted to it.
	fill('#FFEC7E');
	rect (50, 50, 500, 500)
	littlebugfriend();
	//There isn't really much of a logical purpose for me putting this here, I just wanted to put it there.
	push();
  rotate(theta+2);
  translate(50, 50);
  littlebugfriend();
  pop();
  theta += 0.03;
	k = new dumbbug();
	k.move();
	k.show();
	k1.move();
	k1.show();
	k2.move();
	k2.show();
	k3.move();
	k3.show();
	k4.move();
	k4.show();
	k5.move();
	k5.show();
}

//I decided on this idea of bugs flocking towards light when a bunch of tiny bugs kept hitting my window. I designed this class to recreate this event.
class dumbbug {
	constructor() {
		this.x = 250;
		this.y = 200;
	}

	move() {
		this.x = this.y + random(-10, 10);
		this.y = this.x + random(-10, 10);
	}

	show() {
		fill(10);
		ellipse(this.x, this.y, 14, 14);
	}
}

function littlebugfriend(){
	//The goal of this is to create a bug that resembles a butterfly. 
	//I decided to add this because there was a moth chilling on the window as the tiny bugs attempted to get inside so I wanted to recreate it.
	fill(51);
	ellipse(300, 310, 25, 120);
	fill('#FFC550');
	ellipse(245, 280, 100, 100);
	ellipse(355, 280, 100, 100);
	fill('#FFB932');
	ellipse(255, 330, 90, 90);
	ellipse(350, 330, 90, 90);
}