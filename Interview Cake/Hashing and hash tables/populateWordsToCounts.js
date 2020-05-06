class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    // word to hold the current word
    let word = '';

    for (let i = 0; i < inputString.length; i++) {
      let letter = inputString[i];

      // if we hit and ending character
      if (
        (
          letter === '?'
          || letter === '.'
          || letter === '!'
          || letter === ':'
          || letter === ';'
          || letter === ' '
        ) && (word !== '')
      ) {
        // grab the value of the word in the Map
        let currentCount = this.wordsToCounts.get(word);

        // if it doesn't exist
        if (currentCount === undefined) {
          // add it and set it equal to 1
          this.wordsToCounts.set(word, 1);

        // otherwise
        } else {
          // add one to it
          this.wordsToCounts.set(word, currentCount + 1);
        }
        // reset the word to a blank
        word = '';

      // otherwise, we are building our word
      } else {
        word.concat(letter);
      }
    }
  }
}

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
