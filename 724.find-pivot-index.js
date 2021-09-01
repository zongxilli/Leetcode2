/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let sum = 0;
    for (let num of nums) {
        
        sum += num;
    }
    
    let left = 0;
    for (let i = 0; i < nums.length; i++) {

        // [ left ... , nums[i],  ... sum - nums[i] - left ]
        if ( left         ==          sum - nums[i] - left) {

            return i;
        }

        left += nums[i];
    }

    return -1;

}

//! NEED REVIEW

// @lc code=end

