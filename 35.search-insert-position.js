/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] >= target) {

            return i;
        }
    }

    return nums.length;
};

// @lc code=end

