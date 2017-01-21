$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){

    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}