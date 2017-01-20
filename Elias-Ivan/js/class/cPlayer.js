cPlayer = function(color){
    this.posX = Math.random ()*100;
    this.posY = Math.random ()*100;

    this.speedY = 0;
    this.speedX = 0;

    this.hp = 100;
    this.color = color;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,10,10);
    }
}

var player = [];
player[0] = new cPlayer("red");
player[1] = new cPlayer("blue");