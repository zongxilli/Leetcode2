/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let sum = (1 + nums.length) * nums.length / 2;
    for (let num of nums) {

        sum -= num;
    }

    return sum;
};
// @lc code=end

