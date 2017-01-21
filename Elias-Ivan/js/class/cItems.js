function cItem(id){
    this.tileWidth = 50;
    this.col = Math.floor(Math.random()*(Math.floor(windowHeight/this.tileWidth)));
    this.row = Math.floor(Math.random()*(Math.floor(windowWidth/this.tileWidth)));
    console.log(this.col+"//"+this.row);
   

    this.width = 25;
    this.height = 25;

    this.posX = (this.col*this.tileWidth)+this.width/2;
    this.posY = (this.row*this.tileWidth)+this.height/2;
    
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
for(var i = 0;i<Math.floor(Math.random()*5000);i++){
    item[i] = new cItem(Math.ceil(Math.random()*10));
  //  console.log("este es el item: "+item[i].id);
}
