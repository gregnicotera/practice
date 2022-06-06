// Return an array
function fizzbuzz(n)
{
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(
				i % 15 == 0 ? "FizzBuzz" :
				i % 3 == 0 ? "Fizz" : 
				i % 5 == 0 ? "Buzz" : 
				i
			)
  }
  return arr
}
function upArray(arr){
  if(arr && arr.length > 1 && !arr.some(val => val < 0 || val > 9)){
    let ret = BigInt(arr.join('')) + 1n
    return ret.toString().split('').map(str => Number(str))
  }
  return null
}