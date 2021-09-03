/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    // let prev = null;

    // while (head) {

    //     let next = head.next;
    //     head.next = prev;
    //     prev = head;
    //     head = next;
        
    // }

    // return prev;

    if (!head || !head.next) {

        return head;
    }

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;

};

// ! NEED REVIEW

// @lc code=end

