"use strict";

/**
 * String Calculator
 * @param {string} numbers - a list of numbers separated by a delimeter
 *
 */
export default function add(numbers) {
	if(numbers.length <= 1) return Number(numbers);

	const NEWLINE_REGEX = /\n/g;

	let sum = 0;
	numbers = numbers.replace(NEWLINE_REGEX, ",");
	const numbersArray = numbers.split(",");

	for(let i = numbersArray.length-1; i >= 0; i--) {
		sum += Number(numbersArray[i]);
	}

	return sum;
}
