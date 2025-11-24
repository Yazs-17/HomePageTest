/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 * @returns 
 */
function debounce (func, delay) {
	let timeoutId;
	return function (...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay)
	};
}

function onInput () {
	console.log('Input event trggered:', Date.now());
}

const debouceOnInput = debounce(onInput, 1000);
setInterval(debouceOnInput, 200);