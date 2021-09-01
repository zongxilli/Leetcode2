/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if (flowerbed.length == 1) {

        if (n == 0) return true;

        if (n == 1) return flowerbed[0] == 0;

        if (n > 1) return false;
    }
    
    for (let i = 0; i < flowerbed.length; i++) {

        if (flowerbed[i] == 0) {

            if (canBePlaceFlower(flowerbed, i)) {

                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n <= 0;
};

let canBePlaceFlower = (flowerbed, index) => {

    if (index == 0) {

        return flowerbed[index + 1] == 0;
    }

    else if (index == flowerbed.length - 1) {

        return  flowerbed[index - 1] == 0; 
    }

    else {

        return flowerbed[index - 1] == 0 && flowerbed[index + 1] == 0;
    }
}

// @lc code=end

