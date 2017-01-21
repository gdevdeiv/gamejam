var level = new Image();
level.onload = function() {
    maps = [];
    maps.push(new Map(level));
};
level.src = "level/level1.png";


var Map = function(level) {
    this.level = level; // level debe ser una imagen
    this.width = this.level.width;
    this.height = this.level.height;
    this.gapSize = 82;
    this.gapProySize = this.gapSize * 0.8943885546;
    this.gapX = Math.floor(this.width / 2 - 1) * this.gapSize;
    this.gapY = 0;
    ctx.drawImage(this.level, 0, 0);
    var tempData = ctx.getImageData(0,0,this.width, this.height);
    var data = tempData.data;
    this.tiles = [];
    for (var i = 0; i < data.length; i += 4) {
        var tempX = (i/4) % this.width;
        var tempY = Math.floor((i/4) / this.width);
        if(data[i] < 10 && data[i+1] < 10 && data[i+2] < 10) {var tempType = "black";}
        if(data[i] > 240 && data[i+1] > 240 && data[i+2] > 240) {var tempType = "white";}
        if(data[i] > 240 && data[i+1] < 10 && data[i+2] < 10) {var tempType = "red";}
        if(data[i] < 10 && data[i+1] > 255 && data[i+2] < 10) {var tempType = "green";}
        if(data[i] < 10 && data[i+1] < 10 && data[i+2] > 240) {var tempType = "blue";}
        if(data[i] > 240 && data[i+1] > 240 && data[i+2] < 10) {var tempType = "yellow";}
        if(data[i] > 240 && data[i+1] < 10 && data[i+2] > 240) {var tempType = "magenta";}
        if(data[i] < 10 && data[i+1] > 240 && data[i+2] > 240) {var tempType = "cyan";}
        this.tiles.push(new Tile(tempType, tempX, tempY));
    }
};

function updateMaps() {
    for (var map in maps) {
        maps[map].tick();
    }
}

Map.prototype.tick = function(){
    this.update();
    this.render();
};

Map.prototype.render = function() {
    for (var tile in this.tiles) {
        var iso = Util.cartesianToIso(this.tiles[tile].x * this.gapProySize / 2, this.tiles[tile].y * this.gapProySize / 2);
        ctx.drawImage(this.tiles[tile].img, iso.x + this.gapX, iso.y + this.gapY);
        //console.log("x: "+this.tiles[tile].x+"; y: "+this.tiles[tile].y)
    }
};

Map.prototype.update = function() {

};