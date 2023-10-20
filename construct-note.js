/** Construct Note
 * 
 * Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

/**
 * Build two frequency counters. If any of the message characters are not foind in the 'letters' characters, or if there are not enough of them, return false.  Otherwise return true.
 */

function constructNote(message, letters) {
  const lettersFreq = {};
  const messageFreq = {};

  // build frequency counter of letters
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }

  // build frequency counter of message
  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }

  // final comparison of message frequency with letters frequency
  for (let char in messageFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }

  return true;
}

module.exports = constructNote;
