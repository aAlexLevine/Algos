// Write a function that solves for all the test cases below

function add(num1, num2) {
  let firstValue;
  if (!arguments.length) {
    return addTo;
  }

  if (arguments.length > 1) {
    return num1 + num2;
  } else {
    firstValue = arguments[0];
  }
  return addTo;

  function addTo(nextValue) {
    if (!arguments.length) {
      return addTo;
    }
    if (!firstValue) {
      firstValue = nextValue;
      return addTo;
    }
    return firstValue + nextValue;
  }
}

// add(3, 4); // -> 7
// add(10, 12); // -> 22

// add(3)(4); // -> 7
// add(10)(12); // -> 22

// add(3)()(4); // -> 7
// add(3)()()()(4); // -> 7
// add(10)()()()()()()()()()()()(12); // -> 22

// add()(3)(4); // -> 7
// add()()()()(10)(12); // -> 22

// add()(3)()(4); // -> 7
// add()()()()()(10)()()()(12); // -> 22

// ---Alternatively
// function add(num1, num2) {
//   if (num1 === undefined) {
//     return add;
//   }

//   if (num2 === undefined) {
//     return function innerAdd(num3) {
//       if (num3 === undefined) {
//         return innerAdd;
//       }

//       return num1 + num3;
//     };
//   }

//   return num1 + num2;
// }
