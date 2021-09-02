/*
 * @lc app=leetcode id=690 lang=javascript
 *
 * [690] Employee Importance
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    
    let map = new Map();

    for (let i of employees) {

        map.set(i.id, { ip: i.importance, sub: i.subordinates });
    }

    let queue = [id];
    let result = 0;

    while (queue.length > 0) {

        result += map.get(queue[0]).ip;
        
        for (let i of map.get(queue[0]).sub) {

            queue.push(i);
        }

        queue.shift();
    }

    return result;
};

//! NEED REVIEW

// @lc code=end

