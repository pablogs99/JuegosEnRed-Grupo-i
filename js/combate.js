var jugador1 = new Jugador();
var jugador2 = new Jugador()
var plataformas;
class combate extends Phaser.Scene {
    constructor() {
      super("combate"); 
    }

	preload(){
		//Cargamos las hojas de sprites
		jugador1.loadSprites(this);
		jugador2.loadSprites(this);
		
		//Cargamos el fondo seleccionado y lo llevamos al fondo
		let fondo = this.load.image("fondo","assets/images/backgrounds/mapas/escenario1.png")
		fondo.depth = 10;
		
		//Cargamos las plataformas
		let placeHolderPlataformas = this.load.image("placeHolder","assets/images/backgrounds/mapas/placeHolderPlataformas.png")
		plataformas = this.physics.add.staticGroup();
		let actual = plataformas.create(180, 490, 'placeHolder');
		actual.setSize(482,1,false).setOffset(0,0);
		actual = plataformas.create(48, 310, 'placeHolder');
		actual.setSize(235,1).setOffset(0,0);
		actual = plataformas.create(500, 310, 'placeHolder');
		actual.setSize(305,1).setOffset(0,0);
		
		
		
		
		
	}
	
	create(){		
		this.physics.world.setBounds(0,0,800,600,true,true,false,true);
		//Cargamos animaciones sprites jugador 1
		jugador1.createAnimations(this);
		jugador2.createAnimations(this);
		
		//Configuramos el sprite y lo colocamos en el canvas
		jugador1.setSprite(this);
		jugador2.setSprite(this);
		
		//Cargamos el fondo
		this.add.image(400,300,"fondo");
		
		
		//Añadimos el collider con las plataformas
		this.physics.add.collider(jugador1.sprite,plataformas,function(){jugador1.colisionPlataforma(jugador1.sprite,plataformas)});
		this.physics.add.collider(jugador2.sprite,plataformas,function(){jugador2.colisionPlataforma(jugador2.sprite,plataformas)})
		this.physics.add.collider(jugador1.hitbox,jugador2.sprite,function(){jugador1.colisionAtaque(jugador1.hitbox,jugador2.sprite)})
	}
	
	update(){
		
		// Recogemos información de teclado
		this.input.keyboard.on('keyup-' + 'A', function (event){jugador1.controladorTecladoUp("movIzquierda")});
		this.input.keyboard.on('keyup-' + 'D', function (event){jugador1.controladorTecladoUp("movDerecha")});
		this.input.keyboard.on('keyup-' + 'S', function (event){jugador1.controladorTecladoUp("abajo")})
		
		
		
		this.input.keyboard.on('keydown-' + 'A', function (event) {jugador1.controladorTecladoDown("movIzquierda")});	
		this.input.keyboard.on('keydown-' + 'D', function (event){jugador1.controladorTecladoDown("movDerecha")});
		this.input.keyboard.on('keydown-' + 'W',function (event){jugador1.controladorTecladoDown("salto")});
		this.input.keyboard.on('keydown-' + 'S', function (event){jugador1.controladorTecladoDown("abajo")})
		this.input.keyboard.on('keydown-' + 'Q', function(event){jugador1.controladorTecladoDown("ataque")})
		
		//plataformas.setVelocityX(10);
			
			
			
		//Iniciamos la animacion actual del personaje
		jugador1.playAnimation();
		jugador2.playAnimation();
	}


}