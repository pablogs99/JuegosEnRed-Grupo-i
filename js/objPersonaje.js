function Jugador(dir){
	
////////// Stats Generales /////////////////	
	this.hpMax = 100;
	this.energiaMax = 100;
	//this.vidas = 3;					// Vidas para terminar partida
	this.velocidad = 250;			// Velocidad a la que se desplaza el jugador
	this.cosVelocidadCorrer = 2;	//	Cosiente por el que se multiplica la velocidad al correr
	this.atackDamage = [10,15,20];	// Daño que hace cada autoataque ordenados por el "stateCombo"
	this.frameAction = {				// Tiempo que tarda en completar la acción
		salto:		70,
		ataque: 	20,
		herido:		30,
	}
	

////////// Estado Jugador ///////////////////	
	this.hp = this.hpMax;					// Puntos de Vida del jugador
	this.energia = this.energiaMax
	this.direccion = dir;				// Dirección del jugador que controla el "flipX"
	this.finAccion = 0;				// Contador que controla los frames de la accion del jugador
	this.animacionActual = "j1_Iddle";	// Variable que controla la animación del sprite según la acción
	this.stateCombo = 0;			// Contador que controla la cadena de combo
	this.accion ={					// Controlador que comprueba si una acción se esta realizando
		salto: false,
		ataque: false,
		herido: false,
		protege: false
	}
	this.invulnerabilidad = false;	// Controlador que comrpueba si el jugador es invulnerable
	
	this.barraHP;
	this.barraEnergia;

////////////////// HitBoxes ///////////////////////////////////////////////////
		this.sprite;					// Variable que almacena el objeto sprite de Phaser	
		this.colisionArma;
		
//////////// Funciones de Jugador ////////////////////////////////////////
	
	//A RELLENAR EN PANTALLA JUGADOR
	this.crearPersonaje = function(){
		
	}
	
		
	
	//Function controladorTecladoDown
	//	Se utiliza para manejar todos los eventos de teclado del Jugador;
	//	Se incluye una llamada en la funcion update de combate por cada tecla que hay;
	this.controladorTecladoDown = function(tecla){
		
		//SALTO
		//	Usamos accion.salto para comprobar si el personaje ya estaba saltando
		//	Añadimos los frames de salto a finAccion
		//	Cambiamos la velocidad en el eje Y para saltar
		//	Cambiamos la animación Actual a la de Salto
		if(tecla === "salto"){
			if(this.sprite.body.onFloor()){
				this.finAccion = this.frameAction.salto
				this.sprite.setVelocityY(-750);
				this.animacionActual = "j1_Salto" ;
				this.accion.salto = true;
			}
		}
		//movIzquierda
		//	Giramos verticalmente el sprite para que apunte a la dirección adecuada
		//	Reajustamos el offset para que cambie con la dirección
		//	Segun si estamos pulsando el boton de correr
		//		Damos velocidad al sprite
		//		Cambiamos animacion actual
		if(tecla === "movIzquierda"){
			this.sprite.flipX = true;
			this.sprite.setOffset(99,0);
			this.sprite.setVelocityX(-this.velocidad);
			this.direccion = -1;
			//Cambiar Animacion Actual
		}
		
		//movDerecha
		//	Giramos verticalmente el sprite para que apunte a la dirección adecuada
		//	Reajustamos el offset para que cambie con la dirección
		//	Segun si estamos pulsando el boton de correr
		//		Damos velocidad al sprite
		//		Cambiamos animacion actual
		if(tecla === "movDerecha"){
			this.sprite.flipX = false;
			this.sprite.setOffset(20,0);
			this.direccion = +1;
			
			this.hitbox.x = this.sprite.x + 45*this.direccion;
			
			
			this.sprite.setVelocityX(this.velocidad);
			
			//Cambiar Animación Actual
		}
		
		if(tecla === "abajo"){
			this.sprite.body.checkCollision.down = false;
		}
		
		if(tecla === "ataque"){
			if(this.accion.herido == false && this.accion.ataque == false && this.accion.protege == false && this.energia > 25){
				this.finAccion = this.frameAction.ataque;
				this.accion.ataque = true;
				this.animacionActual = "j1_Ataque";
				this.colisionArma.active = true;
				this.energia -= 25;
		
			}
		}
		
		if(tecla === "protege"){
			if(this.energia > 0){
				this.accion.protege = true;
			}
		}
	}
	
	
	//Function controladorTecladoDown
	//	Se utiliza para manejar todos los eventos de teclado del Jugador;
	//	Se incluye una llamada en la funcion update de combate por cada tecla que hay;
	this.controladorTecladoUp = function(tecla){
		//A
		//	Resetea la velocidad en el eje X a 0
		if(tecla === "movIzquierda"){
			this.sprite.setVelocityX(0);
		}
		
		//D
		//	Resetea la velocidad en el eje X a 0
		if(tecla === "movDerecha"){
			this.sprite.setVelocityX(0);
		
		}
		
		if(tecla === "abajo"){
			this.sprite.body.checkCollision.down = true;
		}
		
		if(tecla === "protege"){
			this.accion.protege = false;
		}
	}
	
	//Function loadSprites
	//Recive:
	//	Escena donde se cargan las spritesSheets
	//Esta función se encarga de cargar las hojas de animaciones en la escena adecuada.
	//LLamada en el preload de combate
	this.loadSprites = function(escena){
		
	escena.load.spritesheet(	'caballeroIddle',
								'assets/images/personaje/caballero/iddle.png',
								{frameWidth:178,frameHeight:125});
	
	escena.load.spritesheet(	'caballeroSalto',
								'assets/images/personaje/caballero/salto.png',
								{frameWidth:178,frameHeight:154});
	escena.load.spritesheet(	'caballeroAtaque',
								'assets/images/personaje/caballero/ataque.png',
								{frameWidth:178,frameHeight:120})
		
		
		
	}
	
	
		
		
		
	//Function createAnimations
	//Recive:
	//	Escena donde se cargan las animaciones
	//Función que crea las animaciones a partir de las animaciones cargadas
	//Llamada en el create de combate
	this.createAnimations = function(escena){
		escena.anims.create({
							key: 'j1_Iddle',
							frames: escena.anims.generateFrameNames('caballeroIddle',{start:0,end:7}),
							frameRate: 5,
							repeat: -1,
		});
		
		escena.anims.create({
							key: 'j1_Salto',
							frames: escena.anims.generateFrameNames('caballeroSalto',{start:0,end:7}),
							frameRate: 5,
							repeat: 0,
		});
		
		escena.anims.create({
							key: 'j1_Ataque',
							frames: escena.anims.generateFrameNames('caballeroAtaque',{start:0,end:3}),
							frameRate: 15,
							repeat: 1,
		});
		
	}
	
	
	//Function setSprite
	//Recive:
	//	Escena donde se carga el sprite
	//Función que crea las físicas del personaje, ademas de las colisiones con su entorno
	this.setSprite = function(escena){
		this.personaje = escena.physics.add.group();
		//this.sprite = escena.physics.add.sprite(200, 300, 'j1_Salto');
		
		console.log(this.direccion)
		if(this.direccion === -1){
			this.sprite = escena.physics.add.sprite(750, 100, 'j1_Salto');
			this.sprite.flipX = true;
			this.sprite.setOffset(99,0);
		}else{
			this.sprite = escena.physics.add.sprite(200, 100, 'j1_Salto');
			this.sprite.flipX = false;
			this.sprite.setOffset()
			this.sprite.setOffset(20,0);
		}
		this.sprite.setSize(60,125,false).setOffset(20,0);
		this.sprite.depth = 1;
		this.sprite.body.checkCollision.up = false;
		this.sprite.setCollideWorldBounds(true);
		

		
		this.hitbox = escena.physics.add.sprite(245,400, 'placeHolder')
		this.hitbox.setSize(20,20,false).setOffset(0,0);
		this.hitbox.depth = 2;
		this.hitbox.body.checkCollision.up = false;
		this.hitbox.body.checkCollision.down = false;
		
			
		
		this.sprite.body.setGravityY(1000);

		
		
	}
	
	
	
	//Function playAnimation
	//Funciçon que ejecuta la animación actual del personaje
	//OJO: 	ESTA FUNCIÓN LA ESTOY USANDO DE IDDLE DEL PERSONAJE cuando tenga todo lo que tiene que hacer el iddle se cambiará
	this.playAnimation = function(){
				
				if(this.finAccion == 0 && this.sprite.body.onFloor){
					//this.hitbox.x = 200;
					this.accion.ataque = false;
					this.accion.herido = false;

					this.animacionActual = "j1_Iddle";
					this.sprite.anims.play(this.animacionActual,true)
					this.colisionArma.active = false
					
					
					
				}else{
					this.finAccion--;
					this.sprite.anims.play(this.animacionActual, true);
				}
				
				if(this.sprite.y < 320 ){
					this.sprite.body.checkCollision.up = true;
				}else{
					this.sprite.body.checkCollision.up = false;
				}
			
			
				this.hitbox.x = this.sprite.x + 49*this.direccion;
				this.hitbox.y = this.sprite.y -9;
				
				this.barraHP.displayWidth = 238*this.hp/this.hpMax;
				this.barraEnergia.displayWidth = 180*this.energia/this.energiaMax;
				
				if(this.accion.protege){
					if(this.energia>0){this.energia -= 0.5};
				}else{
					if(this.energia<100){this.energia += 0.1}
				}
	}
	


//-------------------------- COLISIONES -------------------------------------//
	//Function colisionPlataforma
	//Función que se ejecuta al hacer contacto con la hitbox de las plataformas
	//Solo resetea el salto si el jugador esta tocando el suelo de la plataforma
	this.colisionPlataforma = function(jugador,plataforma){
		if(jugador.body.onFloor()){
			this.accion.salto = false;				//Reiniciamos la accion de saltar
			
													//Cambiamos la animación a iddle (Cuando añada las animaciones de correr y caminar esto cambia)
		}
	}
	
	this.colisionAtaque = function(enemigo){
		 if(this.accion.ataque){
			 if(!enemigo.accion.ataque && !enemigo.accion.protege){
				this.accion.ataque = false;
				enemigo.accion.herido = true;
				enemigo.finAccion = enemigo.frameAction.herido;
				enemigo.hp -= 10;
				console.log(enemigo.hp);	
				}
			 }
		 }
	
	
//---------------------------------------------------------------------------//
	
}



