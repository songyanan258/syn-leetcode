/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  //递归解决 
  if (head == null || head.next == null) return head
  let next = head.next
  //递归调用
  head.next = swapPairs(next.next)
  //交换节点
  next.next = head
  return next
};
// @lc code=end