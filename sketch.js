var bg,bg2,bg3,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  //load image for the treasure background
  bg2=loadImage("aladdin_cave2.jpg")
  bg3=loadImage("treasure.jpg");
 
  
}

function setup() {
  createCanvas(1100,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  clues2();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

// add code for changing the background to the treasure background
  
  if(score === 2) {
    clear()
    background(bg2)
    clues2();
    security.display();
  }

  if(score === 3) {
    clear()
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",240, 450);
  }
  drawSprites()
}