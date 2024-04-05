// //values for rectangles on left side
// let recWidth = 200;
// let recHeight = 100;
// // const recHeightDiv = 15;
// // const recWidthDiv = 9;
// let recX = 5;
// let recY = 5;

//   // values for quadrangles coming off left rectangles

//   // let quadXOne = recX + recWidth;
//   let quadXOne = 210;
//   // let quadYOne = recY;
//   let quadYOne = 5;
//   // let quadXTwo = quadXOne + 100;
//   let quadXTwo = quadXOne + (2 * recWidth);
//   // let quadYTwo = quadYOne + 100;
//   let quadYTwo = quadYOne - recHeight;
  
//   // quadXTwo = quadXOne + (2 * recWidth);
//   // quadYTwo = quadYOne - recWidth;
  
  
//   let quadXThree = quadXTwo;
//   // let quadYThree = quadYTwo + 100;
//   let quadYThree = quadYOne;
//   let quadXFour = quadXOne;
//   let quadYFour = quadYOne + recHeight;
//   // let quadYFour = quadYOne + recHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //have to set here after canvas is declared
  // recWidth = width / recWidthDiv;
  // recHeight = height / recHeightDiv;
}



function draw() {

//values for rectangles on left side
let recWidth = 200;
let recHeight = 100;
// const recHeightDiv = 15;
// const recWidthDiv = 9;
let recX = 5;
let recY = 5;

  // values for quadrangles coming off left rectangles

  // quad values with integer
  // let quadXOne = 210;
  // let quadYOne = 5;
  // let quadXTwo = 410;
  // let quadYTwo = -95;
  // let quadXThree = 410;
  // let quadYThree = 5;
  // let quadXFour = 210;
  // let quadYFour = 105;

  let quadXOne = recX + recWidth + 20;
//   let quadXOne = 210;
  let quadYOne = recY;
//   let quadYOne = 5;
  // let quadXTwo = quadXOne + 100;
  let quadXTwo = quadXOne + (2 * recWidth);
//   // let quadYTwo = quadYOne + 100;
  let quadYTwo = quadYOne - recHeight;
  
//   // quadXTwo = quadXOne + (2 * recWidth);
//   // quadYTwo = quadYOne - recWidth;
  
  
  let quadXThree = quadXTwo;
//   // let quadYThree = quadYTwo + 100;
  let quadYThree = quadYOne;
  let quadXFour = quadXOne;
  let quadYFour = quadYOne + recHeight;
//   // let quadYFour = quadYOne + recHeight;

  // background(220);
  // rect (0, 0, recWidth, height);
  
  noStroke();
  
  while (recY < height){
   rect(recX, recY, recWidth, recHeight, 5);
      // quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
    
    recY += recHeight + 5;
    // quadYOne += recHeight;
    
    // quadXOne += recHeight;
    // quadYOne += recHeight; 
    
      }

for (let i = 0; i < 10; i++){
      quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
      quadYOne += recHeight + 5;
      quadYTwo += recHeight + 5;
      quadYThree += recHeight + 5;
      quadYFour += recHeight + 5;
      }     
     
      // for (let i = 0; i < 10; i++){
        quad(quadXOne + quadXTwo, quadYOne + quadYTwo, quadXTwo , quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
        // quadYOne += recHeight + 5;
        // quadYTwo += recHeight + 5;
        // quadYThree += recHeight + 5;
        // quadYFour += recHeight + 5;
        // }
      // quadYOne + recHeight;
      // quadYTwo = quadYOne - recHeight;
      // quadYThree = quadYOne;
      // quadYFour = quadYOne + recHeight;
      // quad(quadXOne, quadYOne, quadXTwo, quadYTwo, quadXThree, quadYThree, quadXFour, quadYFour);
  // strokeWeight(50);
  
  
}