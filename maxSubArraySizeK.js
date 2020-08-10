// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

const max_sub_array_of_size_k = function (k, arr) {
  let left = 0;
  let right = 1;
  let currSum = arr[left];
  let max = 0;

  while (right < arr.length) {
    currSum += arr[right];
    max = Math.max(currSum, max);
    if (right + 1 - left === k) {
      currSum -= arr[left];
      left++;
    }
    right++;
  }
  return max;
};

// max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
// max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])

//two pointers set left to 0 and right to 1
//while right pointer less than arr length
// get sum of element at left and right
// if sum greater than max, update max
// if right pointer plus one minus left pointer equal to k
// set current sum to cur sum minues element at left pointer
//advance left pointer by one
//else advance right pointer by one
