/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let p1 = 0;
	let p2 = s.length - 1;

	while (p1 < p2) {
		let temp = s[p1];
		s[p1] = s[p2];
		s[p2] = temp;
		p1 += 1;
		p2 -= 1;
	}

	return s;
};
// @lc code=end
