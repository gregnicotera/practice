function stray(numbers) {
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i - 1] === numbers[i]){
      return +numbers.filter( n => n !== numbers[i]).join``
    }
  }
}