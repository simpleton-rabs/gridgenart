function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
}

function draw() {
//array for colours
const colours = ['black', 'red', 'navy', 'orange', 'green', 'yellow', 'white'];
// array for words
const words = ['WORD1','WORD2', 'WORD3', 'WORD4', 'WORD5'];

// const textColours = [ ];
// let colourIndex = 0;

let coloursIndex = 0;
//values for rectangles on left side
let recWidth = 200;
let recHeight = 100;
// const recHeightDiv = 15;
// const recWidthDiv = 9;
let recX = 5;
let recY = 5;

  let quadX1 = recX + recWidth + 20;
//   let quadX1 = 210;
  let quadY1 = recY;
//   let quadY1 = 5;
  // let quadX2 = quadX1 + 100;
  let quadX2 = quadX1 + (2 * recWidth);
//   // let quadY2 = quadY1 + 100;
  let quadY2 = quadY1 - recHeight;
  
//   // quadX2 = quadX1 + (2 * recWidth);
//   // quadY2 = quadY1 - recWidth;
  
  
  let quadX3 = quadX2;
//   // let quadY3 = quadY2 + 100;
  let quadY3 = quadY1;
  let quadX4 = quadX1;
  let quadY4 = quadY1 + recHeight;
//   // let quadY4 = quadY1 + recHeight;

  // background(220);
  // rect (0, 0, recWidth, height);

  let nquadX1 = quadX2 + 20;
//   let quadX1 = 210;
  let nquadY1 = quadY2;
//   let quadY1 = 5;
  // let quadX2 = quadX1 + 100;
  let nquadX2 = nquadX1 + (3.5 * recWidth);
//   // let quadY2 = quadY1 + 100;
  let nquadY2 = nquadY1 - recHeight;
  
//   // quadX2 = quadX1 + (2 * recWidth);
//   // quadY2 = quadY1 - recWidth;
  
  
  let nquadX3 = nquadX2;
//   // let quadY3 = quadY2 + 100;
  let nquadY3 = nquadY1;
  let nquadX4 = quadX3 + 20;
  let nquadY4 = quadY3;
  
  noStroke();

  //coloursIndex = random(colours.length);

        coloursIndex = round (random(colours.length - 1));
  
        console.log(coloursIndex);

  while (recY < height){
    
    if (coloursIndex == (colours.length - 1)){
        fill(colours[coloursIndex])
        coloursIndex = 0
      } else{
      fill(colours[coloursIndex])
      coloursIndex += 1
      }   

      textFont('Pangolin', 30);
      textAlign(CENTER);
      text( random(words), recWidth/2, recHeight/2);

      // fill(random(colours));
   
    rect(recX, recY, recWidth, recHeight, 5);
      // quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
    
    
    recY += recHeight + 5;
    // quadY1 += recHeight;
    
    // quadX1 += recHeight;
    // quadY1 += recHeight; 
    
      }

for (let i = 0; i < 10; i++){
      quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
      quadY1 += recHeight + 5;
      quadY2 += recHeight + 5;
      quadY3 += recHeight + 5;
      quadY4 += recHeight + 5;
      }     
     
      for (let i = 0; i < 10; i++){
        quad(nquadX1, nquadY1, nquadX2 , nquadY2, nquadX3, nquadY3, nquadX4, nquadY4);
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