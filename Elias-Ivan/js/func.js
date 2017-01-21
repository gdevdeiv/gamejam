function functionsIvanElias(){
    resizeCanvasIvan();
    dibujarItems();
    player.draw();
}

function resizeCanvasIvan(){
    $("#canvas").attr("height",windowHeight);
    $("#canvas").attr("width",windowWidth);
}

function dibujarItems(){
    for(var r in item){item[r].draw();}
}