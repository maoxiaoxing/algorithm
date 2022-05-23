/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  /*
    排序+双指针
    先将数组进行排序，方便去除重复数字
  */
  const res = []
  if (nums.length < 3) return res
  nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
      // 去重
      if (nums[i] === nums[i-1]) {
          continue
      }
      let left = i+1
      let right = nums.length - 1
      while (left < right) {
          const target = nums[i] + nums[left] + nums[right]
          if (target === 0) {
              // 找到 target 即放入结果中
              res.push([nums[i], nums[left], nums[right]])
              // 去重
              while (nums[right] === nums[right+1]) {
                  right--
              }
              // 去重
              while (nums[left] === nums[left+1]) {
                  left++
              }
              right--
              left++
          } else if (target > 0) {
              right--
          } else if (target < 0) {
              left++
          }
      }
  }
  return res
};