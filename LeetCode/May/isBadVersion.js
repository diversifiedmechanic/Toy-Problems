/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
*/

/*
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /*
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // track the left idx
    // track the right idx
    // define current val
    // tuple of last known good and last known bad

    // while the there is a value between right and left
      // set the current value as the middle of right and left

      // if the current value is bad
        // pull right idx to current idx
        // set last known bad to current idx

      // otherwise
        // set the current left idx to current idx
        // set the last known good to current idx

      // if last known good and last known bad are one index away
        // return the value at the last known bad idx

    // return null

  };
};