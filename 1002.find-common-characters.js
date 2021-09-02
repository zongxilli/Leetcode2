/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let result = words[0].split('');

    for (let i = 1; i < words.length; i++) {

        let temp = [...result];
        for (let char of words[i]) {
            
            if (temp.indexOf(char) > -1) {
                
                temp[temp.indexOf(char)] = 'found';
            }
        }
        
        for (let i = 0; i < temp.length; i++) {
            
            if (temp[i] != 'found') result[i] = 'delete';
        }
    }

    return result.filter(char => char != 'delete');
};

// @lc code=end

