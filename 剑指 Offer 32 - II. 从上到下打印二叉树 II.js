/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root, num = 0, ans = []) {
  //num 用来记录当前的层数，层数相同的节点值放到同一个数组内
  if (!root) return []
  let data = ans[num]
  if (data == undefined) {
    data = [root.val]
    ans[num] = data
  } else {
    data.push(root.val)
    ans[num] = data
  }
  levelOrder(root.left, num + 1, ans)
  levelOrder(root.right, num + 1, ans)
  return ans
};