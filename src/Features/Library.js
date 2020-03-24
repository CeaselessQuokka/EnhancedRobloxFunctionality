/* Adds vote percentage to the game when hovering over the vote area. */
"use strict";

function injectLibraryInfo(id) {
	if (!("AppendedLibraryInfo" in SessionData)) {
		chrome.runtime.sendMessage({
			ID: id,
			Action: "get-catalog-info"
		}, data => {
			let typeField = $(`.text-label.text-overflow.field-label:contains("Type")`);

			// Add classes to the Type field so it has proper margining.
			typeField.parent().addClass("item-field-container");

			// Append Sales to the item details, and add extra details to Sales title.
			let salesField = $(FIELD_TEMPLATE.replace("{0}", "Sales").replace("{1}", data.Sales.toLocaleString()));
			typeField.parent().before(salesField);

			// Remove any existing date fields.
			$(".date-time-i18n").parent().parent().remove();

			// Append Updated date to the item details.
			typeField.parent().after(
				FIELD_TEMPLATE.replace("{0}", "Updated").replace(
					"{1}",

					new Date(data.Updated).toLocaleString(
						"default",

						{
							month: "short",
							day: "2-digit",
							year: "numeric"
						}
					)
				)
			);

			// Append Created date to the item details.
			typeField.parent().after(
				FIELD_TEMPLATE.replace("{0}", "Created").replace(
					"{1}",

					new Date(data.Created).toLocaleString(
						"default",

						{
							month: "short",
							day: "2-digit",
							year: "numeric"
						}
					)
				)
			);
		});

		// Add vote percentage.
		injectVotePercentage();
	}

	SessionData.AppendedLibraryInfo = true;
}
