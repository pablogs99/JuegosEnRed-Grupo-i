var jugador1 = new Jugador(1);
var jugador2 = new Jugador(-1);
var juego = new Juego();


class combate extends Phaser.Scene {
    constructor() {
      super("combate"); 
    }

	preload(){
		//Cargamos las hojas de sprites
		jugador1.loadSprites(this);
		jugador2.loadSprites(this);
		
		//Cargamos el fondo seleccionado con sus plataformas correspondientes y lo llevamos al fondo
		juego.preloadMapas(this);
		
		//Cargamos la interfaz de usuraio
		juego.preloadUI(this);
		
		
		
		
		
		
	}
	
	create(){		
		this.physics.world.setBounds(0,0,1000,600,true,true,false,true);
		//Cargamos animaciones sprites jugador 1
		jugador1.createAnimations(this);
		jugador2.createAnimations(this);
		
		//Configuramos el sprite y lo colocamos en el canvas
		jugador1.setSprite(this);
		jugador2.setSprite(this);
		
		//Cargamos el fondo
		this.add.image(500,300,"fondo");
		
		//Cargamos la UI
		juego.createUI(this);
		
		
		//Añadimos el collider con las plataformas
		this.physics.add.collider(jugador1.sprite,juego.plataformas,function(){jugador1.colisionPlataforma(jugador1.sprite,juego.plataformas)});
		this.physics.add.collider(jugador2.sprite,juego.plataformas,function(){jugador2.colisionPlataforma(jugador2.sprite,juego.plataformas)})
		

		
		jugador1.colisionArma = this.physics.add.collider(jugador1.hitbox,jugador2.sprite,function(){jugador1.colisionAtaque(jugador2)})
		jugador1.colisionArma.active  = false;
		jugador2.colisionArma  = this.physics.add.collider(jugador2.hitbox,jugador1.sprite,function(){jugador2.colisionAtaque(jugador1)})
		jugador2.colisionArma.active  = false;
	}
	
	update(){
		
		// Recogemos información de teclado
		juego.checkInputPersonaje1(this);
		juego.checkInputPersonaje2(this);
		
		//plataformas.setVelocityX(10);
			
			
			
		//Iniciamos la animacion actual del personaje
		jugador1.playAnimation();
		jugador2.playAnimation();
	}


}