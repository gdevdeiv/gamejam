function MenuCredits() {
	Menu.call(this, {
		element: ".menu.credits",
		visible: false
	});

	var that = this;

	$(this.element + ' .button.back').click(function() {
		$(that.element).fadeOut(500, function() {
			$(game.menus.start.element).fadeIn(500);
		});
	});
}

MenuCredits.prototype = Object.create(Menu.prototype);
MenuCredits.prototype.constructor = MenuCredits;
