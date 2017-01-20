$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){
    resizeCanvas();
    player.draw();
    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}