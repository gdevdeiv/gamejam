$(document).ready(function(){
    temp = setTimeout(loop, 0);
});

function loop() {
    
    clearTimeout(temp);
    temp = setTimeout(loop, 1000 / fps);
}