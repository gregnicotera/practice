// Return an array
function fizzbuzz(n)
{
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i % 5 == 0 && i % 3 == 0 ? "FizzBuzz" :
             i % 5 == 0 ? "Buzz" : 
             i % 3 == 0 ? "Fizz" : 
             i
          )
  }
  return arr
}
