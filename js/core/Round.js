var Round = function(round, game) {
    this.round = round;
	this.lastRound = 0;
    this.remaining = null;
    this.duration = 30;
    this.roundTime = this.duration * 1000;
    this.roundTime += Date.now();
    this.seconds = null;
    this.minute = null;
	this.started = false;
}

Round.prototype.start = function () {
	for (var tile in game.map.tiles) {
		game.map.tiles[tile].frozen = false;
	}
	this.lastRound++;
	this.started = true;
	this.roundTime = this.duration * 1000;
    this.roundTime += Date.now();
	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
};

Round.prototype.tick = function() {
	if (this.remaining !== null && this.remaining <= 0 || !this.started) { return; }

    this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
    this.minute = Math.floor(this.remaining / 60);
    this.seconds = this.remaining - this.minute * 60;
    //console.log(this.remaining)
    //this.minute = this.remaining.getMin

	Hud.remainingTime(this.minute, this.seconds);
    //console.log(this.minute+","+this.seconds)
    
    if(this.minute === 0 && this.seconds < 1) {
        //console.log("fin round")
		game.map.sweeping = true;
		this.started = false;
        /*this.round++;
        this.roundTime = this.duration * 1000;
        this.roundTime += Date.now();
        this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);*/
    }
}
