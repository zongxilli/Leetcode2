/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {

        nums[i] = nums[i] * nums[i];
    }

    nums.sort(function(a, b) {return a - b});

    return nums;

};
// @lc code=end

