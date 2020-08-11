// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
// Example 3:

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

const smallest_subarray_with_given_sum = function (s, arr) {
  let left = 0;
  let right = 0;
  let currSum = arr[right];
  let minLength;
  let currLength = 1;

  while (right < arr.length && left < arr.length) {
    if (currSum >= s) {
      if (!minLength) {
        minLength = currLength;
      } else {
        minLength = Math.min(minLength, currLength);
      }
      currSum -= arr[left];
      left++;
      currLength--;
    } else {
      right++;
      currSum += arr[right];
      currLength += 1;
    }
  }

  return !!minLength ? minLength : 0;
};

// smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])//2
// smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])//1
// smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])//3
// smallest_subarray_with_given_sum(7, [3,4,7]) //1

//if sum greater than or equal to s,
//if smallest length does not exist set it to current length
//else set smallest lenght to be the smaller or current len vs smallest len
//subtract num at left pointer from current sum
//increment left pointer
// decrement current length by one
//else
//sum += arr[right]
//increment right pointer
