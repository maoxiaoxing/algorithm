
function print(num) {
  let res = ''
  for (let i = 31; i >= 0; i--) {
    res += (num & (1 << i)) === 0 ? '0' : '1'
  }
  console.log(res)
}
// print(4)
// print(-1)
// print(Number.MAX_SAFE_INTEGER)
// print(-2)
// console.log(~-2)

const a = 123
const b = 456
print(a)
print(b)
console.log('=======')
// | 有真（1）则真
print(a|b)
// & 全真（1）则真
print(a&b)
// 相同为假，不同为真
print(a^b)
