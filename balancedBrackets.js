// Given a string, return true if it contains all balanced 
// parentheses (), curly-brackets {}, and square-brackets [].

function isBalanced(str) {
  const stack = [];
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(brackets[str[i]]);
    }
    if (str[i] === "]" || str[i] === "}" || str[i] === ")") {
      if (stack.pop() !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// if open push its closed counter part into stack
// if close pop off stack and compare
// if not equal return false
// if stack empty at the end , its balanced.

// isBalanced("(x + y) - (4)"); // -> true
// isBalanced("(((10 ) ()) ((?)(:)))"); // -> true
// isBalanced("[{()}]"); // -> true
// isBalanced("(50)("); // -> false
// isBalanced("[{]}"); // -> false
