//values for rectangles on left side
let recWidth = 0;
let recHeight = 0;
const recHeightDiv = 15;
const recWidthDiv = 9;
let recX = 5;
let recY = 5;

// quadXOne = recX + recWidth;
// let quadXOne = 5;
// let quadYOne = 5;
// let quadXTwo = quadXOne + 100;
// let quadYTwo = quadYOne + 100;
// quadXTwo = quadXOne + (2 * recWidth);
// quadYTwo = quadYOne - recWidth;


// let quadXThree = quadXTwo;
// let quadYThree = quadYTwo + 100;
// let quadXFour = quadXOne; 
// // quadYFour = quadYOne + recHeight;
// let quadYFour = quadYOne + recHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //have to set here after canvas is declared
  recWidth = width / recWidthDiv;
  recHeight = height / recHeightDiv;
  
  // values for quadrangles coming off left rectangles
}

function draw() {
  // background(220);
  // rect (0, 0, recWidth, height);
  
  // noStroke();
  
  while (recY < height){
  rect(recX, recY, recWidth, recHeight, 5);
      // quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
    
    recY += recHeight;
    
    
    // quadXOne += recHeight;
    // quadYOne += recHeight; 
    
      }
  
    //   quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);

  // strokeWeight(50);
  
  
}