$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){
    functionsIvan()
    player.draw();
    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}