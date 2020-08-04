/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  //反转方法
  function reverse(head) {
    let pre = null, cur = head, next = null
    while (cur) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }

  let dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  let start = head
  let end = head
  let next = head
  while (next) {
    for (let i = 1; i < k && end; i++) {
      end = end.next
    }
    if (!end) {
      break;
    }
    next = end.next
    end.next = null
    end = start

    start = reverse(start)
    end.next = next
    pre.next = start
    pre = end
    start = next
    end = start
  }
  return dummy.next
};
// @lc code=end

