/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
   /*
    /a/./b/../../c/

    定义存放路径的栈
    如果为 路径就放入栈中
    如果为 .. 就从栈中取出一个路径，相当于退回到上一个目录
   */
  const stack = []
  const paths = path.split('/')
  paths.forEach((item) => {
      if (item === '..') {
          stack.pop()
      } else if (item && item !== '.') {
          stack.push(item)
      }
  })
  return `/${stack.join('/')}`
};