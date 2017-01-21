function functionsIvanElias(){
    resizeCanvasIvan();
    dibujarItems();
    player.draw();
}

function resizeCanvasIvan(){
    $("#canvas").attr("height",windowHeight);
    $("#canvas").attr("width",windowWidth);
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




function dibujarItems(){
    for(var r in item){item[r].draw();}
}