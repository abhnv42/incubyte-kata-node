"use strict";

import assert from "node:assert";
import test from "node:test";
import add from "./kata.js";

test('empty string', () => {
	assert.strictEqual(add(''), 0);
})

test('single number', () => {
	assert.strictEqual(add('5'), 5);
})

test('two numbers', () => {
	assert.strictEqual(add('5,7'), 12);
})

test('multiple numbers', () => {
	assert.strictEqual(add('5,7,8,9,10'), 39);
})

test('new line between numbers', () => {
	assert.strictEqual(add('5\n7,8,9\n10'), 39);
})

test('custom delimeter', () => {
	assert.strictEqual(add('//;\n5;7;8;9;10'), 39);
})

test('custom delimeter and new lines', () => {
	assert.strictEqual(add('//;\n5;7;8\n9;10'), 39);
})
