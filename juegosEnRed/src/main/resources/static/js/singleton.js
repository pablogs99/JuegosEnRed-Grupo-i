function Juego(){
///////////// MAPA /////////////////////////
	this.mapaActual = 1;
	this.plataformas
	this.jugador1personaje;
	this.jugador2personaje;
	this.escena;
	this.escenaKey = "combate";
	this.spriteFondo;
	this.fin = false;
	this.campeon = 0;
	this.activado = false;
	this.iteracion = 0;
	//Función preloadMapas
	//	-Recive: escena donde se añaden los sprites y los offsets de las plataformas
	//Añade el fondo de pantalla y las hitboxes de las plataformas según el mapa elegido
	this.preloadMapas = function(escena){
		this.spriteFondo = escena.load.image("fondoCombate","assets/images/backgrounds/mapas/escenario" + this.mapaActual + ".png").depth = 10;
		escena.load.image("placeHolder","assets/images/backgrounds/mapas/placeHolderPlataformas.png")
		this.plataformas = escena.physics.add.staticGroup();
		let actual
		switch(this.mapaActual){
			case 1:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;

				actual = this.plataformas.create(580, 320, 'placeHolder');
				actual.setSize(325,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(115, 320, 'placeHolder');
				actual.setSize(247,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				break;
			case 2:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(100, 320, 'placeHolder');
				actual.setSize(245,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(475, 320, 'placeHolder');
				actual.setSize(190,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(732, 320, 'placeHolder');
				actual.setSize(190,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				
				break;
			case 3:
				actual = this.plataformas.create(210, 500, 'placeHolder');
				actual.setSize(600,1,false).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(100, 320, 'placeHolder');
				actual.setSize(325,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				actual = this.plataformas.create(650, 320, 'placeHolder');
				actual.setSize(250,1).setOffset(0,0);
				actual.body.checkCollision.left = false;
				actual.body.checkCollision.right = false;
				break
			
		}
		
	
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// UI ////////////////////////////////////////////////////////////////////////
	this.preloadUI = function(escena){
			escena.load.image("marcoJ1","assets/images/userInterface/marcoJugador1.png")
			escena.load.image("marcoJ2","assets/images/userInterface/marcoJugador2.png")
			escena.load.image("barraMarco","assets/images/userInterface/barraHP.png")
			escena.load.image("separadorEnergia","assets/images/userInterface/separadorEnergia.png")
			escena.load.image("indicadorHPJugador1","assets/images/userInterface/hpJugador1.png")
			escena.load.image("indicadorHPJugador2","assets/images/userInterface/hpJugador2.png")
			escena.load.image("fondoBarra","assets/images/userInterface/fondoBarra.png");
			escena.load.image("barraEnergia","assets/images/userInterface/barraEnergia.png")
			escena.load.image("indicadorEnergia","assets/images/userInterface/energia.png")
			escena.load.image("separadorEnergia","assets/images/userInterface/separadorEnergia.png")
			
		if(manejadorWS.jugadorID == 1){
			escena.load.image("cabezaJ1","assets/images/userInterface/"+ jugador1.personaje +"Cabeza.png" )
			escena.load.image("cabezaJ2","assets/images/userInterface/"+ jugador2.personaje +"Cabeza.png" )
		}else if(manejadorWS.jugadorID == 2){
			escena.load.image("cabezaJ1","assets/images/userInterface/"+ jugador2.personaje +"Cabeza.png" )
			escena.load.image("cabezaJ2","assets/images/userInterface/"+ jugador1.personaje +"Cabeza.png" )
		}
	}
	
	this.createUI = function(escena){
	
		//////////////// Jugador 1 /////////////////////////
		escena.add.image(5,5,"marcoJ1").setOrigin(0); //Marco para la cara
		
		
		
		let temporal = escena.add.image(86,45,"barraMarco"); // Marco para Barra de Energía
		temporal.setOrigin(0);
		temporal.depth = 7;
		temporal.displayWidth = 180;
		temporal.displayHeight = 15;
		
		temporal = escena.add.image(86,45,"fondoBarra");	// Fondo para la Barra de Energía
		temporal.setOrigin(0);
		temporal.displayWidth = 180;
		temporal.displayHeight = 15;
		
		
		
		
		
		for(let i = 135;i<270;i = i+45){								// Indicadores Barra Energia
			temporal = escena.add.image(i,45,"separadorEnergia")
			temporal.setOrigin(0)
			temporal.depth = 7;
			
		}
		
		if(manejadorWS.jugadorID == 1){
			jugador1.barraHP = escena.add.image(88,27,"indicadorHPJugador1")	//Barra de los HP 
			jugador1.barraHP.setOrigin(0);
			jugador1.barraHP.depth = 6
			jugador1.barraHP.displayWidth = 215;
			jugador1.barraHP.displayHeight = 19;
			
			jugador1.barraEnergia = escena.add.image(86,45,"indicadorEnergia");	// Barra de Energía
			jugador1.barraEnergia.setOrigin(0);
			jugador1.barraEnergia.depth = 6;
			jugador1.barraEnergia.displayWidth = 180;
			jugador1.barraEnergia.displayHeight = 13;
			
			jugador2.barraHP = escena.add.image(915,27,"indicadorHPJugador2");	// Barra de HP
			jugador2.barraHP.setOrigin(1,0)
			jugador2.barraHP.depth = 6;
			jugador2.barraHP.displayWidth = 238;
			jugador2.barraHP.displayHeight = 19;
			
			jugador2.barraEnergia = escena.add.image(917,45,"indicadorEnergia");	// Barra de Energía
			jugador2.barraEnergia.setOrigin(1,0);
			jugador2.barraEnergia.depth = 5;
			jugador2.barraEnergia.displayWidth = 180;
			jugador2.barraEnergia.displayHeight = 13;
			
		}else if(manejadorWS.jugadorID == 2){
			jugador2.barraHP = escena.add.image(88,27,"indicadorHPJugador1")	//Barra de los HP 
			jugador2.barraHP.setOrigin(0);
			jugador2.barraHP.depth = 6
			jugador2.barraHP.displayWidth = 215;
			jugador2.barraHP.displayHeight = 19;
			
			jugador2.barraEnergia = escena.add.image(86,45,"indicadorEnergia");	// Barra de Energía
			jugador2.barraEnergia.setOrigin(0);
			jugador2.barraEnergia.depth = 6;
			jugador2.barraEnergia.displayWidth = 180;
			jugador2.barraEnergia.displayHeight = 13;
			
			jugador1.barraHP = escena.add.image(915,27,"indicadorHPJugador2");	// Barra de HP
			jugador1.barraHP.setOrigin(1,0)
			jugador1.barraHP.depth = 6;
			jugador1.barraHP.displayWidth = 238;
			jugador1.barraHP.displayHeight = 19;
			
			jugador1.barraEnergia = escena.add.image(917,45,"indicadorEnergia");	// Barra de Energía
			jugador1.barraEnergia.setOrigin(1,0);
			jugador1.barraEnergia.depth = 5;
			jugador1.barraEnergia.displayWidth = 180;
			jugador1.barraEnergia.displayHeight = 13;
			
			
			
		}
		temporal = escena.add.image(86,25,"fondoBarra").setOrigin(0);	// Fondo para la Barra de HP
		temporal.displayWidth = 238;
		temporal.displayHeight = 20;
		
		temporal = escena.add.image(86,25,"barraMarco");			// Marco para Barra de HP
		temporal.setOrigin(0);
		temporal.depth = 7;
		
		temporal = escena.add.image(22,20,"cabezaJ1");
		temporal.setOrigin(0);
		temporal.displayWidth = 50;
		temporal.displayHeight = 50;
		
		
		
		
		
		
		
		
		
		////////////////////// Jugador 2 ////////////////////////////////////////////////////
		
		escena.add.image(990,10,"marcoJ2").setOrigin(1,0);		// Marco para la cara
		
		temporal = escena.add.image(917,25,"barraMarco");			//Marco Barra HP
		temporal.flipX = true;
		temporal.setOrigin(1,0);
		temporal.depth = 7;
		
		temporal = escena.add.image(917,25,"fondoBarra")			//Fondo Barra HP
		temporal.setOrigin(1,0);
		temporal.displayWidth = 238;
		temporal.displayHeight = 20;
		
		temporal = escena.add.image(917,45,"barraMarco");			//Marco Barra Energía
		temporal.setOrigin(1,0);
		temporal.flipX = true
		temporal.depth = 7;
		temporal.displayWidth = 180;
		temporal.displayHeight = 15;
		
		temporal = escena.add.image(917,45,"fondoBarra")			// Fondo Barra Energía
		temporal.setOrigin(1,0);
		temporal.displayWidth = 180;
		temporal.displayHeight = 15;
		
		
		
		for(let i = 782;i<962;i = i+45){									//Indicadores Barra Energía
			temporal = escena.add.image(i,45,"separadorEnergia")
			temporal.setOrigin(0)
			temporal.depth = 6;
			
		}
		
		temporal = escena.add.image(980,20,"cabezaJ2");
		temporal.flipX = true;
		temporal.setOrigin(1,0);
		temporal.displayWidth = 50;
		temporal.displayHeight = 50;
		
		
		
	}

///////////// PERSONAJE /////////////////////////////////////////////////////////////////////////////////////
	this.personajeJugador1 = "caballero";
	this.personajeJugador2 = "caballero";
	
	this.checkInputPersonaje1 = function(escena){
		
		escena.input.keyboard.on('keyup-' + 'A', function (event){jugador1.controladorTecladoUp("movIzquierda");manejadorWS.enviarTeclaUp("movIzquierda");});
		escena.input.keyboard.on('keyup-' + 'D', function (event){jugador1.controladorTecladoUp("movDerecha");manejadorWS.enviarTeclaUp("movDerecha");});
		escena.input.keyboard.on('keyup-' + 'S', function (event){jugador1.controladorTecladoUp("abajo");manejadorWS.enviarTeclaUp("abajo");})
		escena.input.keyboard.on('keyup-' + 'E', function (event){jugador1.controladorTecladoUp("protege");manejadorWS.enviarTeclaUp("protege");})
		
		
		
		escena.input.keyboard.on('keydown-' + 'A', function (event) {jugador1.controladorTecladoDown("movIzquierda");manejadorWS.enviarTeclaDown("movIzquierda");});	
		escena.input.keyboard.on('keydown-' + 'D', function (event){jugador1.controladorTecladoDown("movDerecha");manejadorWS.enviarTeclaDown("movDerecha");});
		escena.input.keyboard.on('keydown-' + 'W',function (event){jugador1.controladorTecladoDown("salto");manejadorWS.enviarTeclaDown("salto");});
		escena.input.keyboard.on('keydown-' + 'S', function (event){jugador1.controladorTecladoDown("abajo");manejadorWS.enviarTeclaDown("abajo");})
		escena.input.keyboard.on('keydown-' + 'Q', function(event){jugador1.controladorTecladoDown("ataque");manejadorWS.enviarTeclaDown("ataque");})
		escena.input.keyboard.on('keydown-' + 'E', function (event){jugador1.controladorTecladoDown("protege");manejadorWS.enviarTeclaDown("protege");})
	}
	
	this.checkInputPersonaje2 = function(escena){
		// Crear funcion en el manejadorWS
		
		/*escena.input.keyboard.on('keyup-' + 'J', function (event){jugador2.controladorTecladoUp("movIzquierda")});
		escena.input.keyboard.on('keyup-' + 'L', function (event){jugador2.controladorTecladoUp("movDerecha")});
		escena.input.keyboard.on('keyup-' + 'K', function (event){jugador2.controladorTecladoUp("abajo")})
		escena.input.keyboard.on('keyup-' + 'O', function (event){jugador2.controladorTecladoUp("protege")})
		
		
		
		escena.input.keyboard.on('keydown-' + 'J', function (event) {jugador2.controladorTecladoDown("movIzquierda")});	
		escena.input.keyboard.on('keydown-' + 'L', function (event){jugador2.controladorTecladoDown("movDerecha")});
		escena.input.keyboard.on('keydown-' + 'I',function (event){jugador2.controladorTecladoDown("salto")});
		escena.input.keyboard.on('keydown-' + 'K', function (event){jugador2.controladorTecladoDown("abajo")})
		escena.input.keyboard.on('keydown-' + 'U', function(event){jugador2.controladorTecladoDown("ataque")})
		escena.input.keyboard.on('keydown-' + 'O', function (event){jugador2.controladorTecladoDown("protege")})*/
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// DESTRUCTOR //////////////////////////////////////////////////////////////////
this.destruirEscena = function(escena){
	let combateEscena = escena.scene.get("combate")
	combateEscena.textures.remove("fondoCombate");
	combateEscena.textures.remove("cabezaJ1");
	combateEscena.textures.remove("cabezaJ2");
	
	escena.anims.remove("j1_Iddle")
	escena.anims.remove("j2_Iddle")
	
	escena.anims.remove("j1_Corre")
	escena.anims.remove("j1_Salto")
	escena.anims.remove("j1_Ataque")
	escena.anims.remove("j1_Defiende")
	escena.anims.remove("j1_Muerte")
	escena.anims.remove("j1_Herido")
	
	escena.anims.remove("j2_Corre")
	escena.anims.remove("j2_Salto")
	escena.anims.remove("j2_Ataque")
	escena.anims.remove("j2_Defiende")
	escena.anims.remove("j2_Muerte")
	escena.anims.remove("j2_Herido")

	
	combateEscena.scene.remove("combate");
}

/////////////////////////////// ESTADO PARTIDA /////////////////////////////////////////////////////////////////
	

	


}