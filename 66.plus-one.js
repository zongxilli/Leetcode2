/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] < 9) {

            digits[i]++;
            return digits;
        }

        else {
            digits[i] = 0;
            continue;
        }
    }

    if (digits[0] = 10) {

        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
};
// @lc code=end

