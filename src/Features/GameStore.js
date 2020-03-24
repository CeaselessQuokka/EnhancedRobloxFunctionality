/* Adds total Robux and USD made to each gamepass in a game's store. */

var GameStore = {
	Ran: false
};

// Functions
GameStore.Run = function(json) {
	if (GameStore.Ran) {
		console.log("RUNNING JSON:", json);

		let childrenMap = {};
		let children = $("#rbx-passes-container").children();

		for (let index = 0; index < children.length; index++) {
			let child = $(children[index]);
			childrenMap[child.find("a").attr("href").match(/\d+/).toString()] = child;
		}

		let totalUSD = 0
		let totalRobux = 0

		for (let index = 0; index < json.length; index++) {
			let data = json[index];
			let gamepass = childrenMap[data.TargetId.toString()];

			let robuxMade = 0.7 * (data.PriceInRobux * data.Sales);
			let usdMade = (robuxMade * 0.0035);

			totalUSD += usdMade;
			totalRobux += robuxMade;

			gamepass.find(".store-card-price").after(GamePassData.format("R$ " + robuxMade.toLocaleString(), "$" + usdMade.toLocaleString()));
		}

		$(children[(children.length - 1)]).after(GamePassCard.format(totalRobux.toLocaleString()))
		.next().find(".store-card-price").after(GamePassDataOneEntry.format("$" + totalUSD.toLocaleString()));
	} else {
		GameStore.Ran = true;

		let noPassesElement = $("#rbx-game-passes")[0];
		let passesContainer = $("#rbx-passes-container")[0];

		let noGamepassesSelector = "#store-does-not-sell";
		let gamepassSelector = "list-item real-game-pass";

		let noPassListner = new Listener();
		let gamepassListener = new Listener();

		noPassListner.ForChild(noPassesElement, noGamepassesSelector, () => gamepassListener.Disconnect());
		gamepassListener.ForChild(passesContainer, gamepassSelector, () => {
			let urlData = ParseURL();
			let children = $(passesContainer).children();

			urlData.Action = "GetGamePasses";
			urlData.GamePassIds = [];

			for (let index = 0; index < children.length; index++) {
				let child = $(children[index]);
				urlData.GamePassIds[index] = parseInt(child.find("a").attr("href").match(/\d+/));
			}

			chrome.runtime.sendMessage(urlData);

			// Disconnect Listener
			noPassListner.Disconnect();
		});

		// Vote Percentage
		let upVotes = parseInt($("#vote-up-text").attr("title"));
		let downVotes = parseInt($("#vote-down-text").attr("title"));
		let percentage = ((upVotes / (downVotes + upVotes)) * 100).toFixed(0);

		if (percentage === "NaN") {
			$("#voting-section").attr("title", "No Votes");
		} else {
			$("#voting-section").attr("title", percentage + "%");
		}
	}
}
