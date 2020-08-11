// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

const longest_substring_with_k_distinct = function (str, k) {
  let distinctLetters = { count: 0 };
  let left = 0;
  let right = 0;
  let longest = 0;
  let currLength = 0;

  while (right < str.length) {
    let isInHash = distinctLetters[str[right]];
    let count = distinctLetters.count;
    if (!isInHash && count < k) {
      distinctLetters[str[right]] = true;
      distinctLetters.count++;
      currLength = right - left + 1;
      right++;
    } else if (isInHash) {
      currLength = right - left + 1;
      right++;
    } else {
      longest = Math.max(longest, currLength);
      distinctLetters = { count: 0 };
      left++;
      right = left;
    }
  }
  return longest;
};

// longest_substring_with_k_distinct("araaci", 2)//4
// longest_substring_with_k_distinct("araaci", 1)//2
// longest_substring_with_k_distinct("cbbebi", 3)//5

//create hash
//left and right pointers

//iterate through string
//if letter at right pointer not in hash and count <= k
//add letter to hash
//incrment count
// set currlength to right - left + 1
//increment right pointer
//else if letter at right pointer is in hash
//set currlength to right - left + 1
//increment right pointer

//else
//set longest to max of longest and current ()
//create new hash
//increment left pointer
//set right pointer to left pointer
