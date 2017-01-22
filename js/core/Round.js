var Round = function(round, game) {
	var that = this;
	this.round = round;
	this.lastRound = -1;
	this.remaining = null;
	this.duration = 20;
	this.roundTime = this.duration * 1000;
	this.roundTime += Date.now();
	this.seconds = null;
	this.minute = null;
	this.started = false;
	this.matrix = {
		food: [1, 4],
		axe: [2],
		boots: [3],
		coat: [5],
		mud: [6],
		pickaxe: [7],
		rock: [8],
		shovel: [9],
		leather: [10],
		wood: [11]
	};
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
	this.survived = false;
}

Round.prototype.start = function () {
	this.lastRound++;
	this.roundTime = this.duration * 1000;
	this.roundTime += Date.now();
	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
	this.tip = this.tips[Math.floor(Math.random() * this.tips.length)];
	Hud.announceRound(this.tip.msg);
	this.started = true;
};

Round.prototype.tick = function() {
	if (this.remaining === null || this.remaining <= 0 || !this.started) { return; }

	this.remaining = Math.ceil((this.roundTime - Date.now()) / 1000);
	this.minute = Math.floor(this.remaining / 60);
	this.seconds = this.remaining - this.minute * 60;

	Hud.remainingTime(this.minute, this.seconds);
	
	if(this.minute === 0 && this.seconds < 1) {
		this.survived = false;
		if (this.tip.event !== null) {
			var _req = 0;
			for (var event in this.tip.event) {
				for (var _mat in this.matrix[event]) {
					if ($.inArray(_mat, game.warehouse.stored)) {
						_req++;
					}
				}
			}
			for (var event in this.tip.event) {
				if (_req >= this.tip.event[event]) {
					this.survived = true;
				}
			}
			console.log("El _req vale: " + _req);
			console.log("Has sobrevivido? " + this.survived);
			console.log("Items guardados: " + game.warehouse.stored);
		}
		if (this.survived) {
			Hud.dead();
		} else {
			setTimeout(function() {
				that.start();
			}, 2500);
		}
		game.map.sweeping = true;
		this.started = false;
	}
}
