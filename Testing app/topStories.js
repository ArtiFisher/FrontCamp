{
	let instance = null;
	class Main {
		constructor(container, dropdown, key){
			if(!instance){
				instance = this;
				this.mediator = new Mediator();
				this.model = new Requester(key, this.mediator);
				this.view = new Displayer(container, dropdown, this.mediator);
				this.mediator.addListener(this.model, ['new theme']);
				this.mediator.addListener(this.view, ['items']);
				this.mediator.send('new theme', 'business');
			}
			return instance;
		}
	}

	class Requester {
		constructor(key, mediator){
			this.mediator = mediator;
			this.key = key;
		}

		receive(header, content){
			if(header == 'new theme'){
				this.request(content);
			}
		}

		request(theme) {
			return fetch('http://api.nytimes.com/svc/topstories/v1/' + theme + '.json?api-key=' + this.key, {
				method: 'get'
			})
				.then(response => response.json())
				.then(json => this.mediator.send('items', json.results));
		}
	}

	class Displayer {
		constructor(container, dropdown, mediator) {
			this.container = container;
			this.dropdown = dropdown;
			this.mediator = mediator;
			this.dropdown.addEventListener('input', e => this.mediator.send('new theme', e.target.value));
		}

		receive(header, content){
			if(header == 'items'){
				this.display(content);
			}
		}

		display(items){
			var HTML = '';
			items.forEach(item => HTML += this.createItem(item));
			this.container.innerHTML = HTML;
			setTimeout(e => this.container.classList.add('show'), 0);
		}

		createItem(item){
			var section = `<section class="item">
		        <h2 class="title"><a href="${item.url}">${item.title}</a></h2>
		        <article class="content">
		          <p class="text">${item.abstract}</p>
		        </article>
		        <div class="info">
		          <span class="author">${item.byline}</span>
		        </div>
		      </section>`;
			return section;
		}
	}

	class Mediator {
		constructor(){
			this.mailList = {};
		}
		addListener(listener, events){
			for(var i = 0, len = events.length; i < len; i++){
				!this.mailList[events[i]] && (this.mailList[events[i]] = []);
				this.mailList[events[i]].push(listener);
			}
		}
		send(header, content){
			var listeners = this.mailList[header];
			if(listeners){
				for(var i = 0, len = listeners.length; i < len; i++){
					listeners[i].receive(header, content);
				}
			}
		}
	}

	window.Main = Main;
};