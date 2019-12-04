let datosElfo = new Elfo();
let datosLancero = new Lancero();
let datosCaballero = new Caballero();
function Elfo(){
	this.personaje = "elfo"
	this.hpMax = 100;
	this.aumentoEnergia = 0.45
	this.ataque = 15;
	this.velocidad = 300;
	this.ataque = 7;
	this.actualizarSpriteDerecha = 5;
	this.actualizarSpriteIzquierda = 20;

	this.limiteAnimacion = {
		iddle: 4,
		salto: 4,
		ataque: 4,
		defiende: 0,
		muerte: 4,
		corre: 4,
		herido: 4,
	}

	this.frameAction = {
		salto:		70,
		ataque: 	20,
		herido:		30,
		muerte:		50,
	};

	this.sizeArma = {
		width:	20,
		height:	20,
	}

	this.sizeHitbox = {
		width:	60,
		height:	89
	}

	this.armaOffSet = {
		x: -5,
		y:-5,
	}

	this.armaActualizar = {
		x: 35,
		y: 9,
	}

	this.loadSprites = function(escena){

	escena.load.spritesheet(	'elfoIddle',
								'assets/images/personaje/' + this.personaje + '/iddle.png',
								{frameWidth:89,frameHeight:90});

	escena.load.spritesheet(	'elfoSalto',
								'assets/images/personaje/'+this.personaje +'/salto.png',
								{frameWidth:89,frameHeight:97});
	escena.load.spritesheet(	'elfoAtaque',
								'assets/images/personaje/'+ this.personaje +'/ataque.png',
								{frameWidth:89,frameHeight:89})

	escena.load.spritesheet(	'elfoDefiende',
								'assets/images/personaje/' + this.personaje + '/defiende.png',
								{frameWidth:89,frameHeight:89})

	escena.load.spritesheet(	'elfoMuerte',
								'assets/images/personaje/' + this.personaje + '/muere.png',
								{frameWidth:89,frameHeight:76})

	escena.load.spritesheet(	'elfoCorre',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:89,frameHeight:90})

	escena.load.spritesheet(	'elfoHerido',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:89,frameHeight:82})
	}

}

function Lancero(){
	this.personaje = "lancero"
	this.hpMax = 100;
	this.aumentoEnergia = 0.3
	this.ataque = 25;
	this.velocidad = 200;
	this.ataque = 25;
	this.actualizarSpriteDerecha = 8;
	this.actualizarSpriteIzquierda = 45;

	this.frameAction = {
		salto:		70,
		ataque: 	20,
		herido:		30,
		muerte:		50,
	};

	this.sizeArma = {
		width:	20,
		height:	20,
	}

	this.sizeHitbox = {
		width:	32,
		height:	89
	}

	this.armaOffSet = {
		x: -5,
		y:-5,
	}

	this.armaActualizar = {
		x: 35,
		y: 9,
	}

	this.limiteAnimacion = {
		iddle: 6,
		salto: 6,
		ataque: 4,
		defiende: 0,
		muerte: 6,
		corre: 6,
		herido: 6
	}

	this.loadSprites = function(escena){

	escena.load.spritesheet(	'lanceroIddle',
								'assets/images/personaje/' + this.personaje + '/iddle.png',
								{frameWidth:89,frameHeight:88});

	escena.load.spritesheet(	'lanceroSalto',
								'assets/images/personaje/'+ this.personaje +'/salto.png',
								{frameWidth:89,frameHeight:88});
	escena.load.spritesheet(	'lanceroAtaque',
								'assets/images/personaje/'+ this.personaje +'/ataque.png',
								{frameWidth:89,frameHeight:88})

	escena.load.spritesheet(	'lanceroDefiende',
								'assets/images/personaje/' + this.personaje + '/defiende.png',
								{frameWidth:89,frameHeight:88})

	escena.load.spritesheet(	'lanceroMuerte',
								'assets/images/personaje/' + this.personaje + '/muere.png',
								{frameWidth:89,frameHeight:88})

	escena.load.spritesheet(	'lanceroCorre',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:89,frameHeight:88})

	escena.load.spritesheet(	'lanceroHerido',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:89,frameHeight:88})
	}



}

function Caballero(){
	this.personaje = "caballero"
	this.hpMax = 150;
	this.aumentoEnergia = 0.25
	this.ataque = 25;
	this.velocidad = 100;
	this.ataque = 35;
	this.actualizarSpriteDerecha = 8;
	this.actualizarSpriteIzquierda = 45;

	this.frameAction = {
		salto:		70,
		ataque: 	20,
		herido:		30,
		muerte:		50,
	};

	this.sizeArma = {
		width:	20,
		height:	20,
	}

	this.sizeHitbox = {
		width:	32,
		height:	89
	}

	this.armaOffSet = {
		x: -5,
		y:-5,
	}

	this.armaActualizar = {
		x: 35,
		y: 9,
	}

	this.limiteAnimacion = {
		iddle: 6,
		salto: 6,
		ataque: 4,
		defiende: 0,
		muerte: 6,
		corre: 6,
		herido: 6
	}

	this.loadSprites = function(escena){

	escena.load.spritesheet(	'caballeroIddle',
								'assets/images/personaje/' + this.personaje + '/iddle.png',
								{frameWidth:90,frameHeight:95});

	escena.load.spritesheet(	'caballeroSalto',
								'assets/images/personaje/'+ this.personaje +'/salto.png',
								{frameWidth:90,frameHeight:95});
	escena.load.spritesheet(	'caballeroAtaque',
								'assets/images/personaje/'+ this.personaje +'/ataque.png',
								{frameWidth:90,frameHeight:95})

	escena.load.spritesheet(	'caballeroDefiende',
								'assets/images/personaje/' + this.personaje + '/defiende.png',
								{frameWidth:90,frameHeight:95})

	escena.load.spritesheet(	'caballeroMuerte',
								'assets/images/personaje/' + this.personaje + '/muere.png',
								{frameWidth:90,frameHeight:95})

	escena.load.spritesheet(	'caballeroCorre',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:90,frameHeight:95})

	escena.load.spritesheet(	'caballeroHerido',
								'assets/images/personaje/' + this.personaje + '/correr.png',
								{frameWidth:90,frameHeight:95})
	}




}
