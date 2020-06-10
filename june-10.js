// Search Insert Position
/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

*/

var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length;
    
    while (i <= j) {
        const middle = Math.floor((i + j) / 2);
        
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            i += 1;
        } else {
            j -= 1;
        }
    }
    
    return i;
};