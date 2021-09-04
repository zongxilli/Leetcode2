/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    let stack = [];

    for (let char of s) {

        if (stack.length > 0 && stack[stack.length - 1] == char) {

            stack.pop();
        }

        else {

            stack.push(char);
        }
    }

    return stack.join('');
};
// @lc code=end

