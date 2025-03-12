"use strict";

/**
 * String Calculator
 * @param {string} numbers - a list of numbers separated by a delimeter
 * @returns {number}
 */
export default function add(numbers) {

	if(typeof numbers !== "string") throw new Error("argument must be a string");

	let sum = 0;
	
	if(numbers.length === 0) return sum;

	const negativeNumbers = [];
	const DEFAULT_DELIMETER = ",|\\n";
	const CUSTOM_DELIMETER = numbers.match(/(?<=^\/\/)./);

	numbers = numbers.replace(/^\/\/.\n/, "");

	let delimeter = (CUSTOM_DELIMETER) ? new RegExp(`,|\\n|${CUSTOM_DELIMETER}`) : new RegExp(",|\\n");

	const numbersArray = numbers.split(delimeter);

	for(let i = 0; i < numbersArray.length; i++) {
		const currentNumber = Number(numbersArray[i]);

		if(currentNumber >= 0) {
			sum += currentNumber;
		} else {
			negativeNumbers.push(currentNumber);
		}

	}

	if(negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
	return sum;
}
