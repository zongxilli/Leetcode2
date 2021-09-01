/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != nums[idx]) {
            
            idx++;
            nums[idx] = nums[i];
        }
    }

    return ++idx;
};



//! NEED REVIEW
// Input: [1, 1, 2, 3, 3, 5]

//     i
//    idx
// => [1, 1, 2, 3, 3, 5]

//        i
//    idx
// => [1, 1, 2, 3, 3, 5]

//           i
//    idx
// => [1, 1, 2, 3, 3, 5]

//              i
//       idx
// => [1, 2, 2, 3, 3, 5]

//                 i
//          idx   
// => [1, 2, 3, 3, 3, 5]

//                    i
//          idx
// => [1, 2, 3, 3, 3, 5]

// return ++idx = 3

// @lc code=end

