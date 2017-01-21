$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){

    functionsIvanElias();
    

    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}