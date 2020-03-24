/* Adds vote percentage to the game when hovering over the vote area. */
"use strict";

function injectLibraryInfo(id) {
	if (!("AppendedLibraryInfo" in SessionData)) {
		chrome.runtime.sendMessage({
			ID: id,
			Action: "get-library-info"
		}, data => {
			let typeField = $(`.text-label.text-overflow.field-label:contains("Type")`);

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
