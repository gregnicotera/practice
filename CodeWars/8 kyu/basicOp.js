function basicOp(operation, value1, value2){
  let OPS = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  }
  return OPS[operation]
}