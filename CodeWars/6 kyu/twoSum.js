function twoSum(numbers, target) {
  let indexArr = [];
  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i + 1; j < numbers.length + 1; j++){
      if(numbers[i] + numbers[j] === target){
        return [i,j];
      }
    }
  }
}