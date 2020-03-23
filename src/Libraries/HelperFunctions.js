/* Miscellaneous Helper Functioners */
"use strict";

/**
 * Converts an arguments structure to an array.
 * @param args The arguments structure of a function.
 */
function toArray(args) {
	let array = [];

	for(let index = 0; index < args.length; index++) {
		array[index] = args[index];
	}

	return array;
}
