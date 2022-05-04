function reverseWords(str) {
      return str.split(' ').map(w => [...w].reverse().join('')).join(' ')
}
