

function leftPad (str, length, ch) {
  if (str.length > length) return str
  const len = length - str.length + 1
  return new Array(len).join(ch) + str
}


const str = 'hello'
console.log(leftPad(str, 6, '-'))

console.log(str.padStart(6, '-'))
