let font;
function preload() {
  font = loadFont("../font/Pangolin-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
}

function draw() {
  //array for colours
  const colours = [
    "black",
    "red",
    "navy",
    "orange",
    "green",
    "yellow",
    "white",
  ];

  //index for colours array
  let coloursIndex = 0;

  // array for words
  const words = [
    "ALT",
    "WONDEROUS",
    "BECOME",
    "HALO",
    "PS.JS",
    "AOHELL",
    "ACADEMIC",
    "AI",
    "LUNAR",
    "LOSS",
    "STRONG",
    "KITKAT",
    "ENTERTAIN",
    "CHANGE",
    "SOCIAL",
    "ART",
    "GENERATIVE",
  ];

  //values for rectangles on left side
  //set width and height of rectangles
  let recWidth = 200;
  let recHeight = 100;
  //top left coordinate of first square 
  let recX = 5;
  let recY = 5;
  let textY = recY;

  //values for middle quadrangle
  //first coordinate to be next to top right of squares
  let quadX1 = recX + recWidth + 20;
  let quadY1 = recY;
  //second third coordinates to make quadrangle right side appear distance twice width of rectangle but same height of rectangles 
  let quadX2 = quadX1 + 2 * recWidth;
  let quadY2 = quadY1 - recHeight;
  let quadX3 = quadX2;
  let quadY3 = quadY1;
  //fourth coordinate to be next to bottom right of squares  
  let quadX4 = quadX1;
  let quadY4 = quadY1 + recHeight;

  //values for right quadrangles
  let nquadX1 = quadX2 + 20;
  let nquadY1 = quadY2;
  let nquadX2 = nquadX1 + 3.5 * recWidth;
  let nquadY2 = nquadY1 - recHeight;
  let nquadX3 = nquadX2;
  let nquadY3 = nquadY1;
  let nquadX4 = quadX3 + 20;
  let nquadY4 = quadY3;

  noStroke();

  //choose random index for colours
  coloursIndex = round(random(colours.length - 1));

  while (recY < height) {
    if (coloursIndex == colours.length - 1) {
      fill(colours[coloursIndex]);
      coloursIndex = 0;
    } else {
      fill(colours[coloursIndex]);
      coloursIndex += 1;
    }

    rect(recX, recY, recWidth, recHeight, 5);
    recY += recHeight + 5;
  }

  // textFont('Pangolin-Regular', 30);
  while (textY < height) {
    textFont("Pangolin", 30);
    textAlign(CENTER);
    text(random(words), recWidth / 2, textY + recHeight / 2);
    textY += recHeight + 5;
  }

  for (let i = 0; i < 10; i++) {
    quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
    quadY1 += recHeight + 5;
    quadY2 += recHeight + 5;
    quadY3 += recHeight + 5;
    quadY4 += recHeight + 5;
  }

  for (let i = 0; i < 10; i++) {
    quad(
      nquadX1,
      nquadY1,
      nquadX2,
      nquadY2,
      nquadX3,
      nquadY3,
      nquadX4,
      nquadY4
    );
    nquadY1 += recHeight + 5;
    nquadY2 += recHeight + 5;
    nquadY3 += recHeight + 5;
    nquadY4 += recHeight + 5;
  }
  // quadY1 + recHeight;
  // quadY2 = quadY1 - recHeight;
  // quadY3 = quadY1;
  // quadY4 = quadY1 + recHeight;
  // quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
  // strokeWeight(50);
}

// function colour(){

// }
