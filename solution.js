function isArray(prevInput) {
	return Array.isArray(prevInput);
}

function isEmptyArray(prevInput) {
	const ia = isArray(prevInput);

	const hasElements = ia && Boolean(prevInput.length);

	return !hasElements;
}

function solution(prevInput) {
	if (isEmptyArray(prevInput)) {
		return prevInput;
	}

	const input  = [...prevInput];

	if (input.length <= 3) {
		return input;
	}

	const lastChar = input[4];
	const llChar = input[3];
	const lllChar = input[2];

	input[2] = lastChar;
	input[3] = llChar;
	input[4] = lllChar;

	return input;
}

module.exports = { solution };
