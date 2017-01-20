function resizeCanvas(){
    $("#canvas").attr("height",windowHeight);
    $("#canvas").attr("width",windowWidth);
}


$(document).keydown(function(event){
    if(event.which == 32){
        console.log("payaso");
    }else if(event.which == 37){
        player.col--;
    }else if(event.which == 39){
        player.col++;
    }else if(event.which == 38){
        player.row--;
    }else if(event.which == 40){
        player.row++;
    }
});
