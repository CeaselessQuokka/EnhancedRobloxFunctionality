// Objects
var Events = {}

// Classes
class Event {
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

	Fire(/*tuple*/) {
		// Calls Callback
		this.Callback(arguments.strip());
	}
}

// Functions
function FireAll(handle/*, tuple*/) {
	// Calls All Connected Callbacks to Event

	if (Events.hasOwnProperty(handle) === true) {
		let handleData = Events[handle];
		let args = arguments.strip();
		args.shift();

		for (let index = 0; index < handleData.length; index++) {
			handleData[index](args);
		}
	}
}