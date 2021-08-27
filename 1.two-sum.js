/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let dic = {};

	for (var i = 0; i < nums.length; i++) {
		if (dic[nums[i]] !== undefined) {
			return [dic[nums[i]], i];
		} else {
			dic[target - nums[i]] = i;
		}
	}
};
// @lc code=end
