// Given a string, find the length of the longest substring which has no repeating characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

const non_repeat_substring = function (str) {
  let left = 0;
  let right = 0;
  let hash = {};
  let longest = 0;

  while (right < str.length) {
    if (!hash[str[right]]) {
      hash[str[right]] = true;
      longest = Math.max(longest, right - left + 1);
      right++;
    } else {
      hash = {};
      hash[str[right]] = true;
      left = right;
      longest = Math.max(longest, right - left + 1);
      right++;
    }
  }
  return longest;
};

non_repeat_substring("aabccbb"); //3
non_repeat_substring("abbbb"); //2
non_repeat_substring("abccde"); //3

//if right not in hash
//add to hash
//if length longer than longest, update
// incrmeent right
//else
//create new hash with right as prop
// if length (right - left + 1)
//update left to right
//increment right
//change curr length to 1
