function tribonacci(signature,n){
  let tribArr = [...signature];
  if(n === 0){
    return []
  }else
  if(n < 4){
    return tribArr.slice(0, n)
  }
  for(let i = 4; i <= n ;i++){
    tribArr.push(+tribArr[i - 2] + +tribArr[i - 3] + +tribArr[i - 4])
  }
  return tribArr
}