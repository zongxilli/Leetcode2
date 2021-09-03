/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let num = [];
    while (head) {

        num.push(head.val);

        head = head.next;
    }

    let result = 0;
    let idx = 0;
    for (let i = num.length - 1; i >= 0; i--) {

        result += Math.pow(2, idx) * num[i];
        idx++; 
    }

    return result;

};
// @lc code=end

