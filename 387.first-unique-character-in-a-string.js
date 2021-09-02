/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map = new Map();

    for (let i = 0; i < s.length; i++) {

        if (map.has(s.charAt(i))) map.set(s.charAt(i), Infinity);

        else {
            map.set(s.charAt(i), i);
        }
    }

    let result = Infinity;
    for (let key of map.keys()) {

        if (map.get(key) < result) {

            result = map.get(key);
        }
    }

    if (result == Infinity) return -1;

    return result;
};
// @lc code=end

