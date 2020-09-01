function isArray(prevInput) {
	return Array.isArray(prevInput);
}

function isEqualOrShorterThan1Array(prevInput) {
	const ia = isArray(prevInput);

	const isLong = ia && prevInput.length > 1;

	return !isLong;
}

function swipe(input, firstIdx, secondIdx) {
	const firstValue = input[firstIdx];
	const secondValue = input[secondIdx];

	input[firstIdx] = secondValue;
	input[secondIdx] = firstValue;
}

function swipeWord(input) {
	const inputLength = input.length;

	let beginIdx = 0;
	let endIdx = inputLength - 1;

	while (beginIdx <= endIdx) {
		swipe(input, beginIdx, endIdx);
		beginIdx += 1;
		endIdx -= 1;
	}
}

function solution(prevInput) {
	if (isEqualOrShorterThan1Array(prevInput)) {
		return prevInput;
	}

	let input  = [...prevInput];

	swipeWord(input);

	return input;
}

module.exports = { solution };
