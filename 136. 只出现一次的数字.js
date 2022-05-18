/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  /*
    相同的数字 使用 ^ 运算符，结果为 0
    最后剩下的数字就为 单独的数字
  */
  let res = 0
  nums.forEach((num) => {
      res ^= num
  })
  return res
};