/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	
	let idx = 0;

	for (let i = m; i < m + n; i++) {

		nums1[i] = nums2[idx++];
	}

	nums1.sort(function(a, b) {return a - b});
};

// @lc code=end
