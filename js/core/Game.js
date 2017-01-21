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

	this.tiles = {
		black: new Sprite("img/tiles/black.png"),
		white: new Sprite("img/tiles/white.png"),
		red: new Sprite("img/tiles/red.png"),
		green: new Sprite("img/tiles/green.png"),
		brown: new Sprite("img/tiles/brown.png"),
		blue: new Sprite("img/tiles/blue.png"),
		yellow: new Sprite("img/tiles/yellow.png"),
		cyan: new Sprite("img/tiles/cyan.png"),
		magenta: new Sprite("img/tiles/magenta.png")
	};
	this.map = new Map(new Sprite("level/level1.png"));
	this.player = new Player();
	
	this.init = function() {
		this.clock = setTimeout(this.loop, 1000 / this.fps);
	}.bind(this);

	this.loop = function() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		if (this.inGame) {
			this.map.tick();
			this.player.tick();
		}

		clearTimeout(this.clock);
		this.clock = setTimeout(this.loop, 1000 / this.fps);
	}.bind(this);
}
