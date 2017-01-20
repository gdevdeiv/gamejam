cItem = function(id){
    this.posX = Math.random ()*600;
    this.posy = Math.random ()*600;

    this.widht = 12;
    this.height = 12;

    this.id = id;
    this.color = "black";

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);

    }
}

var item = [];
for(var i = 0;i<100;i++){
    item[i] = new cItem(Math.round(Math.random()*100));
    console.log("este es el item: "+item[i].id);
}
