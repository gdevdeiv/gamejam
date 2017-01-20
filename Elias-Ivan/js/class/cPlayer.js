function cPlayer(){
    this.width = 10;
    this.height = 10;

    this.col = 0;
    this.row = 0;

    this.tileWidth = 100;
    this.posX = this.col*this.tileWidth;
    this.posY = this.row*this.tileWidth;

    this.hp = 100;
    this.moveX = true;
    this.moveY = true;
    this.draw = function(){

            // POS X
        if(this.posX != this.col*this.tileWidth){
            if(this.posX<this.col*this.tileWidth){
                this.posX++;
            }else if(this.posX>this.col*this.tileWidth){
                this.posX--;
            }
            this.moveX = false;
        }else{
            this.moveX = true;
        }

        // POS Y
        if(this.posY != this.row*this.tileWidth){
            if(this.posY<this.row*this.tileWidth){
                this.posY++;
            }else if(this.posY>this.row*this.tileWidth){
                this.posY--;
            }
            this.moveY = false;
        }else{
            this.moveY = true;
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }
}

var player = new cPlayer();
