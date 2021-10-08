/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	if (nums.length < 3) return [];
	result = [];

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		let left = i + 1,
			right = nums.length - 1,
			sum = 0;

		while (left < right) {
			sum = nums[i] + nums[left] + nums[right];

			if (sum == 0) {
				result.push([nums[i], nums[left], nums[right]]);

				while (nums[left] == nums[left + 1]) left++;
				while (nums[right] == nums[right - 1]) right--;

				left++;
				right--;
			} else if (sum > 0) right--;
			else left++;
		}

		while (nums[i] == nums[i + 1]) i++;
	}

	return result;
};

//! NEED REVIEW

// @lc code=end
