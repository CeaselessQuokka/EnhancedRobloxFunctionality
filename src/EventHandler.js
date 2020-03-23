/* Handles the custom events. */
"use strict";

// Data
let LastURL = document.URL

// Main Loop
setInterval(() => {
	// Detect URL Change
	let currentURL = document.URL;

	if (LastURL !== currentURL) {
		fireAll("URLChanged", LastURL, currentURL);
		LastURL = currentURL;
	}
}, 125);
