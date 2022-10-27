/*
given a string, alpha numeric
return an object with entries char: count

examples:
'aba' -> {a: 2, b:1}
'Greg went to the store'-> {'e': 4, 'g': 2, 'h': 1, 'n': 1, 'o': 2, 'r': 2, 's': 1, 't': 4, 'w': 1, ' ': 4}
'' -> {}


*/

  
  //string to array
  
  //sort string alphabetically
  
  //loop thougth each value of the string array and 
    //not final element, next ele is same
      //if one before final element, add count to obj and return obj
    //not final ele, next ele is different -> add to obj, dont return
    //final ele bvut different than the ele before
  

function count (string) {  
   return string.split(``).sort().reduce((obj, char) => {
      if(obj.hasOwnProperty(char)){
        obj[char] = obj[char] + 1 
      }else{
        obj[char] = 1 
      }
     return obj
   },{});
}

console.log(
  count('A') + " should equal {A: 1}"
)
console.log(
  count('AA') + " should equal {A: 2}"
)

console.log(
  count('aba') + " should equal {a: 2, b: 1}"
)
console.log(
  count('Greg went to the store') + " should equal {'G': 1, e': 4, 'g': 1, 'h': 1, 'n': 1, 'o': 2, 'r': 2, 's': 1, 't': 4, 'w': 1, ' ': 4}"
)
console.log(
  count('') + " should equal " + {}
) 