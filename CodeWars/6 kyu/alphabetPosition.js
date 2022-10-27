function alphabetPosition(text) {
  return text.toLowerCase()
              .split('')
              .filter(e => e.match(/[a-z]/))
              .map(e => e.charCodeAt() - 96)
              .join(' ');
}