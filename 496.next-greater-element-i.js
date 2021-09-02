/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let result = [];
    for (let i = 0; i < nums1.length; i++) {

        result.push(getNextGreaterElement(nums2, nums2.indexOf(nums1[i])));
    }

    return result;
};

let getNextGreaterElement = (array, index) => {

    for (let i = index + 1; i < array.length; i++) {

        if (array[i] > array[index]) return array[i];
    }

    return -1;
}
// @lc code=end

