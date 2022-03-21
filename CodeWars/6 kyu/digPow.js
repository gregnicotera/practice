function digPow(n, p){
  //first calculate summation
  const retVal = n.toString().split('').reduce((a, b, i) => a + b ** (p + i),0)
  //check if summation is divisible by number given, return -1 if not
  return retVal % n === 0 ? retVal / n : -1
}