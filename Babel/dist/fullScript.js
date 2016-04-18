!function(a){function b(){}function c(a,b){return function(){a.apply(b,arguments)}}function d(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],j(a,this)}function e(a,b){for(;3===a._state;)a=a._value;return 0===a._state?void a._deferreds.push(b):(a._handled=!0,void l(function(){var c=1===a._state?b.onFulfilled:b.onRejected;if(null===c)return void(1===a._state?f:g)(b.promise,a._value);var d;try{d=c(a._value)}catch(e){return void g(b.promise,e)}f(b.promise,d)}))}function f(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"==typeof b||"function"==typeof b)){var e=b.then;if(b instanceof d)return a._state=3,a._value=b,void h(a);if("function"==typeof e)return void j(c(e,b),a)}a._state=1,a._value=b,h(a)}catch(f){g(a,f)}}function g(a,b){a._state=2,a._value=b,h(a)}function h(a){2===a._state&&0===a._deferreds.length&&setTimeout(function(){a._handled||m(a._value)},1);for(var b=0,c=a._deferreds.length;c>b;b++)e(a,a._deferreds[b]);a._deferreds=null}function i(a,b,c){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.promise=c}function j(a,b){var c=!1;try{a(function(a){c||(c=!0,f(b,a))},function(a){c||(c=!0,g(b,a))})}catch(d){if(c)return;c=!0,g(b,d)}}var k=setTimeout,l="function"==typeof setImmediate&&setImmediate||function(a){k(a,1)},m=function(a){console.warn("Possible Unhandled Promise Rejection:",a)},n=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};d.prototype["catch"]=function(a){return this.then(null,a)},d.prototype.then=function(a,c){var f=new d(b);return e(this,new i(a,c,f)),f},d.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&n(arguments[0])?arguments[0]:arguments);return new d(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},d.resolve=function(a){return a&&"object"==typeof a&&a.constructor===d?a:new d(function(b){b(a)})},d.reject=function(a){return new d(function(b,c){c(a)})},d.race=function(a){return new d(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},d._setImmediateFn=function(a){l=a},d._setUnhandledRejectionFn=function(a){m=a},"undefined"!=typeof module&&module.exports?module.exports=d:a.Promise||(a.Promise=d)}(this),function(a){"use strict";function b(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function c(a){return"string"!=typeof a&&(a=String(a)),a}function d(a){this.map={},a instanceof d?a.forEach(function(a,b){this.append(b,a)},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function e(a){return a.bodyUsed?Promise.reject(new TypeError("Already read")):void(a.bodyUsed=!0)}function f(a){return new Promise(function(b,c){a.onload=function(){b(a.result)},a.onerror=function(){c(a.error)}})}function g(a){var b=new FileReader;return b.readAsArrayBuffer(a),f(b)}function h(a){var b=new FileReader;return b.readAsText(a),f(b)}function i(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,"string"==typeof a)this._bodyText=a;else if(o.blob&&Blob.prototype.isPrototypeOf(a))this._bodyBlob=a;else if(o.formData&&FormData.prototype.isPrototypeOf(a))this._bodyFormData=a;else if(o.searchParams&&URLSearchParams.prototype.isPrototypeOf(a))this._bodyText=a.toString();else if(a){if(!o.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(a))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob?(this.blob=function(){var a=e(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(g)},this.text=function(){var a=e(this);if(a)return a;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var a=e(this);return a?a:Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function j(a){var b=a.toUpperCase();return p.indexOf(b)>-1?b:a}function k(a,b){b=b||{};var c=b.body;if(k.prototype.isPrototypeOf(a)){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url,this.credentials=a.credentials,b.headers||(this.headers=new d(a.headers)),this.method=a.method,this.mode=a.mode,c||(c=a._bodyInit,a.bodyUsed=!0)}else this.url=a;if(this.credentials=b.credentials||this.credentials||"omit",!b.headers&&this.headers||(this.headers=new d(b.headers)),this.method=j(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}function l(a){var b=new FormData;return a.trim().split("&").forEach(function(a){if(a){var c=a.split("="),d=c.shift().replace(/\+/g," "),e=c.join("=").replace(/\+/g," ");b.append(decodeURIComponent(d),decodeURIComponent(e))}}),b}function m(a){var b=new d,c=(a.getAllResponseHeaders()||"").trim().split("\n");return c.forEach(function(a){var c=a.trim().split(":"),d=c.shift().trim(),e=c.join(":").trim();b.append(d,e)}),b}function n(a,b){b||(b={}),this.type="default",this.status=b.status,this.ok=this.status>=200&&this.status<300,this.statusText=b.statusText,this.headers=b.headers instanceof d?b.headers:new d(b.headers),this.url=b.url||"",this._initBody(a)}if(!a.fetch){var o={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch(a){return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};d.prototype.append=function(a,d){a=b(a),d=c(d);var e=this.map[a];e||(e=[],this.map[a]=e),e.push(d)},d.prototype["delete"]=function(a){delete this.map[b(a)]},d.prototype.get=function(a){var c=this.map[b(a)];return c?c[0]:null},d.prototype.getAll=function(a){return this.map[b(a)]||[]},d.prototype.has=function(a){return this.map.hasOwnProperty(b(a))},d.prototype.set=function(a,d){this.map[b(a)]=[c(d)]},d.prototype.forEach=function(a,b){Object.getOwnPropertyNames(this.map).forEach(function(c){this.map[c].forEach(function(d){a.call(b,d,c,this)},this)},this)},d.prototype.keys=function(){var a=[];this.forEach(function(b,c){a.push(c)});var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return o.iterable&&(b[Symbol.iterator]=function(){return b}),b},d.prototype.values=function(){var a=[];this.forEach(function(b){a.push(b)});var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return o.iterable&&(b[Symbol.iterator]=function(){return b}),b},d.prototype.entries=function(){var a=[];this.forEach(function(b,c){a.push([c,b])});var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return o.iterable&&(b[Symbol.iterator]=function(){return b}),b},o.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];k.prototype.clone=function(){return new k(this)},i.call(k.prototype),i.call(n.prototype),n.prototype.clone=function(){return new n(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},n.error=function(){var a=new n(null,{status:0,statusText:""});return a.type="error",a};var q=[301,302,303,307,308];n.redirect=function(a,b){if(-1===q.indexOf(b))throw new RangeError("Invalid status code");return new n(null,{status:b,headers:{location:a}})},a.Headers=d,a.Request=k,a.Response=n,a.fetch=function(a,b){return new Promise(function(c,d){function e(){return"responseURL"in g?g.responseURL:/^X-Request-URL:/m.test(g.getAllResponseHeaders())?g.getResponseHeader("X-Request-URL"):void 0}var f;f=k.prototype.isPrototypeOf(a)&&!b?a:new k(a,b);var g=new XMLHttpRequest;g.onload=function(){var a={status:g.status,statusText:g.statusText,headers:m(g),url:e()},b="response"in g?g.response:g.responseText;c(new n(b,a))},g.onerror=function(){d(new TypeError("Network request failed"))},g.ontimeout=function(){d(new TypeError("Network request failed"))},g.open(f.method,f.url,!0),"include"===f.credentials&&(g.withCredentials=!0),"responseType"in g&&o.blob&&(g.responseType="blob"),f.headers.forEach(function(a,b){g.setRequestHeader(b,a)}),g.send("undefined"==typeof f._bodyInit?null:f._bodyInit)})},a.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);;'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
	var _this = this;

	_classCallCheck(this, Main);

	this.container = document.getElementById('stories');
	this.dropdown = document.getElementById('dropdown');
	this.key = 'ed43227ea7d2b47a3757c4134e3e9c06:2:74941862';
	new Theme(this.container, 'business', this.key);
	this.dropdown.addEventListener('change', function (e) {
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
			var section = '<div class="item">\n\t        <h2 class="title"><a href="' + item.url + '">' + item.title + '</a></h2>\n\t        <div class="content">\n\t          <p class="text">' + item.abstract + '</p>\n\t        </div>\n\t        <div class="info">\n\t          <span class="author">' + item.byline + '</span>\n\t        </div>\n\t      </div>';
			return section;
		}
	}]);

	return Displayer;
}();

new Main();
