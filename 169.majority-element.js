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

    let map = new Map();

    for (let num of nums) {

        if (map.has(num)) {

            if (map.get(num) + 1 >= nums.length / 2) return num;

            else map.set(num, map.get(num) + 1);

        }
        
        else map.set(num, 1);
    }

};

// @lc code=end

