/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let obj = {}
var buildTree = function (preorder, inorder) {
  //将中序的数据位置存储起来，省去后面多次遍历
  for (let i = 0; i < inorder.length; i++) {
    obj[inorder[i]] = i
  }
  return _buildTree(preorder, 0, preorder.length, inorder, 0, inorder.length)

};

const _buildTree = function (preorder, l1, r1, inorder, l2, r2) {
  //当做指针碰到右指针的时候，说明我们的遍历结束了
  if (l1 == r1) return null
  let val = preorder[l1]
  let root = { val }
  let pos = obj[val]
  //计算左子树的长度
  let n = pos - l2 + 1
  //根据左子树的长度调整两个前序中序的指针位置，然后递归处理
  root.left = _buildTree(preorder, l1 + 1, l1 + n, inorder, l2, pos)
  root.right = _buildTree(preorder, l1 + n, r1, inorder, l2 + n, r2)
  return root
}

// @lc code=end

