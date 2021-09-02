/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
	
	for (let i = 0; i < words.length - 1; i++) {
		
		if (!compare(words[i], words[i + 1], order)) {
			
			return false;
		}
	}
	
	return true;
};

function compare(a, b, order) {

	let idx = 0;

	while (idx < a.length && idx < b.length) {
		
		if (order.indexOf(a[idx]) < order.indexOf(b[idx])) {
			
			return true;
		} 
		
		else if (order.indexOf(a[idx]) > order.indexOf(b[idx])) {
			
			return false;
		}
		
		idx++;
	}

	//! 能到这里说明两个前面都一样， 那我要确保长的在后面
	if (a.length > b.length) return false;

	return true;
}

//` 两两相比

// @lc code=end
