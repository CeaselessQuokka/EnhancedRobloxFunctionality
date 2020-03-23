/* Adds the Estimate Earnings button which will estimate the total game pass earnings of the game. */
"use strict";

function injectStore(id) {
	// Add the "Estimate Earnings" button to the webpage.
	if (!("AppendEstimateEarnings" in SessionData)) {
		$("#rbx-game-passes .container-header").append(ESTIMATE_EARNINGS);
		SessionData.AppendEstimateEarnings = true;
	}

	// todo: estimate earnings
}
