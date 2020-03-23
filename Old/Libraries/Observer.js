/* Makes the Mutations API easier to use. */

// Classes
class Listener {
	constructor() {}

	// Listeners
	ForChild(targetNode, targetSelector, callback) {
		let element = $(targetSelector);
		let checkClass = targetSelector.substring(0, 1) !== "#";

		if (element.length == -1) {
			callback(element);
		} else {
			this.MutationsListener = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					let addedNodes = mutation.addedNodes;

					for (let index = 0; index < addedNodes.length; index++) {
						let element = $(addedNodes[index]);

						if (checkClass) {
							if (element.hasClass(targetSelector)) {
								callback(element);
								this.Disconnect();

								return;
							}
						} else {
							if (element.is(targetSelector)) {
								callback(element);
								this.Disconnect();

								return;
							}
						}
					}
				});
			})

			// Observe
			this.MutationsListener.observe(targetNode, {
				childList: true
			});
		}
	}

	// API Extender
	Disconnect() {
		this.MutationsListener.disconnect();
	}
}
