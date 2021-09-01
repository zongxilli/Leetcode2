/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort(function(a, b) {
        return b[1] - a[1]
    });

    result = 0;
    for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
        
        if (truckSize > boxTypes[i][0]) {

            result += boxTypes[i][0] * boxTypes[i][1];
            truckSize -= boxTypes[i][0];
        }

        else {

            result += truckSize * boxTypes[i][1];
            return result;
        }
    }

    return result;
};
// @lc code=end

