/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  //处理边界条件
  if (!head) return null
  //初始化copy的头部节点
  let copyHead = new Node()
  //初始化游标节点
  let copyNode = copyHead
  //初始化hashMap
  const hashMap = new Map()
  let curr = head
  //首次循环，正常处理链表的复制
  while (curr) {
    copyNode.val = curr.val
    copyNode.next = curr.next ? new Node() : null
    hashMap.set(curr, copyNode)
    curr = curr.next
    copyNode = copyNode.next
  }
  //将游标位置复位到head
  curr = head
  copyNode = copyHead
  //循环，特殊处理random
  while (curr) {
    //处理random指向
    copyNode.random = curr.random ? hashMap.get(curr.random) : null
    copyNode = copyNode.next
    curr = curr.next

  }
  return copyHead
};
// @lc code=end

