/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let minPrice = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else {
			let currProfit = prices[i] - minPrice;

			if (currProfit > maxProfit) {
				maxProfit = currProfit;
			}
		}
	}

	return maxProfit;
};
// @lc code=end
