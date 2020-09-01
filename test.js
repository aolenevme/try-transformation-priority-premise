const assert = require("assert").strict;
const { solution } = require("./solution.js");

// Falsy cases
assert(solution(null) === null);
assert(solution(undefined) === undefined);
assert(solution(0) === 0);
assert(solution("") === "");
assert(solution("qwerty") === "qwerty");
assert(solution(false) === false);
assert(solution(true) === true);
assert.deepEqual(solution([]), []);
assert.deepEqual(solution(NaN), NaN);

// Words
assert.deepEqual(solution(["I"]), ["I"]);
assert.deepEqual(solution(["I", "d"]), ["d", "I"]);
assert.deepEqual(solution(["I", "d", "r"]), ["r", "d", "I"]);
assert.deepEqual(solution(["I", "d", "r", "i"]), ["i", "r", "d", "I"]);

// Sentences (one space)
assert.deepEqual(solution(["I", " ", "d"]), ["I", " ", "d"]);
assert.deepEqual(solution(["I", " ", "d", "r"]), ["I", " ", "r", "d"]);
assert.deepEqual(solution(["I", " ", "d", "r", "i"]), ["I", " ", "i", "r", "d"]);

// Sentences (two spaces)
assert.deepEqual(solution(["I", " ", "d", "r", "i", " ", "w", "i"]), ["I", " ", "i", "r", "d", " ", "i", "w"]);
