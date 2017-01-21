function cPlayer(){
    this.width = 35;
    this.height = this.width;

    this.tileWidth = 50;

    this.col = 0;
    this.row = 0;

    this.posX = (this.col*this.tileWidth)+(this.tileWidth/2-this.width/2);
    this.posY = (this.row*this.tileWidth)+(this.tileWidth/2-this.width/2);
    
    this.hp = 100;
    this.moveX = true;
    this.moveY = true;

    this.dirY = "";
    this.dirX = "";
    this.draw = function(){

        if(this.moveX && this.dirX=="right"){
            this.col++;
        }else if(this.moveX && this.dirX == "left"){
            this.col--;
        }

        if(this.moveY && this.dirY=="up"){
            this.row--;
        }else if(this.moveY && this.dirY == "down"){
            this.row++;
        }
       //console.log(this.dirX);
        
            // POS X
        if(this.posX != this.col*this.tileWidth+(this.tileWidth/2-this.width/2)){
            if(this.posX<this.col*this.tileWidth+(this.tileWidth/2-this.width/2)){
                this.posX++;
            }else if(this.posX>this.col*this.tileWidth+(this.tileWidth/2-this.width/2)){
                this.posX--;
            }
            this.moveX = false;
        }else{
            this.moveX = true;
        }

        // POS Y
        if(this.posY != this.row*this.tileWidth+(this.tileWidth/2-this.height/2)){
            if(this.posY<this.row*this.tileWidth+(this.tileWidth/2-this.height/2)){
                this.posY++;
            }else if(this.posY>this.row*this.tileWidth+(this.tileWidth/2-this.height/2)){
                this.posY--;
            }
            this.moveY = false;
        }else{
            this.moveY = true;
        }

        ctx.fillStyle = "rgba(50,150,200,05)";
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }

    $(document).keydown(function(event){
    
    if(event.which == 32){
        console.log("payaso");
    }
    
    if(event.which == 37 && player.moveX){
        player.dirX = "left";
    }
    if(event.which == 39 && player.moveX){
        player.dirX = "right";
    }
    
    if(event.which == 38 && player.moveY){
        player.dirY = "up";
    }
    if(event.which == 40 && player.moveY){
        player.dirY = "down";
    }
});

$(document).keyup(function(event){
    if(event.which == 32){
        console.log("payaso");
    }
    
    if(event.which == 37){
        player.dirX = "";
    }
    if(event.which == 39){
        player.dirX = "";
    }
    
    if(event.which == 38){
        player.dirY = "";
    }
    if(event.which == 40){
        player.dirY = "";
    }
});

}

var player = new cPlayer();
