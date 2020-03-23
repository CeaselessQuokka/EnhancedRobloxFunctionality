/* General helper functions that deal with the document in some way. */
"use strict";

/**
 * Parses the URL in search for what page/subpage the extension is on.
 * @return Array<String page, String subpage, String id>
 * 		   The page the user is on (catalog, games, library, etc)
 * 		   The subpage the user is on (about, store, game-instances, etc)
 * 		   The id of the asset the user is on (game id, asset id, bundle id, etc)
 */
function parseURL() {
	let url = document.URL
	let parsedURL = url.match(URL_EXPRESSION);

	if (!parsedURL) {
		return null;
	} else {
		let page = parsedURL[2];
		let subpage = url.match(URL_SUBPAGE_EXPRESSION);

		if (page === "games") {
			if (!subpage) {
				subpage = "about";
			} else {
				subpage = subpage[0];
			}
		}

		return [parsedURL[2], subpage, parsedURL[3]];
	}
}
