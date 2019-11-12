function Juego(){
///////////// MAPA /////////////////////////
	this.mapaActual = 3;
	this.plataformas
	//Función preloadMapas
	//	-Recive: escena donde se añaden los sprites y los offsets de las plataformas
	//Añade el fondo de pantalla y las hitboxes de las plataformas según el mapa elegido
	this.preloadMapas = function(escena){
		escena.load.image("fondo","assets/images/backgrounds/mapas/escenario" + this.mapaActual + ".png").depth = 10;
		escena.load.image("placeHolder","assets/images/backgrounds/mapas/placeHolderPlataformas.png")
		this.plataformas = escena.physics.add.staticGroup();
		let actual
		switch(this.mapaActual){
			case 1:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual = this.plataformas.create(580, 320, 'placeHolder');
				actual.setSize(325,1).setOffset(0,0);
				actual = this.plataformas.create(115, 320, 'placeHolder');
				actual.setSize(247,1).setOffset(0,0);
				break;
			case 2:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual = this.plataformas.create(100, 320, 'placeHolder');
				actual.setSize(245,1).setOffset(0,0);
				actual = this.plataformas.create(475, 320, 'placeHolder');
				actual.setSize(190,1).setOffset(0,0);
				actual = this.plataformas.create(732, 320, 'placeHolder');
				actual.setSize(190,1).setOffset(0,0);
				
				break;
			case 3:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual = this.plataformas.create(100, 320, 'placeHolder');
				actual.setSize(325,1).setOffset(0,0);
				actual = this.plataformas.create(650, 320, 'placeHolder');
				actual.setSize(250,1).setOffset(0,0);
				break
			
		}
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// UI ////////////////////////////////////////////////////////////////////////
	this.preloadUI = function(escena){
		escena.load.image("marcoJ1","assets/images/userInterface/marcoJugador1.png")
		escena.load.image("marcoJ2","assets/images/userInterface/marcoJugador2.png")
		escena.load.image("barraMarco","assets/images/userInterface/barraHP.png")
		escena.load.image("indicadorHPJugador1","assets/images/userInterface/hpJugador1.png")
		escena.load.image("indicadorHPJugador2","assets/images/userInterface/hpJugador2.png")
		escena.load.image("fondoBarra","assets/images/userInterface/fondoBarra.png");
		escena.load.image("barraEnergia","assets/images/userInterface/barraEnergia.png")
	}
	
	this.createUI = function(escena){
		escena.add.image(5,5,"marcoJ1").setOrigin(0);
		
		let temporal = escena.add.image(86,25,"fondoBarra").setOrigin(0);
		temporal.displayWidth = 238;
		temporal.displayHeight = 20;
		
		temporal = escena.add.image(86,25,"barraMarco");
		temporal.setOrigin(0);
		temporal.depth = 7;
		
		jugador1.barraHP = escena.add.image(86,25,"indicadorHPJugador1")
		jugador1.barraHP.setOrigin(0);
		jugador1.barraHP.displayWidth = 215;
		jugador1.barraHP.displayHeight = 20;
		
		
		temporal = escena.add.image(86,45,"barraMarco");
		temporal.setOrigin(0);
		temporal.depth = 7;
		temporal.displayWidth = 178;
		temporal.displayHeight = 15;
		
		temporal = escena.add.image(86,45,"fondoBarra");
		temporal.setOrigin(0);
		temporal.displayWidth = 178;
		temporal.displayHeight = 15;
		
		escena.add.image(990,10,"marcoJ2").setOrigin(1,0);
		
		temporal = escena.add.image(917,25,"barraMarco");
		temporal.flipX = true;
		temporal.setOrigin(1,0);
		temporal.depth = 7;
		
		temporal = escena.add.image(917,45,"barraMarco");
		temporal.setOrigin(1,0);
		temporal.flipX = true
		temporal.depth = 7;
		temporal.displayWidth = 178;
		temporal.displayHeight = 15;
		
		temporal = escena.add.image(917,25,"fondoBarra")
		temporal.setOrigin(1,0);
		temporal.displayWidth = 238;
		temporal.displayHeight = 20;
		
		temporal = escena.add.image(917,45,"fondoBarra")
		temporal.setOrigin(1,0);
		temporal.displayWidth = 178;
		temporal.displayHeight = 15;
		
		jugador2.barraHP = escena.add.image(917,25,"indicadorHPJugador2");
		jugador2.barraHP.setOrigin(1,0)
		jugador2.barraHP.displayWidth = 238;
		jugador2.barraHP.displayHeight = 20;
		
		
		
		
	}

///////////// PERSONAJE /////////////////////////////////////////////////////////////////////////////////////
	this.personajeJugador1 = "caballero";
	this.personajeJugador2 = "caballero";
	
	this.checkInputPersonaje1 = function(escena){
		escena.input.keyboard.on('keyup-' + 'A', function (event){jugador1.controladorTecladoUp("movIzquierda")});
		escena.input.keyboard.on('keyup-' + 'D', function (event){jugador1.controladorTecladoUp("movDerecha")});
		escena.input.keyboard.on('keyup-' + 'S', function (event){jugador1.controladorTecladoUp("abajo")})
		
		
		
		escena.input.keyboard.on('keydown-' + 'A', function (event) {jugador1.controladorTecladoDown("movIzquierda")});	
		escena.input.keyboard.on('keydown-' + 'D', function (event){jugador1.controladorTecladoDown("movDerecha")});
		escena.input.keyboard.on('keydown-' + 'W',function (event){jugador1.controladorTecladoDown("salto")});
		escena.input.keyboard.on('keydown-' + 'S', function (event){jugador1.controladorTecladoDown("abajo")})
		escena.input.keyboard.on('keydown-' + 'Q', function(event){jugador1.controladorTecladoDown("ataque")})
	}
	
	this.checkInputPersonaje2 = function(escena){
		escena.input.keyboard.on('keyup-' + 'J', function (event){jugador2.controladorTecladoUp("movIzquierda")});
		escena.input.keyboard.on('keyup-' + 'L', function (event){jugador2.controladorTecladoUp("movDerecha")});
		escena.input.keyboard.on('keyup-' + 'K', function (event){jugador2.controladorTecladoUp("abajo")})
		
		
		
		escena.input.keyboard.on('keydown-' + 'J', function (event) {jugador2.controladorTecladoDown("movIzquierda")});	
		escena.input.keyboard.on('keydown-' + 'L', function (event){jugador2.controladorTecladoDown("movDerecha")});
		escena.input.keyboard.on('keydown-' + 'I',function (event){jugador2.controladorTecladoDown("salto")});
		escena.input.keyboard.on('keydown-' + 'K', function (event){jugador2.controladorTecladoDown("abajo")})
		escena.input.keyboard.on('keydown-' + 'U', function(event){jugador2.controladorTecladoDown("ataque")})
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}