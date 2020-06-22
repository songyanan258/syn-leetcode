/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //如果只有0或者1个节点，直接返回
  if (!head || !head.next) {
    return head
  }
  //创建空节点
  let dummy = new ListNode()
  dummy.next = head
  //遍历的当前节点
  let cur = dummy
  //如果存在后续则遍历
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      //如果重复
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      //如果不重复
      cur = cur.next
    }
  }
  return dummy.next
};
// @lc code=end

