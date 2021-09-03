/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];

    for (let char of s) {

        if (char == '(') stack.push(')');

        else if (char == '{') stack.push('}');

        else if (char == '[') stack.push(']');

        else if (stack.pop() != char) return false;
    }

    return stack.length == 0;
};

//! NEED REVIEW
// @lc code=end

