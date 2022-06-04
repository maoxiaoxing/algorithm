
function print(num) {
  let res = ''
  for (let i = 31; i >= 0; i--) {
    res += (num & (1 << i)) === 0 ? '0' : '1'
  }
  console.log(res)
}
print(4)
