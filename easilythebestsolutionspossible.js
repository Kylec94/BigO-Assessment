const addToZero = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
// 0(n^2)

function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}

// O(n)

function isPangram(string) {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

// O(n)

const findLongestWord = (str) => {
  let strSplit = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
};

// O(n)
