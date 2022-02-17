function sortArray(array) {
  let oddArr = []
  array.forEach(e => {if( Math.abs(e % 2) === 1) oddArr.push(e)} )
  oddArr.sort((a,b) => a - b)
  array.forEach((e,i) => {if(Math.abs(e % 2) === 1) array[i] = oddArr.shift()} )
  return array
}