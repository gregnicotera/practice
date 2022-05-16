function expandedForm(num) {
  const length = String(num).length
  return String(num).split('')
    .map((e,i) => e + '0'
    .repeat(length - i - 1))
    .filter(e => !e.match(/^0+/))
    .join(' + ')
}