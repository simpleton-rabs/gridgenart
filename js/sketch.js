function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  noLoop();
   textFont("Pangolin", 30);
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

  //index for colours array set to random number
  let coloursIndex = round(random(colours.length - 1));

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

  //index for words - set to random number
  let wordsIndex = round(random(words.length - 1));

  //values for rectangles on left side
  //set width and height of rectangles
  let recWidth = 200;
  let recHeight = 100;
  //top left coordinate of first rectangle
  let recX = 5;
  let recY = 5;

  //values for middle quadrangle
  //first coordinate to be next to top right of rectangles
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

  const phrases1 = [
    "PARTING THE WAVES",
    "BEING THE BEST I CAN",
    "YOU'RE ENTERTAINED",
    "I WON'T BE AFRAID",
    "LOST WITHOUT YOU",
    "THE QUICK BROWN FOX"
  ];

  let phrases1Index = round(random(phrases1.length - 1));
  // console.log(phrases1Index);
  let phrases1X = quadX1;
  let phrases1Y = quadY1 + recHeight / 4;

  //values for right quadrangles
  let nquadX1 = quadX2 + 20;
  let nquadY1 = quadY2;
  let nquadX2 = nquadX1 + 3.5 * recWidth;
  let nquadY2 = quadY1;
  let nquadX3 = nquadX2;
  let nquadY3 = quadY4;
  let nquadX4 = quadX3 + 20;
  let nquadY4 = quadY3;

  const phrases2 = [
    "PARTING THE WAVES",
    "BEING THE BEST I CAN",
    "YOU'RE ENTERTAINED",
    "I WON'T BE AFRAID",
    "LOST WITHOUT YOU",
    "THE QUICK BROWN FOX"
  ];

  let phrases2Index = round(random(phrases2.length - 1));
  // console.log(phrases1Index);
  let phrases2X = nquadX1 + 10;
  let phrases2Y = nquadY1 + recHeight;

  // let phrases2X = 10;
  // let phrases2Y = recHeight / 4;

  noStroke();

  //draw left hand squares with words on top
  //colours and words chosen at randome from arrays to interate sequentially

  // while (recY < height) {

  for (let i = 0; i < 10; i++) {
    //call function to choose colour
    colourChoose(coloursIndex);
    // drawn square with colour from colours array
    rect(recX, recY, recWidth, recHeight, 5);
    //text to appear on rectangles - if text moved up one rectangle height - it will affectively take colour of following rectangle and will be visible
    // textFont("Pangolin", 30);
    textAlign(CENTER);
    //if statement like colours index to check if words index on last array item
    if (wordsIndex == words.length - 1) {
      text(words[wordsIndex], recWidth / 2, recY - recHeight / 2);
      wordsIndex = 0;
    } else {
      text(words[wordsIndex], recWidth / 2, recY - recHeight / 2);
      wordsIndex += 1;
    }

    //increment the y coordinate as this will move both rectangles and text
    recY += recHeight + 5;
  }

  for (let i = 0; i < 10; i++) {
    colourChoose(coloursIndex);
    quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
    quadY1 += recHeight + 5;
    quadY2 += recHeight + 5;
    quadY3 += recHeight + 5;
    quadY4 += recHeight + 5;
    
        quad(nquadX1, nquadY1, nquadX2, nquadY2, nquadX3, nquadY3, nquadX4, nquadY4);
    nquadY1 += recHeight + 5;
    nquadY2 += recHeight + 5;
    nquadY3 += recHeight + 5;
    nquadY4 += recHeight + 5;

    textAlign(LEFT);
    if (phrases1Index == phrases1.length - 1) {
      rotate(-15);
      text(phrases1[phrases1Index], phrases1X, phrases1Y);
      resetMatrix();
      phrases1Index = 0;
    } else {
      rotate(-15);
      text(phrases1[phrases1Index], phrases1X, phrases1Y);
      resetMatrix();
      phrases1Index += 1;
    }
    phrases1Y += recHeight;
    phrases1X -= 20;
  }


  for (let i = 0; i < 10; i++) {
  
    colourChoose(coloursIndex);
    // quad(nquadX1, nquadY1, nquadX2, nquadY2, nquadX3, nquadY3, nquadX4, nquadY4);
    // nquadY1 += recHeight + 5;
    // nquadY2 += recHeight + 5;
    // nquadY3 += recHeight + 5;
    // nquadY4 += recHeight + 5;
    // resetMatrix();
    textAlign(LEFT);
    // translate(nquadX1, nquadX2);4
    if (phrases2Index == phrases2.length - 1) {
      rotate(7);
      text(phrases2[phrases2Index], phrases2X, phrases2Y);
      resetMatrix();
      phrases2Index = 0;
    } else {
      rotate(7);
      text(phrases2[phrases2Index], phrases2X, phrases2Y);
      resetMatrix();
      phrases2Index += 1;
    }
    phrases2Y += recHeight;
    phrases2X += 15;
  }
// resetMatrix();
  // fill(black);
  // textAlign(LEFT);
  // translate(recWidth + 5, 0);
  // rotate(-15);
  // text(phrases1[phrases1Index], 0, quadY1 - recHeight);
  // resetMatrix();
  // // rotate(-15);

  // textAlign(LEFT);

  // if (phrases1Index == phrases1.length -1){

  // }


 
  function colourChoose() {
    //check if colours index is on last array item
    if (coloursIndex == colours.length - 1) {
      fill(colours[coloursIndex]);
      //reset index to 0
      coloursIndex = 0;
      //otherwise fill colour and add 1 to index to interate through array in sequence
    } else {
      fill(colours[coloursIndex]);
      coloursIndex += 1;
    }
  }
} 

// let nquadX1 = quadX2 + 20;
// let nquadY1 = quadY2;
// let nquadX2 = nquadX1 + 3.5 * recWidth;
// let nquadY2 = nquadY1 - recHeight;
// let nquadX3 = nquadX2;
// let nquadY3 = nquadY1;
// let nquadX4 = quadX3 + 20;
// let nquadY4 = quadY3;

// //check if colours index is on last array item
// if (coloursIndex == colours.length - 1) {
//   fill(colours[coloursIndex]);
//   //reset index to 0
//   coloursIndex = 0;
//   //otherwise fill colour and add 1 to index to interate through array in sequence
// } else {
//   fill(colours[coloursIndex]);
//   coloursIndex += 1;
// }
// textFont('Pangolin-Regular', 30);
// while (textY < height) {
//   textFont("Pangolin", 30);
//   textAlign(CENTER);
//   text(random(words), recWidth / 2, textY + recHeight / 2);
//   textY += recHeight + 5;
// }
// quadY1 + recHeight;
// quadY2 = quadY1 - recHeight;
// quadY3 = quadY1;
// quadY4 = quadY1 + recHeight;
// quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
// strokeWeight(50);
// function placeText(type){
//   // if (index == length) {
//     text(type[index], recWidth / 2, recY - recHeight / 2);
//     // index = 0;
//   // } else {
//     // text(type[index], recWidth / 2, recY - recHeight / 2);
//     // index += 1;
//   }
