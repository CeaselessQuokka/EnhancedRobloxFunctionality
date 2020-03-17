/* Shows sales and created on game passes. */

var GamePass = {
	Ran: false
};

// Functions
GamePass.Run = function(json) {
	if (!GamePass.Ran) {
		// Create Sales Entry and Created Entry and Updated Entry (if needed)
		let createdElement = $(".clearfix.item-type-field-container")
		.before(CatalogEntry.format("Sales", (json.Sales).toLocaleString()))
		.prev().css("margin", "0px 0px 12px 0px")
		.addClass("_cqef-item-sales-field-container").next().next()
		.after(CatalogEntry.format("Created", new Date(json.Created).format())).next()
		.addClass("_cqef-item-created-field-container");

		// Check if Page Contains Updated
		let containsUpdated = $(".text-label.text-overflow.field-label").filter((index, element) => {
			return $(element).text() === "Updated";
		}).length > 0;

		if (!containsUpdated) {
			// Add Updated
			createdElement.after(CatalogEntry.format("Updated", new Date(json.Created).format())).next()
			.addClass("_cqef-item-updated-field-container");
		}

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
