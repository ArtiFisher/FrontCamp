var Requester = require("./Requester.js"),
	Displayer = require("./Displayer.js");

module.exports = class Theme {
	constructor(container, theme, key){
		this.container = container;
		this.theme = theme;
		this.key = key;
		this.container.classList.remove('show');
		new Requester(theme, key).request()
			.then(json => new Displayer(container, json.results).display());
	}
}