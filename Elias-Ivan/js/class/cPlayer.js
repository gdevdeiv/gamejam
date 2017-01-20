cPlayer = function(color){
    this.posX = Math.random ()*500;
    this.posY = Math.random ()*500;

    this.width = 10;
    this.height = 10;

    this.speedY = 0;
    this.speedX = 0;

    this.hp = 100;
    this.color = color;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }
}

var player = [];
for(var i = 0;i<100;i++){
    player[i] = new cPlayer("red");
}
