var jugador1 = new Jugador(true);
var plataformas;
class combate extends Phaser.Scene {
    constructor() {
      super("combate"); 
    }

	preload(){
		//Cargamos las hojas de sprites
		jugador1.loadSprites(this);
		
		//Cargamos el fondo seleccionado y lo llevamos al fondo
		let fondo = this.load.image("fondo","assets/images/backgrounds/mapas/escenario1.png")
		fondo.depth = 10;
		
		//Cargamos las plataformas
		let placeHolderPlataformas = this.load.image("plataformas","assets/images/backgrounds/mapas/placeHolderPlataformas.png")
		plataformas = this.physics.add.staticGroup();

		let actual = plataformas.create(180, 490, 'plataformas');
		actual.setSize(482,1,false).setOffset(0,0);

		actual = plataformas.create(48, 310, 'plataformas');
		actual.setSize(235,1).setOffset(0,0);
		
		actual = plataformas.create(500, 310, 'plataformas');
		actual.setSize(305,1).setOffset(0,0);
		
		
		
		
	}
	
	create(){		
		this.physics.world.setBounds(0,0,800,600,true,true,false,true);
		//Cargamos animaciones sprites jugador 1
		jugador1.createAnimations(this);
		
		//Configuramos el sprite y lo colocamos en el canvas
		jugador1.setSprite(this);
		
		//Cargamos el fondo
		this.add.image(400,300,"fondo");
		
		
		//Añadimos el collider con las plataformas
		this.physics.add.collider(jugador1.sprite,plataformas,function(){jugador1.colisionPlataforma()});
		
	}
	
	update(){
		
		// Recogemos información de teclado
		this.input.keyboard.on('keyup-' + 'A', function (event) {jugador1.controladorTecladoUp("A")});
		this.input.keyboard.on('keyup-' + 'D', function  (event){jugador1.controladorTecladoUp("D")});
		
		
		this.input.keyboard.on('keydown-' + 'A', function (event) {jugador1.controladorTecladoDown("A")});	
		this.input.keyboard.on('keydown-' + 'D', function (event){jugador1.controladorTecladoDown("D")});
		this.input.keyboard.on('keydown-' + 'SPACE',function (event){jugador1.controladorTecladoDown("espacio")});
		
		
			
			
			
		//Iniciamos la animacion actual del personaje
		jugador1.playAnimation();
	}


}