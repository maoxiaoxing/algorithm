
function addLargeNumber (num1, num2) {
  let res = ''
  const arr1 = num1.split('')
  const arr2 = num2.split('')

  let flag = 0
  while (arr1.length || arr2.length || flag) {
    flag = ~~arr1.pop() + ~~arr2.pop() + flag
    res = flag%10 + res
    flag = flag > 9
  }
  return res
}

// console.log(addLargeNumber('9', '9'))
console.log(addLargeNumber('19', '29'))
