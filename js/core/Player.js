function Player() {
	this.width = 15;
	this.height = this.width;

	this.tileWidth = null;

	this.col = 0;
	this.row = 0;
	this.renderCorrectX = 1;
	this.renderCorrectY = 0;

	this.posX = null;
	this.posY = null;

	this.hp = 100;
	this.moveX = true;
	this.moveY = true;

	this.dirY = null;
	this.dirX = null;

	var that = this;

	this.inventario = [];

	$(document).keydown(function (event) {
		if (event.which == 32) {
			console.log(that.col);
			for(var i in game.map.items){
				if(that.col+1 == game.map.items[i].col && that.row == game.map.items[i].row){
					if(that.inventario.length < 2){
						that.inventario.push(game.map.items[i].id);
						game.map.items.splice(i,1);
						console.log(that.inventario);
					}
				}
			}
		}
		if (event.which == 49) {
			var soltar = true;
			for(var i in game.map.items){		
				if(that.col+1 == game.map.items[i].col && that.row == game.map.items[i].row && that.inventario.length > 0){
					var aux = that.inventario[0];
					that.inventario[0] = game.map.items[i].id;
					game.map.items[i].id = aux;
					soltar = false;
				}
			}
			if(soltar){
				game.map.items.push(new Item(that.inventario[0],game.map.gapSize,that));
				that.inventario.splice(0,1);
			}
		}
		if (event.which == 50) {
			var soltar = true;
			for(var i in game.map.items){
				if(that.col+1 == game.map.items[i].col && that.row == game.map.items[i].row && that.inventario.length > 1){
					var aux = that.inventario[1];
					that.inventario[1] = game.map.items[i].id;
					game.map.items[i].id = aux;
					soltar = false;
				}
			}
			if(soltar){
				game.map.items.push(new Item(that.inventario[1],game.map.gapSize,that));
				that.inventario.splice(1,1);
			}
		}

		if (event.which == 37 && that.moveX) { that.dirX = "left"; }
		if (event.which == 39 && that.moveX) { that.dirX = "right"; }
		if (event.which == 38 && that.moveY) { that.dirY = "up"; }
		if (event.which == 40 && that.moveY) { that.dirY = "down"; }

		if (event.which == 100) { game.map.gapX += game.map.gapSize; }
		if (event.which == 102) { game.map.gapX -= game.map.gapSize; }
		if (event.which == 104) { game.map.gapY += game.map.gapSize / 2; }
		if (event.which == 98) { game.map.gapY -= game.map.gapSize / 2; }

	});

	$(document).keyup(function (event) {
		if (event.which == 32) { console.log("payaso"); }
		if (event.which == 37) { that.dirX = null; }
		if (event.which == 39) { that.dirX = null; }
		if (event.which == 38) { that.dirY = null; }
		if (event.which == 40) { that.dirY = null; }
	});

	this.init = function () {
		this.tileWidth = game.map.gapProySize;
		this.posX = ((this.col+this.renderCorrectX) * this.tileWidth / 2) + (this.tileWidth / 2 - this.width / 2);
		this.posY = ((this.row+this.renderCorrectY) * this.tileWidth / 2) + (this.tileWidth / 2 - this.width / 2);
	}.bind(this);

	this.tick = function () {
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
		if (this.posX != (this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2)) {
			if (this.posX < (this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2)) {
				this.posX++;
				if (Math.abs(this.posX - ((this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2))) < 1) {
					this.posX = (this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2);
				}
			} else if (this.posX > (this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2)) {
				this.posX--;
				if (Math.abs(this.posX - ((this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2))) < 1) {
					this.posX = (this.col+this.renderCorrectX) * this.tileWidth / 2 + (this.tileWidth / 2 - this.width / 2);
				}
			}
			this.moveX = false;
		} else {
			this.moveX = true;
		}

		// POS Y
		if (this.posY != (this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2)) {
			if (this.posY < (this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2)) {
				this.posY++;
				if (Math.abs(this.posY - ((this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2))) < 1) {
					this.posY = (this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2);
				}
			} else if (this.posY > (this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2)) {
				this.posY--;
				if (Math.abs(this.posY - ((this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2))) < 1) {
					this.posY = (this.row+this.renderCorrectY) * this.tileWidth / 2 + (this.tileWidth / 2 - this.height / 2);
				}
			}
			this.moveY = false;
		} else {
			this.moveY = true;
		}

		game.context.fillStyle = "rgba(50,150,200,05)";
		var iso = Util.cartesianToIso(this.posX, this.posY);
		game.context.fillRect(iso.x + game.map.gapX, iso.y + game.map.gapY, this.width, this.height);
	}.bind(this);
}
