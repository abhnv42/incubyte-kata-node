"use strict";

import assert from "node:assert";
import test from "node:test";
import add from "./kata.js";

test('Kata tests', () => {
	assert.strictEqual(add(''), 0);
})