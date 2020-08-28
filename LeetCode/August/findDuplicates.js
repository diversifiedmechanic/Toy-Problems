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
        let index = Math.abs(num) - 1;

        // if it is negative, add to the results array
        if (nums[index] < 0) {
            results.push(Math.abs(num));
        } else {
            // otherwise, make the number at the index negative
            nums[index] *= -1;
        }
    });

    return results;
};

///////////////// TESTS /////////////////////
let array = [4,3,2,7,8,2,3,1];
let expected = JSON.stringify([2,3]);
let result = JSON.stringify(findDuplicates(array));
// should find multiple duplicates
console.log(expected === result);

array = [1,2,3,4,5,6,7];
expected = JSON.stringify([]);
result = JSON.stringify(findDuplicates(array));
// should not change the array if no duplicates are present
console.log(expected === result);

array = [1,1,2,2,3,3,4,4,5,5];
expected = JSON.stringify([1,2,3,4,5]);
result = JSON.stringify(findDuplicates(array));
// should return all elements if all are duplicates
console.log(expected === result);
