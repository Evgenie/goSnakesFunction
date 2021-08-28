const ROWS = 15;
const COLS = 3;

const matrix = new Array(ROWS);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(COLS);
}

for (let row = 0, count = 1; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++ , count++) {
    matrix[row][col] = count;
  }
}

console.table(matrix);

function goSnakeByMatrix(matrix) {
  goSnakeByMatrix.innerMatrix = Object.assign([], matrix);
  if (!goSnakeByMatrix.numbers) {
    goSnakeByMatrix.numbers = [];
  }
  const iMatrix = goSnakeByMatrix.innerMatrix;
  const inumbers = goSnakeByMatrix.numbers;
  
 

  if (iMatrix[0] && iMatrix[0].length !== 0) {
    for (let i = 0, x = iMatrix[0].length - 1; i <= x; i++) {
      inumbers.push(iMatrix[0].shift());
    }
    
    iMatrix.shift();
    
    if (iMatrix[0] && iMatrix[0].length !== 0) {
      for (let i = 0; i <= iMatrix.length - 1; i++) {
        inumbers.push(iMatrix[i].pop());
      }
      
      if (iMatrix[0].length === 0) {
        return;
      }
      for (let i = iMatrix[0].length - 1, y = iMatrix.length - 1; i >= 0; i--) {
        inumbers.push(iMatrix[y].pop());
      }
      
      iMatrix.pop();
      
      for (let i = iMatrix.length - 1; i >= 0; i--) {
        inumbers.push(iMatrix[i].shift());
      }
      goSnakeByMatrix(iMatrix);
    }
  }
}


goSnakeByMatrix(matrix);

console.log(goSnakeByMatrix.numbers);