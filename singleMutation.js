// There are 3 types of possible string mutations: 
// character insertion, character deletion, or character substitution. 
// Write a function that accepts 2 strings and returns true if the strings 
// are the same except for 0 or 1 mutations. Return false otherwise.

// Inputs: String, String
// Output: Boolean

// Examples: #
// Single Deletion:
// 'abcd', 'abc'
// 'abcd', 'acd'

// Single Insertion:
// 'abcd', 'abcde'
// 'abcd', 'abXcd'

// Single Substitution:
// 'abcd', 'abXd'
// 'abcd', 'Xbcd'

function singleMutation(str1, str2) {
  let longerStr = str1.length > str2.length ? str1 : str2;
  let shorterStr = str1.length > str2.length ? str2 : str1;
  let mutations = 0;

  function checksSubstitution() {
    let pointer = 0;
    while (pointer < str1.length) {
      if (str1[pointer] !== str2[pointer]) {
        mutations++;
      }
      pointer++;
    }
  }

  function checkInsertDeletion() {
    let longPointer = 0;
    let shortPointer = 0;
    while (longPointer < longerStr.length) {
      if (longerStr[longPointer] !== shorterStr[shortPointer]) {
        mutations++;
        longPointer++;
      } else {
        longPointer++;
        shortPointer++;
      }
    }
  }

  if (str1.length !== str2.length) {
    checkInsertDeletion();
  } else {
    checksSubstitution();
  }

  return mutations > 1 ? false : true;
}

//if dif lengths
  //if chars not equal, advance only the longerstr pointer
// if same lengths 
  //if chars not equal, adance both pointers

// singleMutation('abcd', 'abc')	//true	
// singleMutation('abcd', 'abXcd')	//true	
// singleMutation('abcd', 'abXd')	//true
// singleMutation('abcd', 'abXX')	//false	
// singleMutation('abcd', 'ab')	//false	
// singleMutation('abcd', 'abcdef')	//false	
// singleMutation('abcd', 'aXcX')	//false	
// singleMutation('abcd', 'aXc')	//false	
// singleMutation('abcd', 'aXcde')	//false	