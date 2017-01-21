var Warehouse = function(col, row) {
    this.col = col;
    this.row = row;
    this.stored = [];
}

Warehouse.prototype.tick = function() {
    this.update();
};

Warehouse.prototype.update = function() {
    if(this.col === game.player.col && this.row === game.player.row) {
        for (var item in game.player.inventario) {
            this.stored.push(game.player.inventario[item]);
        }
        game.player.inventario = [];
        console.log("has vaciado tu inventario")
    }
};