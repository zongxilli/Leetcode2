/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let result = [];
    let tempArray;

    for (let i = 0; i < numRows; i++) {

        tempArray = new Array(i + 1).fill(1);

        if (i > 1) {

            for (let j = 1; j < i; j++) {

                tempArray[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }


        result.push(tempArray);

    }

    return result;
};
// @lc code=end

