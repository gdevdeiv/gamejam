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
};

Hud.drawInventory = function() {
	for (var item in game.player.inventario) {
		var type = game.player.inventario[item];
		game.context.drawImage(itemImg[type], 20+100*item, 20, 100, 100);
		
	}
};

Hud.dead = function() {
	game.gameOver = true;
	$(game.menus.over.element).fadeIn(500);
};
