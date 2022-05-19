/**
 * @param {number} n
 * @return {number}
 */

// 动态规划
// var fib = function(n) {
//   const dp = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i-1] + dp[i-2]
//   }
//   return dp[n]
// };


// // 尾递归
// var fib = function(n) {
//   const dfs = (_n) => {
//       if (_n === 0) return 0
//       if (_n === 1) return 1
//       return dfs(_n - 1) + dfs(_n - 2)
//   }
//   return dfs(n)
// };


var fib = function(n) {
  // 递归缓存
  const helper = (memo, n) => {
      if(n<2) return n
      if (memo[n]) return memo[n]
      memo[n] = helper(memo, n-1) + helper(memo, n-2)
      return memo[n]
  }
  const memo = []
  return helper(memo, n)
};

