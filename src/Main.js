/* Handles all features and additions of the extension. */
"use strict";

/* Data */
let SessionData = {};

/* Functions */

/**
 * The function that handles the running of features on the Roblox site.
 */
let inject = function() {
	let parsedURL = parseURL();

	if (parsedURL) {
		let [page, subpage, id] = parsedURL;

		if (page === "games") {
			if (subpage === "store") {
				injectStore(id);
			}
		}
	}
}

/* Events */
$(document).ready(() => {
	// Events
	new Event("URLChanged", args => {
		inject();
	});

	// Initiate
	inject();
});
