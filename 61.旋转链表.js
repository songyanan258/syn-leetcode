/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null || k == 0) return head
  //先将链表转换成环
  let current = head
  let i = 1
  while (current.next) {
    i++
    current = current.next
    if (!current.next) {
      current.next = head
      current = current.next
      break;
    }
  }
  let num = k % i
  //边界条件，如果旋转后和最初相同
  if (num == 0) {
    let res = head
    for (let index = 1; index < i; index++) {
      res = res.next
    }
    res.next = null
    return head
  }
  //将环断开·
  for (let index = 1; index < (i - num); index++) {
    head = head.next
  }
  if (num == 0) return head
  let res = head.next
  head.next = null
  return res
};
// @lc code=end

