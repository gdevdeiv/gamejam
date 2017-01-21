function Map(level) {
	this.level = level.img;
	this.width = null;
	this.height = null;
	this.gapSize = 82;
	this.gapProySize = this.gapSize * 0.8943885546;
	this.gapX = -Math.floor(this.width / 2 - 1) * this.gapSize * 7;
	this.gapY = 0;
	this.items = [];
	this.sweepRow = 0;

	this.init = function() {
		this.spawnItems();
		this.width = this.level.width;
		this.height = this.level.height;
		game.context.drawImage(this.level, 0, 0);
		var tempData = game.context.getImageData(0, 0, this.width, this.height);
		var data = tempData.data;
		this.tiles = [];
		for (var i = 0; i < data.length; i += 4) {
			var tempX = (i / 4) % this.width;
			var tempY = Math.floor((i / 4) / this.width);
			if (data[i] < 10 && data[i + 1] < 10 && data[i + 2] < 10) { var tempType = "black"; }
			if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) { var tempType = "white"; }
			if (data[i] > 240 && data[i + 1] < 10 && data[i + 2] < 10) { var tempType = "red"; }
			if (data[i] == 10 && data[i + 1] == 255 && data[i + 2] == 10) { var tempType = "green"; }
			if (data[i] == 130 && data[i + 1] == 80 && data[i + 2] == 0) { var tempType = "brown"; }
			if (data[i] < 10 && data[i + 1] < 10 && data[i + 2] > 240) { var tempType = "blue"; }
			if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] < 10) { var tempType = "yellow"; }
			if (data[i] > 240 && data[i + 1] < 10 && data[i + 2] > 240) { var tempType = "magenta"; }
			if (data[i] < 10 && data[i + 1] > 240 && data[i + 2] > 240) { var tempType = "cyan"; }
			this.tiles.push(new Tile(tempType, tempX, tempY));
		}
	}.bind(this);

	this.sweep = function () {
		for (var tile in this.tiles) {
			if (this.tiles[tile].x % this.gapSize === this.sweepRow) { this.tiles[tile].frozen = true; }
		}
		this.sweepRow++;
	}.bind(this);
};

Map.prototype.tick = function () {
	this.update();
	this.render();
	for (var item in this.items) {
		this.items[item].tick();
	}
};

Map.prototype.render = function () {
	for (var tile in this.tiles) {
		var iso = Util.cartesianToIso(this.tiles[tile].x * this.gapProySize / 2, this.tiles[tile].y * this.gapProySize / 2);
		game.context.drawImage(this.tiles[tile].frozen ? game.tiles.white.img : this.tiles[tile].img, iso.x + this.gapX, iso.y + this.gapY);
	}
};

Map.prototype.update = function () {
	if (game.ticks % 10 === 0) {
		this.sweep();
	}
};

Map.prototype.spawnItems = function () {
	for (var i = 0; i < Math.floor(Math.random() * 5000); i++) {
		this.items.push(new Item(Math.ceil(Math.random() * 10)));
	}
};
