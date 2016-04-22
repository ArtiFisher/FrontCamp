module.exports = class Requester {
	constructor(theme, key){
		this.theme = theme;
		this.key = key;
		// this.request = new Proxy(this.request, {apply: function(func, context, argList){console.log('requesting ' + context.theme + ' news'); return func.apply(context, argList);}})
	}

	request() {
		return fetch('http://api.nytimes.com/svc/topstories/v1/' + this.theme + '.json?api-key=' + this.key, {
			method: 'get'
		})
			.then(response => response.json());
	}
}