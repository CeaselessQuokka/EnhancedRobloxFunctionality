// Catalog HTML
const CatalogEntry = (`
	<div class="_cqef clearfix item-field-container">
		<div class="_cqef text-label text-overflow field-label">%s</div>
		<div class="_cqef field-content">%s</div>
	</div>
`).trim();

// GamePass HTML
const GamePassData = (`
	<br /> <br />
	<div class="_cqef clearfix item-field-container">
		<div class="_cqef field-content">%s</div>
		<div class="_cqef field-content">%s</div>
	</div>
`).trim();

const GamePassDataOneEntry = (`
	<div class="_cqef clearfix item-field-container">
		<div class="_cqef field-content">%s</div>
	</div>
`)

const GamePassCard = (`
	<li class="list-item real-game-pass">
		<div class="store-card">
			<a href="#" class="gear-passes-asset"><img class="" src="http://www.allwayagencies.co.za/images/partners/total.png"></a>
			<div class="store-card-caption">
				<div class="text-overflow store-card-name" title="Total Made">
					Total
				</div>

				<div class="store-card-price">
					<span class="icon-robux-16x16"></span>
					<span class="text-robux">%s</span>
				</div>
			</div>
		</div>
	</li>
`).trim();

// Messages
const MessagesTab = (`
	<li class="rbx-tab ng-scope" ng-repeat="tab in tabs|orderBy:tab.id" ng-class="{'active':currentStatus.activeTab==tab.name}">
		<a class="rbx-tab-heading" ui-sref="search">
			<span class="text-lead ng-binding">Search</span>
			<span class="notification-red notification ng-binding ng-hide" ng-show="tab.count"></span>
		</a>
	</li>
`).trim();

const MessagesSearch = (`
	<span class="action-buttons hidden-xs">
		<button class="_cqef-search btn-control btn-control-sm">Search</button>
	</span>
`).trim();
