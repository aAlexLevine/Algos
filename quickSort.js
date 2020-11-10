function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// quickSort([99, 12, 18, 40, 20, 0, 3, 9, 18]);
