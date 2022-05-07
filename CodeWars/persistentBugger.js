function persistentBugger(num){
	return `${num}`.length > 0
		? 1 + persistentBugger(`${num}`.split('').reduce((acc, curr) => acc * curr)))
		: 0;
}