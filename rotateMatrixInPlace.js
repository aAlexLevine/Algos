// Write a function that takes a square matrix as input. 
// A square matrix has the same number of rows and columns, e.g. 3 x 3, 4 x 4, 5 x 5. 
// It should return the same matrix rotated 90 degrees clockwise. 
// The rotation should happen in place, do not create any extra matrixes.

// [[1, 2, 3],  ->  // [[7, 4, 1],
//  [4, 5, 6],  ->  //  [8, 5, 2],      
//  [7, 8, 9]]  ->  //  [9, 6, 3]]

function rotateClockwiseInPlace (matrix) {
  function swap (aRow, aCol, bRow, bCol) {
    let temp = matrix[aRow][aCol]
    matrix[aRow][aCol] = matrix[bRow][bCol]
    matrix[bRow][bCol] = temp
  }

  for(let startPoint = 0; startPoint < Math.floor(matrix.length / 2); startPoint++) {
    for (let i = startPoint; i < matrix[startPoint].length - 1 - startPoint; i++) {
      swap(startPoint, i, i, matrix[startPoint].length - 1 - startPoint)
      swap(startPoint, i, matrix.length - 1 - startPoint, matrix[startPoint].length - 1 - i)
      swap(startPoint, i, matrix.length - 1 - i, startPoint)
    }
  }
  return matrix
}

//swap the first corner (top left) to the top right corner
//swap that swapped first corner again to the bottom right corner
//finally swap the the twice swapped first corner again to the bottom left corner
//repeat these steps for the remaining elements except the last 
  //each of the the three destination corners advances the corresponding spot
//step into inner square and repeat

// rotateClockwiseInPlace([[1]])//	[[1]]
// rotateClockwiseInPlace([[1, 2], [3, 4]])	//[[3, 1], [4, 2]]
// rotateClockwiseInPlace([[1, 2, 3], [4, 5, 6], [7, 8, 9]])	//[[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// rotateClockwiseInPlace([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])	// [[13, 9, 5, 1], [14, 10, 6, 2], [ 15, 11, 7, 3 ], [ 16, 12, 8, 4 ]]