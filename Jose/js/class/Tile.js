var Tile = function(type,x,y) {
    this.type = type;
    this.x = x;
    this.y = y;
    if(this.type === "white"){this.img = "img/tiles/white.png";}
    if(this.type === "black"){this.img = "img/tiles/black.png";}
    if(this.type === "red"){this.img = "img/tiles/red.png";}
    if(this.type === "green"){this.img = "img/tiles/green.png";}
    if(this.type === "blue"){this.img = "img/tiles/blue.png";}
    if(this.type === "yellow"){this.img = "img/tiles/yellow.png";}
    if(this.type === "cyan"){this.img = "img/tiles/cyan.png";}
    if(this.type === "magenta"){this.img = "img/tiles/magenta.png";}
    
}