function Player() {
	this.width = 35;
	this.height = this.width;

	this.tileWidth = null;

	this.col = 0;
	this.row = 0;

	this.posX = (this.col * this.tileWidth) + (this.tileWidth / 2 - this.width / 2);
	this.posY = (this.row * this.tileWidth) + (this.tileWidth / 2 - this.width / 2);

	this.hp = 100;
	this.moveX = true;
	this.moveY = true;

	this.dirY = null;
	this.dirX = null;

	var that = this;

	$(document).keydown(function (event) {
		if (event.which == 32) { console.log("payaso"); }
		if (event.which == 37 && that.moveX) { that.dirX = "left"; }
		if (event.which == 39 && that.moveX) { that.dirX = "right"; }
		if (event.which == 38 && that.moveY) { that.dirY = "up"; }
		if (event.which == 40 && that.moveY) { that.dirY = "down"; }
	});

	$(document).keyup(function (event) {
		if (event.which == 32) { console.log("payaso"); }
		if (event.which == 37) { that.dirX = null; }
		if (event.which == 39) { that.dirX = null; }
		if (event.which == 38) { that.dirY = null; }
		if (event.which == 40) { that.dirY = null; }
	});

	this.init = function () {
		this.tileWidth = game.map.gapSize;
	}.bind(this);

	this.tick = function() {
		this.update();
		this.render();
	}.bind(this);

	this.update = function () {

	}.bind(this);

	this.render = function () {

		if (this.moveX && this.dirX == "right") {
			this.col++;
		} else if (this.moveX && this.dirX == "left") {
			this.col--;
		}

		if (this.moveY && this.dirY == "up") {
			this.row--;
		} else if (this.moveY && this.dirY == "down") {
			this.row++;
		}

		// POS X
		if (this.posX != this.col * this.tileWidth + (this.tileWidth / 2 - this.width / 2)) {
			if (this.posX < this.col * this.tileWidth + (this.tileWidth / 2 - this.width / 2)) {
				this.posX++;
			} else if (this.posX > this.col * this.tileWidth + (this.tileWidth / 2 - this.width / 2)) {
				this.posX--;
			}
			this.moveX = false;
		} else {
			this.moveX = true;
		}

		// POS Y
		if (this.posY != this.row * this.tileWidth + (this.tileWidth / 2 - this.height / 2)) {
			if (this.posY < this.row * this.tileWidth + (this.tileWidth / 2 - this.height / 2)) {
				this.posY++;
			} else if (this.posY > this.row * this.tileWidth + (this.tileWidth / 2 - this.height / 2)) {
				this.posY--;
			}
			this.moveY = false;
		} else {
			this.moveY = true;
		}

		game.context.fillStyle = "rgba(50,150,200,05)";
		game.context.fillRect(this.posX, this.posY, this.width, this.height);
	}.bind(this);

	
}
