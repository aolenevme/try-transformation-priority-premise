function isArray(prevInput) {
	return Array.isArray(prevInput);
}

function isEqualOrShorterThan1Array(prevInput) {
	const ia = isArray(prevInput);

	const isLong = ia && prevInput.length > 1;

	return !isLong;
}

function solution(prevInput) {
	if (isEqualOrShorterThan1Array(prevInput)) {
		return prevInput;
	}

	let input  = [...prevInput];

	const lChar = input[2];
	const llChar = input[1];
	const lllChar = input[0];

	input[2] = lllChar;
	input[1] = llChar;
	input[0] = lChar;

	input = [input[0] && input[0], input[1], input[2]];

	return input;
}

module.exports = { solution };
