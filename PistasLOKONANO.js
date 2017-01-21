/* 
MANZANA -1 / HACHA -2 / BOTAS -3 / CARNE -4 / VESTIMENTA - 5 // BARRO - 6
PICO -7 / PIEDRA -8 / PALA 9 / PIEL -10 / MADERA -11 
*/
function Pistas(){

    var eventNum = [];
    eventNum[0] = null;
    eventNum[1] = null;

    this.txt = [];

    this.txt[0] = "Hoy vas a tener suerte";

    this.txt[1] = "Deberías buscar alimento para sobrevivir."; 
    this.txt[2] = "Te sientes hambriento.";

    this.txt[] = "Parece que están llegando nuves..."; 
    this.txt[] = "Parece que están llegando nuves oscuras."; 


    this.txt[] = "Bajarán las temperaturas drásticamente."; 
    this.txt[] = "Tienes frío."; 

    this.txt[] = "Hay animales salvajes cerca, podrían atacarte.";
    this.txt[] = "Has visto pisadas de osos cerca de la casa."; //
    this.txt[] = "Se escuchan aullidos de lobo bastante cercanos."; //  

    this.txt[] = ""; // 
    this.txt[] = ""; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 
    this.txt[] = "Deberías buscar alimento para sobrevivir."; // 

    this.creaPista = function(){
        eventNum[0] = Math.floor(Math.random()*this.txt.length-1);
        do{
            eventNum[1] = Math.floor(Math.random()*this.txt.length-1);
        }while(eventNum[0] == eventNum[1]);
        
        console.log(eventNum[0]+"/-/"+eventNum[1]);
        Hud.announceRound(eventNum[0],eventNum[1]);
    }
}

var pistas = new Pistas();

