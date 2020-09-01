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

function swipeWord(input, beginIdx, endIdx) {
	let bi = beginIdx;
	let ei = endIdx;

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

	const inputLength = input.length - 1;

	if (input[1] === " " && input[5] === " ") {
		swipeWord(input, 2, 4);
		swipeWord(input, 6, 7);

		return input;
	} else if (input[1] === " ") {
		swipeWord(input, 2, inputLength);

		return input;
	} else {
		swipeWord(input, 0, inputLength);
	}

	return input;
}

module.exports = { solution };
