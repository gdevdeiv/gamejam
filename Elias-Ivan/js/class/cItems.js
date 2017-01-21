function cItem(id){
    this.posX = Math.random ()*600;
    this.posY = Math.random ()*600;

    this.widht = 12;
    this.height = 12;

    this.id = id;
    this.color;
    switch(this.id){
        case 1:
            this.color = "red";
        break;
        case 2:
            this.color = "blue";
        break;
        case 3:
            this.color = "green";
        break;
        case 4:
            this.color = "grey";
        break;
        case 5:
            this.color = "yellow";
        break;
        case 6:
            this.color = "orange";
        break;
        case 7:
            this.color = "aquamarine";
        break;
        case 8:
            this.color = "purple";
        break;
        case 9:
            this.color = "black";
        break;
        case 10:
            this.color = "brown";
        break;
        default:
            console.log("item no esperado")
        break;
    }
    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
        
    }
}

var item = [];
for(var i = 0;i<10;i++){
    item[i] = new cItem(i+1);
    console.log("este es el item: "+item[i].id);
}
