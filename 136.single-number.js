/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result = 0;

    for (let num of nums) {

        result ^= num;
    }

    return result;

};

//! N ^ 0 = N    &    N ^ N = 0

// @lc code=end

