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
        
    }
};