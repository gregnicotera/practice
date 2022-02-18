var summation = function (num) {
  let itor = 1, sum = 0;
  while(itor <= num){
    sum = itor + sum
    itor++;
  }
  return sum;
}