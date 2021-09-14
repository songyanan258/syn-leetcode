var preorderTraversal = function (root) {
  let ans = []
  preorder(root, ans)
  return ans
}

const preorder = function (root, ans) {
  if (!root) return
  ans.push(root.val)
  preorder(root.left, ans)
  preorder(root.right, ans)
  return
}