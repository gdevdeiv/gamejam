function Game(config) {
	var that = this;

	this.name = config.name;
	this.canvas = config.canvas;
	this.context = this.canvas.getContext("2d");
	this.startTime = null;
	this.endTime = null;
	this.clock = null;
	this.ticks = 0;
	this.fps = config.fps;

	this.inGame = false;
	this.menus = {
		start: new MenuStart(),
		over: new MenuOver()
	};

	this.tiles = {
		house: new Sprite("img/tiles/house.png"),
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
	this.map = new Map();
	this.player = new Player();
	this.round = new Round(0, this);
	this.warehouse = null;
	this.cursor = new Cursor();
	this.joystick = new Joystick();

	this.gameOver = false;
	
	this.init = function() {
		setTimeout(function() {
			that.inGame = true;
		}, 1000);
		this.clock = setTimeout(this.loop, 1000 / this.fps);
	}.bind(this);

	this.loop = function() {
		this.startTime = Date.now();
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		if (this.inGame) {
			this.round.tick();
			this.map.tick();
			this.warehouse.tick();
			this.player.tick();
			this.cursor.tick();
			this.joystick.input();
			Hud.drawInventory();
			Hud.drawWarehouse();
		}

		this.ticks++;
		clearTimeout(this.clock);
		this.endTime = Date.now();

		this.clock = setTimeout(this.loop, 1000 / this.fps - (this.endTime- this.startTime));
	}.bind(this);
}
