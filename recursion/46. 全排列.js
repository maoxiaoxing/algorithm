/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
   /*
    回溯
    [1,2,3] 找到一个就放入结果中
   */
  const stack = []
  const res = []

  const walk = () => {
      if (stack.length === nums.length) {
          res.push([...stack])
      }
      for (let i = 0; i < nums.length; i++) {
          if (stack.includes(nums[i])) {
              continue
          }
          stack.push(nums[i])
          walk()
          stack.pop()
      }
  }
  walk()
  return res
};