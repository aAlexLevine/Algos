// Write a function that takes a matrix as input and returns a new matrix. 
// This new matrix should represent the original matrix rotated 90 degrees clockwise. 
// The original matrix should be unchanged. 
// This function should work for both square and rectangular matrixes.

// [[1, 2, 3],  ->  // [[8, 5, 2],
//  [4, 5, 6],  ->  //  [7, 4, 1],
//  [7, 8, 9]]  ->  //  [9, 6, 3]]

function rotateClockwise(matrix) {
  let col = 0;
  let row = 0;
  const numOfCols = matrix[0].length;
  const numOfRows = matrix.length;
  const newMatrix = [];

  while (col < numOfCols) {
    let newArray = [];
    while (row < numOfRows) {
      newArray.unshift(matrix[row][col]);
      row++;
    }
    row = 0;
    newMatrix.push(newArray);
    col++;
  }
  return newMatrix;
}

//rotateClockwise([[1]])	//[[1]]
//rotateClockwise([[1, 2], [3, 4]])	//[[3, 1], [4, 2]]
// rotateClockwise([[1, 2, 3], [4, 5, 6], [7, 8, 9]])	//[[7, 4, 1], [8, 5, 2], [9, 6, 3]]
//rotateClockwise([[1, 2, 3]]	[[1], [2], [3]])
//rotateClockwise([[1, 2, 3], [4, 5, 6]])	//[[4, 1], [5, 2], [6, 3]]

//---Another way---
// function rotateClockwise(matrix) {
//     const newMatrix = matrix[0].map(() => []);

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
//         }
//     }
//     return newMatrix;
// }
