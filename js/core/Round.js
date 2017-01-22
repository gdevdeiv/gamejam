var Round = function(round, game) {
	this.round = round;
	this.lastRound = -1;
	this.remaining = null;
	this.duration = 30;
	this.roundTime = this.duration * 1000;
	this.roundTime += Date.now();
	this.seconds = null;
	this.minute = null;
	this.started = false;
	this.tips = [
		{ msg: "Hoy vas a tener suerte.", event: null },
		{ msg: "Deberías buscar alimento para sobrevivir.", event: { food: 2 } },
		{ msg: "Te sientes hambriento.", event: { food: 1 } },
		{ msg: "Parece que están llegando nubes.", event: { leather: 1 } },
		{ msg: "Parece que están llegando nubes oscuras.", event: { leather: 2 } },
		{ msg: "Bajarán las temperaturas drásticamente.", event: { wood: 1 } },
		{ msg: "Tienes frío.", event: { coat: 1 } },
		{ msg: "Hay animales salvajes cerca, podrían atacarte.", event: { axe: 1 } },
		{ msg: "Has visto pisadas de osos cerca de la casa.", event: { axe: 1 } },
		{ msg: "Se escuchan aullidos de lobo bastante cercanos.", event: { axe: 1 } },
		{ msg: "Ha llovido esta noche y el suelo esta embarrado.", event: { boots: 1 } },
		{ msg: "Ha nevado esta noche y ahora esta todo nevado.", event: { shovel: 1 } }
	];
}

Round.prototype.start = function () {
	this.lastRound++;
	this.roundTime = this.duration * 1000;
	this.roundTime += Date.now();
	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
	Hud.announceRound(this.tips[Math.floor(Math.random() * this.tips.length)].msg);
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
