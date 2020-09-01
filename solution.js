function isArray(prevInput) {
	return Array.isArray(prevInput);
}

function isEqualOrShorterThan3Array(prevInput) {
	const ia = isArray(prevInput);

	const isLong = ia && prevInput.length > 3;

	return !isLong;
}

function solution(prevInput) {
	if (isEqualOrShorterThan3Array(prevInput)) {
		return prevInput;
	}

	const input  = [...prevInput];

	const lastChar = input[4];
	const llChar = input[3];
	const lllChar = input[2];

	input[2] = lastChar;
	input[3] = llChar;
	input[4] = lllChar;

	return input;
}

module.exports = { solution };
