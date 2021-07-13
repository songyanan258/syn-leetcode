/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head == null || head.next == null) return head
  //!额外空间方法
  // let newArr = newChain = new ListNode(0)
  // let prevArr = prev = new ListNode(0, head)
  // while (head) {
  //   if (head.val < x) {
  //     newChain.next = head
  //     prev.next = head.next
  //     newChain = newChain.next
  //   } else {
  //     prev = prev.next
  //   }
  //   head = head.next
  // }
  // newChain.next = prevArr.next
  // return newArr.next

  //!哨兵节点+双指针方法

  let sentry = prev = cur = new ListNode(null, head)
  while (head) {
    if (head.val < x) {
      //如果前置节点也小于标志
      if (prev == sentry || prev.val < x) {
        head = head.next
        prev = prev.next
        cur = cur.next
      } else {
        [cur.next, head.next, prev.next, head] = [head, cur.next, head.next, head.next]
        cur = cur.next
      }
    } else {
      prev = prev.next
      head = head.next
    }
  }
  return sentry.next
};

// @lc code=end

