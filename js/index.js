var game;

$(function() {
	game = new Game({
		name: "Gamejam",
		canvas: document.getElementById("canvas"),
		fps: 60
	});
	game.init();
})
