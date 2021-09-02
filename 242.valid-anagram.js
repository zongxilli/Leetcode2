/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	
    if (s.length != t.length) return false;

    let map1 = new Map();

    for (let i = 0; i < s.length; i++) {

        if (map1.has(s.charAt(i))) map1.set(s.charAt(i), map1.get(s.charAt(i)) + 1);
        else map1.set(s.charAt(i), 1);

        if (map1.has(t.charAt(i))) map1.set(t.charAt(i), map1.get(t.charAt(i)) - 1);
        else map1.set(t.charAt(i), -1);
        
    }

    for (const value of map1.values()) {

        if (value != 0) return false;
    }

    return true;

};
// @lc code=end
