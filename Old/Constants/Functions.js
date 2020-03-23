// Pre-defined Functions
const log = console.log;

// URL
function ParseURL() {
	let url = document.URL;

	if (url.match(/messages/i)) {
		return {
			Page: "messages",
			URL: url
		}
	}

	let matches = url.match(/\.com\/(\w+)\/(\d+)/i);

	if (matches && matches.length > 0) {
		let page = matches[1];
		let id = matches[2];

		if (page !== undefined && id !== undefined) {
			return {
				ID: id,
				Page: page,
				URL: url
			};
		}
	} else {
		let matches = url.match(/.com\/([a-z-]+)\/(\d+)/i);

		if (matches && matches.length > 0) {
			let page = matches[1];
			let id = matches[2];

			if (page !== undefined && id !== undefined) {
				return {
					ID: id,
					Page: page,
					URL: url
				};
			}
		}
	}

	return null;
}

// Object Prototyping
Object.prototype.strip = function() {
	let args = [];

	for(let index = 0; index < this.length; index++) {
		args[index] = this[index];
	}

	return args;
}

// String Prototyping
String.prototype.format = function() {
	let self = this;

	for (replacement of arguments) {
		self = self.replace("%s", replacement);
	}

	return self;
}

// Date Prototyping
Date.prototype.format = function() {
	let dateString = this.toDateString();
	let [day, month, date, year] = dateString.split(" ");
	return month + ". " + date + ", " + year;
}
