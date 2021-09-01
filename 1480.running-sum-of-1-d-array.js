/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let carry = nums[0];

    for (let i = 1; i < nums.length; i++) {

        let temp = nums[i];
        nums[i] += carry;
        carry += temp;
    }

    return nums;
};
// @lc code=end

