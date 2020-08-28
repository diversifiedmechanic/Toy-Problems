/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[2,3]
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let results = [];

    nums.forEach((num) => {
        // find the index for the current number
        let index = num - 1;

        // if it is negative, add to the results array
        if (nums[index] < 0) {
            results.push(num);
        } else {
            // otherwise, make the number at the index negative
            nums[index] *= -1;
        }
    });

    return results;
};