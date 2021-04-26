/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  //广度优先搜索
  //存储当前层级数据
  let arr = [root]
  while (arr.length) {
    //存储下一层级节点
    let newArr = []
    let n = arr.length
    for (let i = 0; i < n; i++) {
      //处理当前层级
      if (arr[i + 1]) {
        arr[i].next = arr[i + 1]
      } else {
        arr[i].next = null
      }
      //下一层级压入数组
      if (arr[i].left) newArr.push(arr[i].left);
      if (arr[i].right) newArr.push(arr[i].right)
    }
    //赋值
    arr = newArr
  }

  return root

};
// @lc code=end

