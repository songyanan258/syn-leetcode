/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  /**
   * 解法：
   * 1.记录待翻转部分链表的头尾指向
   * 2. 翻转链表
   */

  let preLeft = new ListNode(-1), index = 1
  preLeft.next = head
  let inventNode = preLeft
  //拿到left
  while (index < left) {
    index++
    preLeft = preLeft.next
  }
  //拿到rightNode
  let rightNode = preLeft.next, endIndex = 0
  while (endIndex < right - left) {

    const next = rightNode.next
    rightNode.next = next.next
    next.next = preLeft.next
    preLeft.next = next
    endIndex++
  }

  return inventNode.next
};
// @lc code=end

