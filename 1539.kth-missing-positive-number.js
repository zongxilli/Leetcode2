/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    for (let i = 0; ; i++) {

        if (!arr.includes(i)) {

            if (k == 0) return i;
            k--;
        }
    }
};
// @lc code=end
