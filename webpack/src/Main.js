var Theme = require("./Theme.js");

module.exports = class Main {
	constructor(){
		this.container = document.getElementById('stories');
		this.dropdown = document.getElementById('dropdown');
		this.key = 'ed43227ea7d2b47a3757c4134e3e9c06:2:74941862';
		new Theme(this.container, 'business', this.key);
		this.dropdown.addEventListener('input', e => new Theme(this.container, e.target.value, this.key));
	}
}