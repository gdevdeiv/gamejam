function MenuStart() {
	Menu.call(this, {
		element: ".menu.start",
		visible: false
	});

	var that = this;

	$(this.element).fadeIn(2000, function() {
		$(that.element + ' .loading').fadeOut(500, function() {
			$(that.element + ' .loaded').fadeIn(500);
		});
	});

	$(this.element + ' .button.play').click(function() {
		$(that.element).fadeOut(500, function() {
			game.map.init();
			game.inGame = true;
			game.round.roundTime = game.round.duration * 1000;
			game.round.roundTime += Date.now();
		});
	});

	$(this.element + ' .button.credits').click(function() {
		// TODO: Credits screen?
	});
}

MenuStart.prototype = Object.create(Menu.prototype);
MenuStart.prototype.constructor = MenuStart;
