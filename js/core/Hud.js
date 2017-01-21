function Hud() {
	
	this.announceRound = function(round) {
		$(".hud .round").text("Round " + round);
	}.bind(this);

	this.remainingTime = function(time) {
		$(".hud .time").text(time);
	}.bind(this);
}
