/**
 * 
 * @param {string} test 
 */
function Main (test) {
	test = test.toLowerCase();
	const words = Text.match(/\b\w+\b/g)
	const wordCnt = {};
	words.forEach(w => {
		if (wordCnt[w]) {
			wordCnt[w]++;
		} else {
			wordCnt[w] = 1;
		}
	})
	let maxCnt = 0;
	let ans = "";
	for (const word of wordCnt) {
		if (wordCnt[word] > maxCnt) {
			maxCnt = wordCnt[word];
			ans = word;
		}
	}
	return ans;
}


const a = "ad ad erd.    dadadad a.      \t.   da";
console.log(a.match(/\b\w+\b/g))
// console.
