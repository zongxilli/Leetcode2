/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    if (nums.length <= 2) return nums[0];

    let map = {};

    for (let num of nums) {

        if (!map[num]) {

            map[num] = 1;
        }

        else if (++map[num] >= nums.length/2) {

            return num;
        }
        
    }
    
};
// @lc code=end

