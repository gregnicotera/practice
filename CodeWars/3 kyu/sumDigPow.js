function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    if(i == String(i).split('').reduce((init,curr,i) => init + Math.pow(curr, i + 1), 0)){
      arr.push(i)
    }
  }
  return arr
}
