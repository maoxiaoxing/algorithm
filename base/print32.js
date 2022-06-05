
function print(num) {
  let res = ''
  for (let i = 31; i >= 0; i--) {
    res += (num & (1 << i)) === 0 ? '0' : '1'
  }
  console.log(res)
}
// print(4)
// print(-1)
print(Number.MAX_SAFE_INTEGER)
print(-2)
console.log(~-2)
