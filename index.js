const ROWS = 5;
const COLS = 5;

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
  if(!goSnakeByMatrix.numbers){
    goSnakeByMatrix.numbers = [];
  }
  const iMatrix = goSnakeByMatrix.innerMatrix;
  const inumbers = goSnakeByMatrix.numbers;

  for (let i = 0, x = iMatrix[0].length - 1; i <= x; i++) {
    inumbers.push(iMatrix[0].shift());
  }

  iMatrix.shift();

  for (let i = 0; i <= iMatrix.length - 1; i++) {
    inumbers.push(iMatrix[i].pop());
  }

  for (let i = iMatrix[0].length - 1, y = iMatrix.length - 1; i >= 0; i--) {
    inumbers.push(iMatrix[y].pop());
  }
  iMatrix.pop();
  for (let i = iMatrix.length - 1; i >= 0; i--) {
    inumbers.push(iMatrix[i].shift());
  }
  if(iMatrix[0]){
    goSnakeByMatrix(iMatrix);
  }
}


goSnakeByMatrix(matrix);

console.log(goSnakeByMatrix.numbers);