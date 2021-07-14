/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  //找到中间节点
  let middle = getMiddle(head)
  //切割成两个子链表
  let head1 = head
  let head2 = middle.next
  middle.next = null
  //反转第二个链表
  let revertHead = revertList(head2)
  let res = newHead = new ListNode(0, null)
  //合并链表
  while (revertHead) {
    let m = head1
    let n = revertHead
    head1 = head1.next
    revertHead = revertHead.next
    res.next = m
    m.next = n
    res = n
  }
  head1 && (res.next = head1)
};

var getMiddle = function (head) {
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

var revertList = function (head) {
  //创建哨兵节点
  let pre = null
  let cur = head

  while (cur !== null) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return pre

}
// @lc code=end

