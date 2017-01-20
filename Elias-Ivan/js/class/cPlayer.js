cPlayer = function(color){


    this.width = 10;
    this.height = 10;

    this.col = 0;
    this.row = 0;

    this.tileWidth = 100;
    this.posX = this.col*this.tileWidth;
    this.posY = this.row*this.tileWidth;

    this.hp = 100;
    this.color = color;

    this.draw = function(){
        if(this.posX<this.col*this.tileWidth){}
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }
}

var player = new cPlayer("red");
