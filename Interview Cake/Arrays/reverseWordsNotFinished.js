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
  let leftWordIdxStart = 0, leftWordIdxEnd;
  let rightWordIdxStart, rightWordIdxEnd = message.length - 1;

  while (true) {
    let foundLeftWord = false, foundRightWord = false;
    let leftIdx, rightIdx;

    // find the new start
    // leftWordIdxStart = leftWordIdxEnd + 2;
    leftIdx = leftWordIdxStart;

    // find words coming from the left and where last word was left off
    while(!foundLeftWord) {
      // set left word index to current index
      if (message[leftIdx] === ' ') {
        leftWordIdxEnd = leftIdx;
        foundLeftWord = true;
        break;
      }

      leftIdx++;
    }

    // find the new start
    // rightWordIdxEnd = rightWordIdxStart - 2;
    rightIdx = rightWordIdxEnd;


    // find words coming from the right and where last word was left off
    while(!foundRightWord) {
      // set left word index to current index
      if (message[rightIdx] === ' ') {
        rightWordIdxStart = rightIdx + 1;
        foundRightWord = true;
        break;
      }

      rightIdx--;
    }

    // if they are the same index, we are at the same word
    if (leftWordIdxStart >= rightWordIdxStart) break;

    let leftWord = message.slice(leftWordIdxStart, leftWordIdxEnd);
    let rightWord = message.slice(rightWordIdxStart, rightWordIdxEnd + 1);

    message.splice(leftWordIdxStart, leftWord.length, ...rightWord);
    message.splice(rightWordIdxStart + 2, rightWord.length, ...leftWord);

    leftWordIdxStart = leftWordIdxStart + rightWord.length - 1 + 2;
    rightWordIdxEnd = rightWordIdxStart - leftWord.length - 1;
  }
}

let test = [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l', ' ', 'p', 'l', 'e', 'a', 's', 'e' ];
console.log(test.length);

reverseWords(test)

console.log(test);