/*

examples: 
n=2,k=2 => 3*2/2
*/
function pascalsTriangle(n) {
  let arr = [];
  let idx = 0;
  
  for(let row = 0; row < n; row++){
    idx = arr.length - row;
    for(let pos = 0; pos < row + 1; pos++){
      if(pos === 0 || pos === row){
        arr.push(1);
      }else{
        arr.push(arr[idx + pos] + arr[idx + pos - 1]);
      }
    }
  }
  return arr;
}
