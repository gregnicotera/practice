function getCount(str) {
  str = str.toLowerCase().match(/[aeiou]/g)
  return str ? str.length : 0;
}