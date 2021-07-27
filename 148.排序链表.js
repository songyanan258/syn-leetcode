/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  //! 转换为数组处理排序链表
  //处理边缘条件
  if (head == null || head.next == null) return head
  //获得数组
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  //排列数组
  let newArr = arr.sort((a, b) => a - b)
  let res = head = new ListNode(null)
  let num = 0
  while (num < newArr.length) {
    head.val = newArr[num]
    num++
    if (num !== newArr.length) {
      head.next = new ListNode(null)
      head = head.next
    }

  }
  return res

};
// @lc code=end

