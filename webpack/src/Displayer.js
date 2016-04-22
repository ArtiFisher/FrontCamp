module.exports = class Displayer {
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