function Hud() {}

Hud.announceRound = function(round) {
	$(".hud .round").text("Round " + round);
};

Hud.remainingTime = function(minute, seconds) {
	$(".hud .time").text(minute + ":" + ("0" + seconds).slice(-2));
}
