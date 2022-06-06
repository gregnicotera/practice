function upArray(arr){
  if(arr && arr.length > 1 && !arr.some(val => val < 0 || val > 9)){
    let ret = BigInt(arr.join('')) + 1n
    return ret.toString().split('').map(str => Number(str))
  }
  return null
}