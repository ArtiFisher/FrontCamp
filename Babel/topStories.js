class Main {
	constructor(){
		this.container = document.getElementById('stories');
		this.dropdown = document.getElementById('dropdown');
		this.key = 'ed43227ea7d2b47a3757c4134e3e9c06:2:74941862';
		new Theme(this.container, 'business', this.key);
		this.dropdown.addEventListener('input', e => new Theme(this.container, e.target.value, this.key));
	}
}

class Theme {
	constructor(container, theme, key){
		this.container = container;
		this.theme = theme;
		this.key = key;
		this.container.classList.remove('show');
		new Requester(theme, key).request()
			.then(json => new Displayer(container, json.results).display());
	}
}

class Requester {
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

class Displayer {
	constructor(container, items){
		this.container = container;
		this.items = items;
	}

	display(){
		var HTML = '';
		this.items.forEach(item => HTML += this.createItem(item));
		//I don't like usage of innerHTML, but need to show ES6 templating
		this.container.innerHTML = HTML;
		setTimeout(e => this.container.classList.add('show'), 0);
	}

	createItem(item){
		var section = `<div class="item">
	        <h2 class="title"><a href="${item.url}">${item.title}</a></h2>
	        <div class="content">
	          <p class="text">${item.abstract}</p>
	        </div>
	        <div class="info">
	          <span class="author">${item.byline}</span>
	        </div>
	      </div>`;
		return section;
	}
}

new Main();
