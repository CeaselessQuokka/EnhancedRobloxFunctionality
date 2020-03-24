/* Adds vote percentage to the asset/game when hovering over the vote area. */
"use strict";

function injectVotePercentage() {
	// Add vote percentage.
	var likes = parseInt($("#vote-up-text").attr("title"));
	var dislikes = parseInt($("#vote-down-text").attr("title"));

	if (likes > 0) {
		$("#voting-section").attr("title", ((likes / (likes + dislikes)) * 100).toFixed(0) + "%");
	} else {
		$("#voting-section").attr("title", "No Votes");
	}
}
