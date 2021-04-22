/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null

  let head1 = headA
  let head2 = headB

  while (head1 !== head2) {
    if (head1 !== null) {
      head1 = head1.next
    } else {
      head1 = headB
    }

    if (head2 !== null) {
      head2 = head2.next
    } else {
      head2 = headA
    }
  }
  return head1
};
// @lc code=end

