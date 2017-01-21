function Hud() {}

Hud.announceRound = function(tip) {
	$(".hud .round").text("Round " + (game.round.lastRound + 1)).fadeIn(500);
	$(".hud .tip").text(tip).fadeIn(500);
	setTimeout(function () {
		$(".hud .round").fadeOut(500);
		$(".hud .tip").fadeOut(500);
		game.round.start();
	}, 1000);
};

Hud.remainingTime = function(minute, seconds) {
	$(".hud .time").text(minute + ":" + ("0" + seconds).slice(-2));
}
