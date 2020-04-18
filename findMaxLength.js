/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000.
*/

var findMaxLength = function(nums) {

  let maxSub = 0;


  for(let j = 0; j < nums.length; j++) {
    nums[j] === 0
    ? zcount++
    : ocount++;
    if(zcount - ocount === 0 && zcount + ocount > maxSub) maxSub = zcount + ocount;
  }

  return maxSub;
};
