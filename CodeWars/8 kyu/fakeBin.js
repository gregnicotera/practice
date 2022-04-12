function fakeBin(x){
  return x.replace(/\d/g,x => x < 5 ? '0' : '1')
}