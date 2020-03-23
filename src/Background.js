/* Handles all the API calls. */
"use strict";

chrome.runtime.onMessage.addListener(function(message, sender, response) {
	console.log(message);

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
