/*
You created a game that is more popular than Angry Birds.

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlg⁡n)O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

    an array of unsortedScores
    the highestPossibleScore in the game

and returns a sorted array of scores in less than O(nlg⁡n)O(n\lg{n})O(nlgn) time.

For example:

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

We’re defining n as the number of unsortedScores because we’re expecting the number of players to keep climbing.

And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.
*/

function sortScores(unorderedScores, highestPossibleScore) {
  // countingArray
  let counting = [];

  // iterate over scores
  for (let i = 0; i < unorderedScores.length; i++) {
    // if counting at that score is undefined
    if (counting[unorderedScores[i]] === undefined) {
      // set equal to 1
      counting[unorderedScores[i]] = 1;

      // otherwise
    } else {
      // add to that value
      counting[unorderedScores[i]] += 1;
    }
  }

  // if allowed to destroy inc unorderedScored, this is not needed
  let results = [];

  // start from the back of the countingArray
  for (let j = counting.length; j >= 0; j--) {
    // if there is a value at that index
    if (counting[j] !== undefined) {
      // push into results that index as many times as the index holds
      for (let k = 0; k < counting[j]; k++) {
        results.push(j);
      }
    }
  }

  // return the results
  return results;
}

console.log(sortScores([0,5,2,3,1,4], 5));


let desc = 'no scores';
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one score';
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'two scores';
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}