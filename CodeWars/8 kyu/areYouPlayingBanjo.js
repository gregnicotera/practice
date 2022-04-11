function areYouPlayingBanjo(name) {
  const player = /^r/gi.test(name)
  const text = player ? " plays banjo" : " does not play banjo"
  return `${name}${text}`;
}