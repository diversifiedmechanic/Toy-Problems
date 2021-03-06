/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false



Constraints:

    2 <= coordinates.length <= 1000
    coordinates[i].length == 2
    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
    coordinates contains no duplicate point.
*/

/*
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  // find slope of the first two coordinates
  let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);

  // iterate through the coordinates, starting at idx 2
  for (let i = 2; i < coordinates.length; i++) {
    // if the slope between the current idx and the previous idx !== first slope
    if ((coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] - coordinates[i-1][0]) !== slope) {
      // return false
      return false;
    }
  }

  // return true
  return true;
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // returns true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // returns false
console.log(checkStraightLine([[1,1],[1,2],[1,4],[1,5],[1,6],[1,7]])); // returns true
console.log(checkStraightLine([[1,1],[1,2],[1,4],[1,5],[1,6],[2,7]])); // returns false
