/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let set = new Set();

    while (headA) {

        set.add(headA);
        headA = headA.next;
    }

    while (headB) {

        if (set.has(headB)) return headB;

        headB = headB.next;
    }

    return null;

};
// @lc code=end

