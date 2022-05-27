const binaryArrayToNumber = arr => {
  return arr.reduce((a,b,i) => a + (b * 2 ** (arr.length - 1 - i)),0)
};