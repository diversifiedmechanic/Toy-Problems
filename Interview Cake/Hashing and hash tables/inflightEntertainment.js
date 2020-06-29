/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:
  Assume your users will watch exactly two movies
  Don't make your users watch the same movie twice
  Optimize for runtime over memory
*/

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let store = {};

  for (movie of movieLengths) {
    store[movie] = store[movie] + 1 || 1;
  }

  for (movie of movieLengths) {
    if (flightLength - movie === movie && store[movie] === 1) return false;
    if (store[flightLength - movie]) return true;
  }

  return false;
}

//////////////// TESTS ///////////////

// should return true when there are complimentary movie lengths
console.log(canTwoMoviesFillFlight([2, 5, 1, 6, 10], 3) === true);

// should return false if a combination cannot be found
console.log(canTwoMoviesFillFlight([2, 5, 1, 6, 10], 2) === false);

// should return true if there are two movies that are half of the flight
console.log(canTwoMoviesFillFlight([2, 5, 1, 5, 6, 10], 10) === true);

// should not allow the same movie to be used more than once
console.log(canTwoMoviesFillFlight([2, 5, 1, 6, 10], 10) === false);
