/* Adds the Estimate Earnings button which will estimate the total game pass earnings of the game. */
"use strict";

function injectStore(id) {
	// Add the "Estimate Earnings" button to the webpage.
	if (!("AppendEstimateEarnings" in SessionData)) {
		$("#rbx-game-passes .container-header").append(ESTIMATE_EARNINGS).click(() => {
			let gamePassIDs = [];
			$("._erf_injection.list-item.real-game-pass").remove();

			// Get the game pass IDs.
			$(".store-card a").each((index, anchor) => {
				let href = $(anchor).attr("href");
				let gamePassID = href.match(/\/game\-pass\/(\d+)/i);
				gamePassIDs[gamePassIDs.length] = gamePassID[1];
			});

			// Update page with estimated earnings.
			chrome.runtime.sendMessage({
				IDs: gamePassIDs,
				Action: "estimate"
			}, data => {
				let totalUSD = 0;
				let totalRobux = 0;

				for (let index = 0; index < data.length; index++) {
					let entry = data[index];

					totalUSD += entry.USDMade;
					totalRobux += entry.RobuxMade;
				}

				totalUSD = totalUSD.toLocaleString(undefined, {
					minimumFractionDigits: 2,
  					maximumFractionDigits: 2
				});

				totalRobux = Math.floor(totalRobux);

				$("#rbx-passes-container").append(
					ESTIMATED_EARNINGS_STORE_CARD
					.replace("{0}", totalRobux.toLocaleString())
					.replace("{1}", totalUSD)
				);
			});
		});

		SessionData.AppendEstimateEarnings = true;
	}
}
