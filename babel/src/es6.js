let a = [...new Set([1, 2, 3, 4])]
console.log(a)

function deepCopy (obj) {
  return Object.assign({}, obj)
}
