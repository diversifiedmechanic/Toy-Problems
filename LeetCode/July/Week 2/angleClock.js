/*
Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

Example 1:
Input: hour = 12, minutes = 30
Output: 165

Example 2:
Input: hour = 3, minutes = 30
Output: 75

Example 3:
Input: hour = 3, minutes = 15
Output: 7.5

Example 4:
Input: hour = 4, minutes = 50
Output: 155

Example 5:
Input: hour = 12, minutes = 0
Output: 0
*/

/*
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

var angleClock = function(hour, minutes) {
  hour = hour === 12 ? 0 : hour;

  let hourHand = (hour * 30) + (minutes * .5);
  let minuteHand = minutes * 6;

  let angle = Math.abs(hourHand - minuteHand);

  return angle > 180 ? 360 - angle : angle;
};

/////////////// TESTS /////////////
console.log(angleClock(12, 30) === 165);

console.log(angleClock(3, 30) === 75);

console.log(angleClock(3, 15) === 7.5);

console.log(angleClock(4, 50) === 155);

console.log(angleClock(12, 0) === 0);

console.log(angleClock(1, 57) === 76.5);