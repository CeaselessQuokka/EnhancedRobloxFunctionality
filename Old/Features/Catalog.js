/* Adds sales and the created date to Roblox products in the catalog. */

var Catalog = {
	Ran: false
};

// Functions
Catalog.Run = function(json) {
	if (!Catalog.Ran) {
		Catalog.Ran = true;

		// // Create Sales Entry and Created Entry
		// $(".clearfix.item-type-field-container")
		// .before(CatalogEntry.format("Sales", (json.Sales).toLocaleString()))
		// .prev().css("margin", "0px 0px 12px 0px")
		// .addClass("_cqef-item-sales-field-container").next().next()
		// .after(CatalogEntry.format("Created", new Date(json.Created).format())).next()
		// .addClass("_cqef-item-created-field-container");

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
	}
}
