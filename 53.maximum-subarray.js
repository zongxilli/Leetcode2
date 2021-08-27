/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let max = -Infinity;
	let currMax = 0;

	for (let i of nums) {
		currMax = Math.max(currMax + i, i);

		max = Math.max(max, currMax);
	}

	return max;
};
// @lc code=end
