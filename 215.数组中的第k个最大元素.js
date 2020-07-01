/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  //调用sort API进行排序
  // nums = nums.sort((a, b) => b - a)
  // return nums[k - 1]

  //小顶堆解决问题

  //初始化堆
  const heap = []
  //堆数组里，最后一个元素的索引
  let n = 0
  //nums长度
  const len = nums.length

  //初始化堆方法
  function createHeap() {
    for (let i = 0; i < k; i++) {
      insert(nums[i])
    }
  }

  //用[k,n-1]区间元素更新堆
  function updateHeap() {
    for (let i = k; i < len; i++) {
      //比堆顶元素大的数才能进
      if (nums[i] > heap[0]) {
        //用较大的数替换堆顶的数
        heap[0] = nums[i]
        downHeap(0, k)
      }
    }
  }

  //向下对比交换
  function downHeap(low, high) {
    let i = low, j = i * 2 + 1
    //遍历
    while (j <= high) {
      //如果右孩子比做孩子小，则用右孩子和根节点比较
      if (j + 1 <= high && heap[j + 1] < heap[j]) {
        j = j + 1
      }
      //当前节点比孩子节点大，交换两者位置
      if (heap[i] > heap[j]) {
        //交换位置
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp

        //更新索引
        i = j
        j = j * 2 + 1
      } else {
        break
      }
    }
  }

  function upHeap(low, high) {
    let i = high
    let j = Math.floor((i - 1) / 2)

    //循环
    while (j >= low) {
      if (heap[j] > heap[i]) {
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp
        i = j
        j = Math.floor((i - 1) / 2)

      } else {
        break
      }
    }
  }

  function insert(x) {
    heap[n] = x
    upHeap(0, n)
    n++
  }
  createHeap()
  updateHeap()
  return heap[0]

};




// @lc code=end

