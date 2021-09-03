/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let result = new ListNode();
    let temp = result;

    while (l1 && l2) {

        if (l1.val > l2.val) {

            temp.next = new ListNode(l2.val);
            temp = temp.next;
            l2 = l2.next;
        }
        
        else {
            
            temp.next = new ListNode(l1.val);
            temp = temp.next;
            l1 = l1.next;
        }
    }
    
    temp.next = l1 == null ? l2 : l1;

    return result.next;
};
// @lc code=end

