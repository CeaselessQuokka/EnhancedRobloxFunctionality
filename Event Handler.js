/* Handles the custom events. */

// Data
let LastURL = document.URL

// Main Loop
setInterval(() => {
	{ // Detect URL Change
		let currentURL = document.URL;

		if (LastURL !== currentURL) {
			FireAll("URLChanged", LastURL, currentURL);
			LastURL = currentURL;
		}
	}
}, 10);