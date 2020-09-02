function isArray(input) {
	return Array.isArray(input);
}

function isEqualOrShorterThan1Array(input) {
	const ia = isArray(input);

	const isLong = ia && input.length > 1;

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

function hasWhitespaces(input) {
	let idx = 0;
	let hw = false;

	while (idx < input.length) {
		if (input[idx] === " ") {
			hw = true;
			break;
		}

		idx += 1;
	}

	return hw;
}

function getEndWordIdx(curIdx, curChar, inputLength) {

	if (curChar === " " && curIdx === inputLength - 1) {
		return curIdx - 1;
	}

	if (curIdx === 0 || curIdx === inputLength - 1) {
		return curIdx;
	}

	return curIdx - 1;
}

function swipeSentence(input) {
	const inputLength = input.length;

	let prevIdx = -1;
	
	for (let curIdx = 0; curIdx < inputLength; curIdx++) {
		const curChar = input[curIdx];

		if (curChar === " " || curIdx === inputLength - 1) {
			const beginWordIdx = prevIdx + 1;
			const endWordIdx = getEndWordIdx(curIdx, curChar, inputLength);

			swipeWord(input, beginWordIdx, endWordIdx);

			prevIdx = curIdx;
		}
	}
}

function solution(input) {
	if (isEqualOrShorterThan1Array(input)) {
		return input;
	}

	const inputLength = input.length - 1;

	if (!hasWhitespaces(input)) {
		swipeWord(input, 0, inputLength);
	} else {
		swipeSentence(input);
	}

	return input;
}

module.exports = { solution };
