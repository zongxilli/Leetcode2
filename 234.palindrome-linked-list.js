/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let tail = head;

    while (tail && tail.next) {

        let temp = tail.next;
        temp.prev = tail;
        tail = temp;
    }

    while (head) {

        if (head.val != tail.val) return false;

        head = head.next;
        tail = tail.prev;
    }

    return true;

};
// @lc code=end

