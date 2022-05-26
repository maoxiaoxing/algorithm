

function leftPad (str, length, ch) {
  if (str.length > length) return str
  const len = length - str.length + 1
  return new Array(len).join(ch) + str
}


function leftPad1(str, length, ch) {
  /*
    -
    --
    ----
    --------
    二分法
  */
  if (str.length > length) return str
  let len = length - str.length
  let total = ''
  while (true) {
    if (len & 1) {
      total += ch
    }
    if (len <= 1) {
      return total + str
    }
    ch += ch
    len = len >> 1
  }
}

const str = 'hello'
// console.log(leftPad(str, 6, '-'))
// console.log(leftPad1(str, 10, '-'))

// console.log(str.padStart(6, '-'))

console.time('leftPad')
for (let i = 0; i < 10000; i++) {
  leftPad(str, 100000, '-')
}
console.timeEnd('leftPad')

console.time('leftPad1')
for (let i = 0; i < 10000; i++) {
  leftPad1(str, 100000, '-')
}
console.timeEnd('leftPad1')

