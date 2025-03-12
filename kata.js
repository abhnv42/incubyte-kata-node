"use strict";

/**
 * String Calculator
 * @param {string} numbers - a list of numbers separated by a delimeter
 *
 */
export default function add(numbers) {
	if(numbers.length <= 1) return Number(numbers);

	const DEFAULT_DELIMETER = ",|\\n";
	const CUSTOM_DELIMETER = numbers.match(/(?<=^\/\/)./);

	numbers = numbers.replace(/^\/\/.\n/, "");

	let delimeter = (CUSTOM_DELIMETER) ? new RegExp(`,|\\n|${CUSTOM_DELIMETER}`) : new RegExp(",|\\n");
	let sum = 0;

	const numbersArray = numbers.split(delimeter);

	for(let i = numbersArray.length-1; i >= 0; i--) {
		sum += Number(numbersArray[i]);
	}

	return sum;
}
