/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //双指针方式解决
  const dummy = new ListNode()
  //指向头节点
  dummy.next = head
  let fast = dummy
  let slow = dummy
  //fast先走n步
  while (n !== 0) {
    fast = fast.next
    n--
  }
  //fast没走到头的时候继续遍历
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  //删除节点
  slow.next = slow.next.next
  return dummy.next
};
// @lc code=end

