/* The background script; mainly handles the Roblox web API calls. */

console.log("Version 0.1.5");

// Functions
function GetJSON(api, callback) {
	fetch(api).then(promise => promise.json()).then(json => callback(json)).catch(err => new Error(err));
}

function Query(data) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		if (tabs[0] !== undefined) {
			chrome.tabs.sendMessage(tabs[0].id, data);
		}
	});
}

// Listens for Messages
chrome.runtime.onMessage.addListener(function(message, sender, response) {
	// chrome.cookies.get({
	// 	url: "https://www.roblox.com/",
	// 	name: "cqef_message_data",
	// }, cookie => {
	// 	if (cookie) {
	// 		log("COOKIE:", cookie);
	// 		let val = parseInt(cookie.value);
	// 		log("VAL:", val);
	// 		val++;
	// 		log("NEWVAL:", val);
	// 		chrome.cookies.set({
	// 			url: "https://www.roblox.com/",
	// 			name: "cqef_message_data",
	// 			value: val.toString()
	// 		});
	// 	} else {
	// 		chrome.cookies.set({
	// 			url: "https://www.roblox.com/",
	// 			name: "cqef_message_data",
	// 			value: "1"
	// 		}, cookie => log("New cookie created:", cookie));
	// 	}
	// });

	if (message) {
		let id = message.ID;
		let page = message.Page;
		let url = message.URL

		console.log("Received Message from Content");
		console.log("\t", id);
		console.log("\t", page);
		console.log("\t", url);
		console.log("\t", message.Action);

		if (page === "bundles") {
			// Get Bundle JSON
			log("Nothing to display for bundles.");
		} else if (page === "games") {
			// Get Various Data

			let gamePage = url.match(/#!\/(.+)$/i);
			console.log("\t", gamePage);

			if (gamePage && gamePage.length > 0) {
				let subPage = gamePage[1];
				console.log("\t", subPage);

				if (subPage === "store") {
					// Get GamePass Data
					let gamepassJSON = [];

					if (message.Action === "GetGamePasses") {
						let ids = message.GamePassIds;

						for (let index = 0; index < ids.length; index++) {
							let id = ids[index]

							GetJSON(GamePassInfoAPI + id, json => {
								gamepassJSON[index] = json;

								if (index === (ids.length - 1)) {
									Query({
										Page: subPage,
										JSON: gamepassJSON
									});
								}
							});
						}
					} else {
						Query({
							Page: subPage
						});
					}
				}
			}
		} else if (page === "library") {
			// Get Product JSON

			GetJSON(ProductInfoAPI + id, json => {
				// Send Message to Current Tab

				Query({
					Page: page,
					JSON: json
				});
			});
		} else if (page === "catalog") {
			// Get Product JSON

			GetJSON(ProductInfoAPI + id, json => {
				// Send Message to Current Tab

				Query({
					Page: page,
					JSON: json
				});
			});
		} else if (page === "game-pass") {
			// Get GamePass JSON

			GetJSON(GamePassInfoAPI + id, json => {
				// Send Message to Current Tab

				Query({
					Page: page,
					JSON: json
				});
			});
		}
	}
});
