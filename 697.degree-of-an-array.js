/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    let map = new Map();
    let maxFreq = 1;
    let maxFreqNum = nums[0];

    for (let i = 0; i < nums.length; i++) {

        let curr = nums[i];

        if (!map.has(curr)) map.set(curr, { firstIdx: i, degree: 1, freq: 1 });

        else map.set(curr, { firstIdx: map.get(curr).firstIdx, degree: i - map.get(curr).firstIdx + 1, freq: map.get(curr).freq + 1 });


        let currFreq = map.get(curr).freq;

        if (maxFreq < currFreq) {
            
            maxFreq = currFreq
            maxFreqNum = curr;
        }

        else if (maxFreq == currFreq && map.get(maxFreqNum).degree > map.get(curr).degree ) maxFreqNum = curr;
    }

    return map.get(maxFreqNum).degree;
};
// @lc code=end
