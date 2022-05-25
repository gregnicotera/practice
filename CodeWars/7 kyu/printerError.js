function printerError(s) {
  const errors = s.split('').filter(e => e.match(/[n-z]+/)).length
  return `${errors}/${s.length}`
}