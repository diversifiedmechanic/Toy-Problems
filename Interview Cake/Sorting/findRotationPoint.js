/*
I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
*/

function findRotationPoint(words) {
  let leftIdx = 0;
  let rightIdx = words.length - 1;
  let middleIdx;

  while (rightIdx > leftIdx) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (words[middleIdx] > words[middleIdx + 1]) {
      return middleIdx + 1;
    }
    if (words[middleIdx] < words[middleIdx - 1]) {
      return middleIdx;
    }

    if (words[middleIdx] > words[leftIdx]) {
      leftIdx = middleIdx + 1
    } else {
      rightIdx = middleIdx - 1;
    }
  }
};

/////////////// TESTS ///////////////
var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words) === 5);

words = [
  'drive',
  'sam',
  'cat',
];

console.log(findRotationPoint(words) === 2);
