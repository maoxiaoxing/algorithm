/**
 * @param {number[]} nums
 * @return {number}
 */

// var lengthOfLIS = function(nums) {
//   /*
//     动态规划
//     定义 dp 数组，设置初始值为1
//     遍历 nums 数组
//     并且遍历 i 之前的数组 ，如果 nums[i] > nums[j] 说明有递增数值
//     那么 dp[i] 的值 就是 当前的 dp[i] 和 j 的值+1 进行比较，取最大值
//   */
//   const len = nums.length
//   if (!len) return 0
//   const dp = new Array(len).fill(1)
//   for (let i = 0; i < len;i++) {
//       for (let j = 0; j < i; j++) {
//           if (nums[i] > nums[j]) {
//               dp[i] = Math.max(dp[i], dp[j]+1)
//           }
//       }
//   }
//   return Math.max(...dp)
// }


var lengthOfLIS = function(nums) {
  /*
    贪心 + 二分法
    让序列增长尽可能慢下来
    定义结果数组 arr
    判断当前值 nums[i] 是否大于递增数组 arr 的最大值 即 最后一个值
    如果 nums[i] 比 arr 的最大值还大 就插入到最后面
    如果小 就替换最近一个比 nums[i] 还小的值
    二分查找 替换
  */
  const len = nums.length
  if (!len) return 0
  const arr = [nums[0]]
  for (let i = 0;i < len;i++) {
      if (nums[i] > arr.slice(-1)) {
          arr.push(nums[i])
      } else {
          let left = 0
          let right = arr.length-1
          while (left < right) {
              let mid = (left + right) >> 1
              if (nums[i] > arr[mid]) {
                  left++
              } else {
                  right--
              }
          }
          arr[left] = nums[i] 
      }
  }
  return arr.length
};

