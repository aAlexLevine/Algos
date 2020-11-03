//Print all permutations of string

const stringPermutations = (string) => {
  const buildStrings = (str, remainingLetters) => {
    if (!remainingLetters.length) {
      console.log(str);
    }
    for (let i = 0; i < remainingLetters.length; i++) {
      const nextString = str.concat(remainingLetters[i]);
      const lettersAfterCurrent = remainingLetters.slice(i + 1);
      const lettersBeforeCurrent = remainingLetters.slice(0, i);
      const nextLetters = lettersAfterCurrent.concat(lettersBeforeCurrent);
      buildStrings(nextString, nextLetters);
    }
  };
  buildStrings("", string);
};

stringPermutation("abc"); //abc acb bca bac cab cba
