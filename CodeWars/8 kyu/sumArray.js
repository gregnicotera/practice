function sumArray(array) {
  if(array && array.length > 1) {
    return array.sort((a,b) => a - b).slice(1, -1)
             .reduce((a,b) => a + b, 0)
  }
  return 0
}