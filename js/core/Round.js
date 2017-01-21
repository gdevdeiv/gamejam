var Round = function(round, game) {
    this.round = round;
    this.remaining = null;
    this.duration = 5;
    this.roundTime = this.duration * 1000;
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
    
    if(this.minute === 0 && this.seconds < 1) {
        console.log("fin round")
        this.round++;
        this.roundTime = this.duration * 1000;
        this.roundTime += Date.now();
        this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
    }
}