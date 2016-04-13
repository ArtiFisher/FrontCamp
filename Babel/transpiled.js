'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
	var _this = this;

	_classCallCheck(this, Main);

	this.container = document.getElementById('stories');
	this.dropdown = document.getElementById('dropdown');
	this.key = 'ed43227ea7d2b47a3757c4134e3e9c06:2:74941862';
	new Theme(this.container, 'business', this.key);
	this.dropdown.addEventListener('input', function (e) {
		return new Theme(_this.container, e.target.value, _this.key);
	});
};

var Theme = function Theme(container, theme, key) {
	_classCallCheck(this, Theme);

	this.container = container;
	this.theme = theme;
	this.key = key;
	this.container.classList.remove('show');
	new Requester(theme, key).request().then(function (json) {
		return new Displayer(container, json.results).display();
	});
};

var Requester = function () {
	function Requester(theme, key) {
		_classCallCheck(this, Requester);

		this.theme = theme;
		this.key = key;
		// this.request = new Proxy(this.request, {apply: function(func, context, argList){console.log('requesting ' + context.theme + ' news'); return func.apply(context, argList);}})
	}

	_createClass(Requester, [{
		key: 'request',
		value: function request() {
			return fetch('http://api.nytimes.com/svc/topstories/v1/' + this.theme + '.json?api-key=' + this.key, {
				method: 'get'
			}).then(function (response) {
				return response.json();
			});
		}
	}]);

	return Requester;
}();

var Displayer = function () {
	function Displayer(container, items) {
		_classCallCheck(this, Displayer);

		this.container = container;
		this.items = items;
	}

	_createClass(Displayer, [{
		key: 'display',
		value: function display() {
			var _this2 = this;

			var HTML = '';
			this.items.forEach(function (item) {
				return HTML += _this2.createItem(item);
			});
			//I don't like usage of innerHTML, but need to show ES6 templating
			this.container.innerHTML = HTML;
			setTimeout(function (e) {
				return _this2.container.classList.add('show');
			}, 0);
		}
	}, {
		key: 'createItem',
		value: function createItem(item) {
			var section = '<section class="item">\n\t        <h2 class="title"><a href="' + item.url + '">' + item.title + '</a></h2>\n\t        <article class="content">\n\t          <p class="text">' + item.abstract + '</p>\n\t        </article>\n\t        <div class="info">\n\t          <span class="author">' + item.byline + '</span>\n\t        </div>\n\t      </section>';
			return section;
		}
	}]);

	return Displayer;
}();

new Main();
