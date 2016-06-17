var cacheObj = {};

function saveToCache(data){
	if(data['_id']){
		saveOne(data);
	}
	else {
		saveMany(data);
	}
}

function saveOne(item){
	cacheObj[item['_id']] = item;
}

function saveMany(array){
	for(var i = 0, len = array.length; i < len; i++){
		saveOne(array[i]);
	}
}

function fromCache(url){
	var array = url.split('/'),
		num = parseInt(array[array.length - 1]);
	if(typeof num === 'number'){
		if(cacheObj[num]){
			return cacheObj[num];
		}
	}
}

module.exports = function(url, callback, params){
	var cached = fromCache(url);
	if(cached){
		callback(cached);
	}
	else {
		fetch(url, params)
			.then(response => response.json())
			.then(data => { saveToCache(data); return data; })
			.then(callback)
			.catch((err) => {
				console.log(err);
			});
	}
}