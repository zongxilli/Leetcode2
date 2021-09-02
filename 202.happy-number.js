/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let set = new Set();

    while (n != 1 && !set.has(n)) {

        set.add(n)
        n = getNext(n);
    }

    return n == 1;

};

let getNext = (n) => {

    let nextNum = 0;

    while (n > 0) {

        let temp = n % 10;
        nextNum += Math.pow(temp, 2);
        n = (n - temp) / 10;
    }

    return nextNum;
}

//! NEED REVIEW
// @lc code=end

