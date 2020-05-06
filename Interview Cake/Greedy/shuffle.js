/*
Write a function for doing an in-place ↴ shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(arr) {
  // move from the front to back of the arr, picking a random index
  // infront of the current number and swapping with the current number

  for (let i = 0; i < arr.length; i++) {
    // get random index from i to the end
    let randomIdx = getRandom(i, arr.length);

    // swap with the current number
    let temp = arr[randomIdx];
    arr[randomIdx] = arr[i];
    arr[i] = temp;
  }
}