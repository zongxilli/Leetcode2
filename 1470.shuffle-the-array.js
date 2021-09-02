/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if (i % 2 == 0) {

            result.push(nums[i / 2]);
        }

        else {

            result.push(nums[Math.floor(i / 2) + n]);
        }

    }

    return result;
};
// @lc code=end

