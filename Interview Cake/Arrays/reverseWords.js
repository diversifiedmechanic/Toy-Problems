/*
You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

For example:

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
*/
function reverseWords(message) {
  let leftWordIdxStart = 0, leftWordIdxEnd = 0;
  let rightWordIdxStart, rightWordIdxEnd;

  while (leftWordIdxStart !== rightWordIdxStart) {
    let leftWord, rightWord;

    if (leftWordIdxStart) leftWordIdxStart = leftWordIdxEnd + 2;

    // find words coming from the left and where last word was left off
    for (let i = leftWordIdxEnd + 2; i <= message; i++) {
      // set left word index to current index
      if (message[i] === ' ') leftWordIdxEnd = i - 1;
    }
    // find words coming from the right and where last word was left off
    for (let j = rightWordIdxStart - 2; j <= 0; j--) {
      // set left word index to current index
      if (message[j] === ' ') leftWordIdxEnd = j - 1;
    }
  }

}