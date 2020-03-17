/* The script that handles the different features. */
$(document).ready(() => {
	let Retries = 0;
	console.log("Version 0.1.5");

	let Features = {
		// Object Mapping Page Names to Feature Objects
		catalog: Catalog,
		library: Library,
		store: GameStore,
		["game-pass"]: GamePass
	}

	// Events

	/* Custom Event Listener for the URL Changing */
	new Event("URLChanged", function(arguments) {
		let [lastURL, currentURL] = arguments;
		chrome.runtime.sendMessage(ParseURL());
	});

	/* Listen for Messages from the Background Script */
	chrome.extension.onMessage.addListener(function(message, sender, response) {
		console.log("Received Message from BG");
		console.log("\t", message);
		console.log("\t", sender);
		console.log("\t", response);
		console.log("\t", message.JSON);

		if (message.JSON) {
			Retries = 0;
			Features[message.Page].Run(message.JSON);
		} else {
			if (Retries < 10) {
				chrome.runtime.sendMessage(ParseURL());
				Retries += 1;
			}
		}
	});

	// Initiate
	chrome.runtime.sendMessage(ParseURL());
});
