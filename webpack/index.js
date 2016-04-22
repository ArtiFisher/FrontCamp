var imageURL = require("./src/DefaultNewsIcon.png"),
	app = document.getElementById('app'),
	image = document.getElementById('image');

app.style.display = 'none';
image.src = imageURL;
image.style = "position: absolute; top: calc(50% - 200px); left: calc(50% - 300px); cursor: pointer;";
image.addEventListener('click', function(e){
	require(["./src/Main.js", "./src/topStories.css"], function(Main, style) {
		image.style.display = 'none';
		app.style.display = '';
		new Main();
	});
})