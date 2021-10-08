/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let set = new Set();
    let count = 0;

    for (let char of s) {

        if (set.has(char)) {
            count += 2;
            set.delete(char);
        }

        else set.add(char);
    }

    return set.size == 0 ? count : count + 1;
};
// @lc code=end

