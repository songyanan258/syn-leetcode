/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  //得到右子树节点数量
  //!!注意，是第K大，不是第K小
  let count = countNodes(root.right)

  if (k <= count) {
    return kthLargest(root.right, k)
  } else if (k > count + 1) {
    return kthLargest(root.left, k - count - 1)
  }
  return root.val
};

//获取节点数量
const countNodes = function (root) {
  if (!root) return 0

  return countNodes(root.left) + countNodes(root.right) + 1
}