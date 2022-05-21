/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  // hash
  const map = {}
  let max = 0
  let res
  nums.forEach((item) => {
      if (!map[item]) map[item] = 0
      map[item]++
      if (map[item] > max) {
          res = item
          max = map[item]
      }
  })
  return res
};
