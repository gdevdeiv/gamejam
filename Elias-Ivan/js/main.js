$(document).ready(function(){
    start();
});

function start(){
    loop();
}

function loop(){

    functionsIvan();
    for(var i in item){item[i].draw()}
    clearTimeout(temp);
    temp = setTimeout(loop,fps);
}