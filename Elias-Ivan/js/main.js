$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){
    resizeCanvas();

    clearTimeout(temp);
    temp = setTimeout(loop,33);
}