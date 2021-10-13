/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let left = 0, right = nums.length - 1, idx = 0;

    while (left <= right) {

        if (nums[left] == 0) {
            let temp = nums[idx];
            nums[idx++] = 0;
            nums[left++] = temp;
        }

        else if (nums[left] == 2) {
            let temp = nums[right];
            nums[right--] = 2;
            nums[left] = temp;
        }

        else left++;
    }

    return nums;
};
// @lc code=end

