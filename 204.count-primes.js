/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    let mapArray = new Array(n).fill(-1);

    // Prime number start from 2  &  Check until sqrt(n) is enough
    for (let i = 2; i <= Math.sqrt(n); i++) {
        
        if (mapArray[i] == -1) {
            
            // i is a prime => none prime numbers start from i^2 until n
            for (let j = i * i; j < n; j += i) {
                
                mapArray[j] = 1;
            }
        }
    }
    
    let count = 0;
    
    // Prime number start from 2
    for (let i = 2; i < n; i++) {

        if (mapArray[i] == -1) {

            count++;
        }
    }

    return count;
};

//! NEED REVIEW


// @lc code=end

