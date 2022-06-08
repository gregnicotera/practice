/*params  input string with multi lines split by '\n'
          markers array of strings used to strip
  return  string multi-lined and stripped
  
  example 
  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  result should == "apples, pears\ngrapes\nbananas"

  pseudocode
  -split by '\n'
  -for each line:
    -find index with marker
    -slice after marker index
  -join by '\n'
*/
function solution(input, markers) {
  let arr = input.split('\n')
  let mAt = -1
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < markers.length; j++){
      mAt = arr[i].indexOf(markers[j])
      if(mAt !== -1){
        break;
      }
    }
    if(mAt !== -1){
      arr[i] = arr[i].slice(0, mAt - 1).trim()
    }
  }
  return arr.join('\n')
};