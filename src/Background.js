/* Handles all the API calls. */
"use strict";

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
	if (message.Action === "estimate") {
		let data = [];
		let numSent = 0;

		for (let index = 0; index < message.IDs.length; index++) {
			let id = message.IDs[index];

			fetch(GAMEPASS_INFO + id).then(
				response => response.json().then(jsonData => {
					let robuxMade = jsonData.Sales * jsonData.PriceInRobux * 0.7;

					data[data.length] = {
						Sales: jsonData.Sales,
						USDMade: robuxMade * USD_RATE,
						RobuxMade: robuxMade
					};

					// Send data back.
					numSent++;

					if (numSent === message.IDs.length) {
						callback(data);
					}
				})
			);
		}
	}

	return true;

	// chrome.notifications.create("TestNoti", {
	// 	type: "progress",
	// 	title: "Test Notification",
	// 	iconUrl: "Icons/Icon.png",
	// 	message: "Welcome there :]",
	// 	progress: 0
	// });

	// fetch("https://notifications.roblox.com/v2/stream-notifications/metadata").then(
	// 	resp => resp.json().then(data => console.log(data))
	// );
});
