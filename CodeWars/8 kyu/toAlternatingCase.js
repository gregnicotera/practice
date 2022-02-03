String.prototype.toAlternatingCase = function () {
  return this.split``.map(e =>  /[a-z]/g.test(e) ? String.fromCharCode(e.charCodeAt() - 32) :
                                /[A-Z]/g.test(e) ? String.fromCharCode(e.charCodeAt() + 32)
                     : e).join``
}