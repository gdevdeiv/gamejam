$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){
    resizeCanvas();
    for(var p in player){
        player[p].draw();
    }
    clearTimeout(temp);
    temp = setTimeout(loop,33);
}