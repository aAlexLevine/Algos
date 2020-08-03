// Write a function that accepts a sorted array of integers and a number. Return the index of that number if present. The function should return -1 for target values not in the array.

function search(numbers, target) {
  function binarySearch(left, right) {
    const mid = Math.floor((left + right) / 2);
    if (target === numbers[mid]) {
      return mid;
    } else if (left === mid || right === mid) {
      if (numbers[left] === target) {
        return left;
      }
      if (numbers[right] === target) {
        return right;
      }
      return -1;
    } else if (target > numbers[mid]) {
      return binarySearch(mid, right);
    } else if (target < numbers[mid]) {
      return binarySearch(left, mid);
    }
  }

  return binarySearch(0, numbers.length - 1);
}

// search([1, 3, 6, 13, 17], 13); // -> 3
// search([1, 3, 6, 13, 17], 12); // -> -1
// search([1, 3, 5, 7, 9], 9); // -> 4
// search([1, 2, 3, 4, 5], 3)	// -> 2
// search([1, 2, 4, 5], 3)	// -> -1
// search([1, 2, 3, 4, 5], 7)//	-> -1
