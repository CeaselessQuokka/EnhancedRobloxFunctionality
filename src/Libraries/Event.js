/* Event Class */
"use strict";

// Objects
var Events = {}

// Classes
class Event {
	/**
	 *
	 * @param handle The name of the event to create.
	 * @param callback The callback to call when the event is fired.
	 */
	constructor(handle, callback) {
		// Set Properties
		this.Handle = handle;
		this.Callback = callback;

		// Add to Events
		if (Events.hasOwnProperty(handle) === true) {
			let handleData = Events[handle];
			handleData[handleData.length] = callback;
		} else {
			Events[handle] = [callback];
		}
	}

	fire(/*tuple*/) {
		// Calls Callback
		this.Callback(toArray(arguments));
	}
}

/* Functions */

/**
 * Fires all connected events given "handle".
 * @param handle The name of the event to call.
 */
function fireAll(handle /*, tuple*/) {
	// Calls All Connected Callbacks to Event

	if (Events.hasOwnProperty(handle) === true) {
		let handleData = Events[handle];
		let args = toArray(arguments);
		args.shift();

		for (let index = 0; index < handleData.length; index++) {
			handleData[index](args);
		}
	}
}
