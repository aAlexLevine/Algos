//Implement mergeSort

function mergeSort(array) {
  function merge(arr1, arr2) {
    const merged = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] > arr2[0]) {
        merged.push(arr2.shift());
      } else {
        merged.push(arr1.shift());
      }
    }
    return merged.concat(arr1, arr2);
  }

  function divide(arr) {
    if (arr.length === 1) return arr;
    const split = Math.floor(arr.length / 2);
    const left = arr.slice(0, split);
    const right = arr.slice(split);
    return merge(divide(left), divide(right));
  }
  return divide(array);
}

// mergeSort([40, 30, 10, 90, 80, 7, 0]);

