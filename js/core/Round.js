var Round = function(round, game) {
    this.round = round;
    this.remaining = null;
    this.roundTime = 90 * 1000;
    this.roundTime += Date.now();
    console.log(this.roundTime)

    
    this.seconds = null;
    this.minute = null;
}

Round.prototype.tick = function() {
    this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
    this.minute = Math.floor(this.remaining / 60);
    this.seconds = this.remaining - this.minute * 60;
    //console.log(this.remaining)
    //this.minute = this.remaining.getMin



    console.log(this.minute+","+this.seconds)
    
    if(this.roundTime === 0) {
        console.log("fin round")
        this.round++;
        this.roundTime = 3 * game.fps;
    }
}