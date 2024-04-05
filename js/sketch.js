//values for rectangles on left side
let recWidth = 200;
let recHeight = 100;
// const recHeightDiv = 15;
// const recWidthDiv = 9;
let recX = 5;
let recY = 5;

  // values for quadrangles coming off left rectangles

  // let quadXOne = recX + recWidth;
  let quadXOne = 205;
  // let quadYOne = recY;
  let quadYOne = 5;
  // let quadXTwo = quadXOne + 100;
  let quadXTwo = quadXOne + (2 * recWidth);
  // let quadYTwo = quadYOne + 100;
  let quadYTwo = quadYOne - recHeight;
  
  // quadXTwo = quadXOne + (2 * recWidth);
  // quadYTwo = quadYOne - recWidth;
  
  
  let quadXThree = quadXTwo;
  // let quadYThree = quadYTwo + 100;
  let quadYThree = quadYOne;
  let quadXFour = quadXOne;
  let quadYFour = quadYOne + recHeight;
  // let quadYFour = quadYOne + recHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //have to set here after canvas is declared
  // recWidth = width / recWidthDiv;
  // recHeight = height / recHeightDiv;
}



function draw() {
  // background(220);
  // rect (0, 0, recWidth, height);
  
  // noStroke();
  
  while (recY < height){
   rect(recX, recY, recWidth, recHeight, 5);
      // quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
    
    recY += recHeight;
    // quadYOne += recHeight;
    
    // quadXOne += recHeight;
    // quadYOne += recHeight; 
    
      }

      while (quadYOne < height){
      quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
      quadYOne += recHeight;
      quadYTwo += recHeight;
      quadYThree += recHeight;
      QuadYFour += recHeight;
      }     
     
      // quadYOne + recHeight;
      // quadYTwo = quadYOne - recHeight;
      // quadYThree = quadYOne;
      // quadYFour = quadYOne + recHeight;
      // quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
  // strokeWeight(50);
  
  
}