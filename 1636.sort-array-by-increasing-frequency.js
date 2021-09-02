/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    let map = new Map();

    for (let num of nums) {

        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }

    nums.sort(function(a, b) {

        if (map.get(a) != map.get(b)) return map.get(a) - map.get(b)
        else return b - a;
    })

    return nums;
};
// @lc code=end

