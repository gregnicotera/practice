function findEvenIndex(arr){
  for(let i = 0; i < arr.length; i++){
    const a1 = arr.slice(0, i).reduce((a,b) => a + b, 0)
    const a2 = arr.slice(i + 1).reduce((a,b) => a + b, 0)
    console.log(a1+' '+a2)
    if(a1 === a2){
      return i
    }
    if(i === arr.length - 1){
      return -1
    }
  }
}