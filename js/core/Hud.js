function Hud() {}

Hud.announceRound = function(tip) {
	$(".hud .round").text("Round " + (game.round.lastRound + 1)).fadeIn(500);
	$(".hud .tip").text(tip).fadeIn(500);
	setTimeout(function () {
		$(".hud .round").fadeOut(500);
		$(".hud .tip").fadeOut(500, function() {
			$(".hud .time").fadeIn(500);
		});
	}, 2000);
};

Hud.remainingTime = function(minute, seconds) {
	$(".hud .time").text(minute + ":" + ("0" + seconds).slice(-2));
};

Hud.drawInventory = function() {
	for (var item in game.player.inventario) {
		var type = game.player.inventario[item];
		game.context.strokeStyle = "black";
		game.context.beginPath();
		game.context.moveTo(20+100*item,20);
		game.context.lineTo(20+100*item+100,20);
		game.context.lineTo(20+100*item+100,20+100);
		game.context.lineTo(20+100*item,20+100);
		game.context.lineTo(20+100*item,20);
		game.context.stroke();
		game.context.fillStyle = "rgba(255,0,0,0.3)";
		game.context.fill();
		game.context.drawImage(itemImg[type], 25+100*item, 25, 90, 90);
		game.context.fillStyle = "white";
		game.context.font = "30px Arial";
		game.context.fillText(""+(parseInt(item) + 1),25+100*item,45);
		
	}
};

Hud.drawWarehouse = function() {
	for (var item in game.warehouse.stored) {
		var type = game.warehouse.stored[item];
		game.context.beginPath();
		game.context.moveTo(game.canvas.width - 60, item * 50 + 10);
		game.context.lineTo(game.canvas.width-10, item * 50 + 10);
		game.context.lineTo(game.canvas.width-10, item * 50 + 60);
		game.context.lineTo(game.canvas.width - 60, item*50 + 60);
		game.context.lineTo(game.canvas.width - 60, item*50 + 10);
		game.context.stroke();
		game.context.fillStyle = "rgba(0,255,0,0.3)";
		game.context.fill();
		game.context.drawImage(itemImg[type], game.canvas.width - 60, item*50+10, 50, 50);
	}
}

Hud.dead = function() {
	game.gameOver = true;
	game.round.survived = false;
	$(".hud .time").fadeOut(500, function () {
		$(game.menus.over.element).fadeIn(500);
	});
};
