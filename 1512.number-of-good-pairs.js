/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    let map = new Map();
    let result = 0;

    for (let num of nums) {

        if (map.has(num)) {

            result += map.get(num);
            map.set(num, map.get(num) + 1);
        }

        else map.set(num, 1);
    }

    return result;
};
// @lc code=end

