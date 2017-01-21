function Item(id) {
	this.tileWidth = 50;
	this.col = Math.floor(Math.random() * (Math.floor(game.canvas.height / this.tileWidth)));
	this.row = Math.floor(Math.random() * (Math.floor(game.canvas.width / this.tileWidth)));

	this.width = 40;
	this.height = 40;

	this.posX = (this.col * this.tileWidth) + (this.tileWidth / 2 - this.width / 2);
	this.posY = (this.row * this.tileWidth) + (this.tileWidth / 2 - this.height / 2);

	this.id = id;
	this.color = null;

	switch (this.id) {
		case 1:
			this.color = "red";
			break;
		case 2:
			this.color = "blue";
			break;
		case 3:
			this.color = "green";
			break;
		case 4:
			this.color = "grey";
			break;
		case 5:
			this.color = "yellow";
			break;
		case 6:
			this.color = "orange";
			break;
		case 7:
			this.color = "aquamarine";
			break;
		case 8:
			this.color = "purple";
			break;
		case 9:
			this.color = "black";
			break;
		case 10:
			this.color = "brown";
			break;
		default:
			console.log("item no esperado");
			break;
	}

	this.tick = function() {
		this.update();
		this.render();
	}.bind(this);

	this.update = function() {

	}.bind(this);

	this.render = function () {
		game.context.fillStyle = this.color;
		game.context.fillRect(this.posX, this.posY, this.width, this.height);
	}.bind(this);
}
