/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   /*
    栈 + hash
    将括号结尾和开头一一对应
    定义一个 存放 开头括号的栈  
    遍历字符串 如果 是开头括号就放入栈中
    如果遇到结尾括号，从栈中取的元素一定和这个结尾括号是一一对应的 否则就直接返回 false
    最后遍历完，如果栈中有余下的括号 则说明没有匹配完，也直接返回false
   */
  const len = s.length
  const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
  ])
  const stack = []
  let i = 0
  let flag = true
  while (i < len) {
      if (!map.has(s[i])) {
          stack.push(s[i])
      }
      if (map.has(s[i]) && map.get(s[i]) !== stack.pop()) {
          return flag = false
      } 
      i++
  }
  if (stack.length) {
      flag = false
  }
  return flag
};
