function wave(str) {
  return [...str].map((w, index) => str.slice(0, index) + w.toUpperCase() + str.slice(index + 1))
                .filter(i => i !== str);
}