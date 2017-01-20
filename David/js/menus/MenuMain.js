function MenuMain() {
	Menu.call(this, {
		element: ".menu.main",
		visible: false
	});
}

MenuMain.prototype = Object.create(Menu.prototype);
MenuMain.prototype.constructor = MenuMain;
