/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let obj = {}
  //记录中序遍历中的节点位置
  for (let i = 0; i < inorder.length; i++) {
    obj[inorder[i]] = i
  }

  const dfs = function (inorder, l1, r1, postorder, l2, r2) {
    if (l2 == r2 + 1) return null
    let val = postorder[r2]
    let root = { val }
    let index = obj[val]
    //调整指针，递归处理子树
    root.left = dfs(inorder, l1, index - 1, postorder, l2, r2 - r1 + index - 1)
    root.right = dfs(inorder, index + 1, r1, postorder, r2 - r1 + index, r2 - 1)
    return root
  }

  return dfs(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)

};
// @lc code=end

