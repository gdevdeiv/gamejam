$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){

    functionsIvan();

    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}