class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    // word to hold the current word
    let word = '';

    // adding + 1 to length to 'catch' the final word
    for (let i = 0; i < inputString.length + 1; i++) {
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
          || letter === ','
          || i === inputString.length
        ) && (word !== '')
      ) {
        if (word === '-' || word === '.') {
          word = '';
          continue;
        }
        // grab the value of the word in the Map
        let currentCount = this.wordsToCounts.get(word.toLowerCase());

        // console.log(currentCount);
        // if it doesn't exist
        if (currentCount === undefined) {
          // add it and set it equal to 1
          this.wordsToCounts.set(word.toLowerCase(), 1);

        // otherwise
        } else {
          // add one to it
          this.wordsToCounts.set(word.toLowerCase(), currentCount + 1);
        }

        // skip over the next word if it is a blank
        if (inputString[i + 1] === ' ') i++;

        // reset the word to a blank
        word = '';

      // otherwise, we are building our word
      } else {
        word += letter;
      }
    }
  }
}

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['i', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
  ['chocolate', 1], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['strawberry', 1], ['short', 1], ['yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['bakery', 1], ['cakes', 1], ["allie's", 1], ["sasha's", 1]]);
console.log(actual.entries());
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
