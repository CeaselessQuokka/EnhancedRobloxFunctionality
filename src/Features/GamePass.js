/* Adds vote percentage to the game when hovering over the vote area. */
"use strict";

function injectGamePassInfo(id) {
	if (!("AppendedGamePassInfo" in SessionData)) {
		chrome.runtime.sendMessage({
			ID: id,
			Action: "get-pass-info"
		}, data => {
			let typeField = $(`.text-label.text-overflow.field-label:contains("Type")`);

			// Add classes to the Type field so it has proper margining.
			typeField.parent().addClass("item-field-container");

			// Append Sales to the item details, and add extra details to Sales title.
			let salesField = $(FIELD_TEMPLATE.replace("{0}", "Sales").replace("{1}", data.Sales.toLocaleString()));

			let totalRobux = data.Sales * data.PriceInRobux * 0.7;
			let totalUSD = totalRobux * USD_RATE;

			totalRobux = Math.floor(totalRobux).toLocaleString();
			totalUSD = totalUSD.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})

			salesField.attr("title", `Total Robux made: ${totalRobux}\nTotal USD made: ${totalUSD}`);
			typeField.parent().before(salesField);

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

	SessionData.AppendedGamePassInfo = true;
}
