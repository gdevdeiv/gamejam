function cPlayer(){
    this.width = 10;
    this.height = 10;

    this.col = 0;
    this.row = 0;

    this.tileWidth = 50;
    this.posX = this.col*this.tileWidth;
    this.posY = this.row*this.tileWidth;

    this.hp = 100;
    this.moveX = true;
    this.moveY = true;
    this.draw = function(){

            // POS X
        
            if(this.posX<this.col*this.tileWidth){
                this.posX++;
            }else if(this.posX>this.col*this.tileWidth){
                this.posX--;
            }
 
            

        // POS Y
       
            if(this.posY<this.row*this.tileWidth){
                this.posY++;
            }else if(this.posY>this.row*this.tileWidth){
                this.posY--;
            }

            console.log(this.row*this.tileWidth);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }
}

var player = new cPlayer();
