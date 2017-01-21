var white = new Image();
white.src = "img/tiles/white.png";
var black = new Image();
black.src = "img/tiles/black.png";
var red = new Image();
red.src = "img/tiles/red.png";
var green = new Image();
green.src = "img/tiles/green.png";
var blue = new Image();
blue.src = "img/tiles/blue.png";
var yellow = new Image();
yellow.src = "img/tiles/yellow.png";
var cyan = new Image();
cyan.src = "img/tiles/cyan.png";
var magenta = new Image();
magenta.src = "img/tiles/magenta.png";
var Tile = function(type,x,y) {
    this.type = type;
    this.x = x;
    this.y = y;
    if(this.type === "white"){this.img = white;}
    if(this.type === "black"){this.img = black;}
    if(this.type === "red"){this.img = red;}
    if(this.type === "green"){this.img = green;}
    if(this.type === "blue"){this.img = blue;}
    if(this.type === "yellow"){this.img = yellow;}
    if(this.type === "cyan"){this.img = cyan;}
    if(this.type === "magenta"){this.img = magenta;}
}