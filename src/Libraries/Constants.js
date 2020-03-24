/* All constants (potentially) used by the content script. */
"use strict";

/* Parsing */
const URL_EXPRESSION = /(^https:\/\/www\.roblox\.com\/([0-9a-z\-]+)\/(\d+))/i;
const URL_SUBPAGE_EXPRESSION = /[a-z\-]+$/i;

/* Custom HTML */

// Creates the "Estimate Earnings" button for Game Passes on the store page a game.
const ESTIMATE_EARNINGS = `<span class="btn-min-width btn-control-xs btn-more">Estimate Earnings</span>`;

// The "Estimated Earnings" store card template that will be displayed when the user presses "Estimate Earnings".
const ESTIMATED_EARNINGS_STORE_CARD = `
<li class="_erf_injection list-item real-game-pass">
	<div class="store-card">
		<img class="" src="http://beginningstocktrader.com/wp-content/uploads/2016/02/dollarsign-1-150x150.png">
		<div class="store-card-caption">
			<div class="text-overflow store-card-name" title="Estimated Earnings">
				Estimated Earnings
			</div>

			<div class="store-card-price">
				<span class="_erf_text">Total Robux: {0}</span>
				<br><br>
				<span class="_erf_text">Total USD: {1}</span>
			</div>
		</div>
	</div>
</li>`

// The field that will display the created date and sales of an asset.
const FIELD_TEMPLATE = `
<div class="_erf_injection clearfix item-field-container">
	<div class="text-label text-overflow field-label">{0}</div>
	<div class="field-content date-time-i18n">{1}</div>
</div>
`

/* Miscellaneous */
const USD_RATE = 350 / 100000;
