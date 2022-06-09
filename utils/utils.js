
export const getType = (val) => {
  const type = Object.prototype.toString.call(val)
  return type.toLowerCase().slice(8, type.length - 1)
}

