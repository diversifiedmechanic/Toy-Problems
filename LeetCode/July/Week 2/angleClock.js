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
  let hourHand = (hour * 30) + (minutes * .5);
  let minuteHand = minutes * 6;

  return Math.abs(hourHand - minuteHand);
};