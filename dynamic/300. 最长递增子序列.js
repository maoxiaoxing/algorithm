/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
  /*
    动态规划
    定义 dp 数组，设置初始值为1
    遍历 nums 数组
    并且遍历 i 之前的数组 ，如果 nums[i] > nums[j] 说明有递增数值
    那么 dp[i] 的值 就是 当前的 dp[i] 和 j 的值+1 进行比较，取最大值
  */
  const len = nums.length
  if (!len) return 0
  const dp = new Array(len).fill(1)
  for (let i = 0; i < len;i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j]+1)
          }
      }
  }
  return Math.max(...dp)
}



