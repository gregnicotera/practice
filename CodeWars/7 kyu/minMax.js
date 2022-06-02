function minMax(arr){
  arr = arr.sort((a,b) => a - b)
  return [arr[0],arr[arr.length - 1]]; // fix me!
}