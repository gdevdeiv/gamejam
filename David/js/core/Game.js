function Game(config) {
	this.name = config.name;
	this.canvas = config.canvas;
	this.context = this.canvas.getContext("2d");

	this.clock = null;
	this.fps = config.fps;

	this.inGame = false;
	this.menus = {
		start: new MenuStart()
	};
	
	this.init = function() {
		this.clock = setTimeout(this.loop, 1000 / this.fps);
	}.bind(this);

	this.loop = function() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		if (this.inGame) {
			this.context.fillStyle = "rgb(255, 0, 0)";
			this.context.fillRect(10, 10, 10, 10);
		}

		clearTimeout(this.clock);
		this.clock = setTimeout(this.loop, 1000 / this.fps);
	}.bind(this);
}
