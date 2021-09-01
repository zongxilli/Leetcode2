/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    nums.sort(function(a, b) {
        return a - b; 
    });

    return Math.max(nums[nums.length - 1] * nums[0] * nums[1], 
                    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
};
// @lc code=end

