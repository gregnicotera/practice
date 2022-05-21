function oddOrEven(array) {
  if(array && array.length > 0){
    return array.reduce((a,b) => a + b, 0) % 2 === 0 ? "even" : "odd"
  }
  return "even"
}