function Tile(type, x, y) {
	this.type = type;
	this.x = x;
	this.y = y;
	this.img = game.tiles[this.type].img;
}
