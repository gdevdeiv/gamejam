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
	this.tips = [
		"Hoy vas a tener suerte",
		"Deberías buscar alimento para sobrevivir.",
		"Te sientes hambriento.",
		"Parece que están llegando nuves...",
		"Parece que están llegando nuves oscuras.",
		"Bajarán las temperaturas drásticamente.",
		"Tienes frío.",
		"Hay animales salvajes cerca, podrían atacarte.",
		"Has visto pisadas de osos cerca de la casa.",
		"Se escuchan aullidos de lobo bastante cercanos.",
		"ha llovido esta noche y el suelo esta embarrado",
		"ha nevado esta noche y ahora esta todo nevado"
	]
}

Round.prototype.start = function () {
	this.lastRound++;
	this.roundTime = this.duration * 1000;
	this.roundTime += Date.now();
	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
	Hud.announceRound(this.tips[Math.floor(Math.random() * this.tips.length)]);
	this.started = true;
};

Round.prototype.tick = function() {
	if (this.remaining === null || this.remaining <= 0 || !this.started) { return; }

	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
	this.minute = Math.floor(this.remaining / 60);
	this.seconds = this.remaining - this.minute * 60;

	Hud.remainingTime(this.minute, this.seconds);
	
	if(this.minute === 0 && this.seconds < 1) {
		game.map.sweeping = true;
		this.started = false;
	}
}
