	var Background; 
    var jugarBoton;
    var rayaAmarilla;
    var marcoPers;
    var marcoPers2;
    var vs;
    var vs2;
    var volverPer;

    var Knight;
    var Orco;
    var Elfo;

    var Knight2;
    var Orco2;
    var Elfo2;


    var KnightBig;
    var OrcoBig;
    var ElfoBig;

    var KnightBig2;
    var OrcoBig2;
    var ElfoBig2;
	var cont;
	
	var escenaDestruir;

class selectorPersonaje extends Phaser.Scene {
  constructor() {
    super("SelectPers"); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  //Funcion que carga los assets en la memoria, coge el id que vamos a usar para referirnos al asset y la direccion
  preload() {
    //------------------ BackGround----------------------------------------------//
    this.load.image("fondo", "../assets/images/backgrounds/SelectorPersonaje/Fondo1.jpg");


    //----------------- UI Images --------------------------------------------//
    this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
    this.load.image("vs", "../assets/images/backgrounds/SelectorPersonaje/vs.png")
    this.load.image("vs2", "../assets/images/backgrounds/SelectorPersonaje/vs2.png")
    this.load.image("volverPer", "../assets/images/userInterface/volver.png")

    //----------- PERS ------------------------------------------------//
    this.load.image("knight", "../assets/images/PersonajesSelect/knight.png");
    this.load.image("orco", "../assets/images/PersonajesSelect/orco.png");
    this.load.image("elfo", "../assets/images/PersonajesSelect/elfo.png");

    this.load.image("marco", "../assets/images/PersonajesSelect/marco.png");
    this.load.image("marco2", "../assets/images/PersonajesSelect/marco2.png");

    this.load.image("knight2", "../assets/images/PersonajesSelect/knight2.png");
    this.load.image("orco2", "../assets/images/PersonajesSelect/orco2.png");
    this.load.image("elfo2", "../assets/images/PersonajesSelect/elfo2.png");

    this.load.image("KnightBig", "../assets/images/PersonajesSelect/knightBig.png");
    this.load.image("OrcoBig", "../assets/images/PersonajesSelect/orcoBig.png");
    this.load.image("ElfoBig", "../assets/images/PersonajesSelect/elfoBig.png");

    this.load.image("KnightBig2", "../assets/images/PersonajesSelect/knightBig2.png");
    this.load.image("OrcoBig2", "../assets/images/PersonajesSelect/orcoBig2.png");
    this.load.image("ElfoBig2", "../assets/images/PersonajesSelect/elfoBig2.png");




  }

  //Funcion que añade los assets u objetos al juego
  create() {
	 this.scene.remove("menu")
	this.scene.remove("mapa");
    Background = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "fondo").setDepth(0); //setDepth(numero) le da un numero en el eje z a la imagen para sobreponer una imagen sobre otra
    // 0 seria el que esta mas "hondo" y despues 1,2,etc

    jugarBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 130, "jugar").setDepth(2).setScale(0.8);
    rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4); //setScale escala la imagen
    marcoPers = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "marco").setDepth(3).setScale(0.2);
    marcoPers2 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "marco2").setDepth(3).setScale(0.2);
    vs = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "vs").setDepth(1).setScale(1.5);
    vs2 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "vs2").setDepth(1.5).setScale(1.5);

    Knight = this.add.image(this.game.renderer.width / 2 - 400, this.game.renderer.height / 2 + 210, "knight").setDepth(2).setScale(0.2);
    Orco = this.add.image(this.game.renderer.width / 2 - 260, this.game.renderer.height / 2 + 210, "orco").setDepth(2).setScale(0.2);
    Elfo = this.add.image(this.game.renderer.width / 2 - 120, this.game.renderer.height / 2 + 210, "elfo").setDepth(2).setScale(0.2);

    Knight2 = this.add.image(this.game.renderer.width / 2 + 120, this.game.renderer.height / 2 + 210, "knight2").setDepth(2).setScale(0.2);
    Orco2 = this.add.image(this.game.renderer.width / 2 + 260, this.game.renderer.height / 2 + 210, "orco2").setDepth(2).setScale(0.2);
	Elfo2 = this.add.image(this.game.renderer.width / 2 + 400, this.game.renderer.height / 2 + 210, "elfo2").setDepth(2).setScale(0.2);


    KnightBig = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 - 80, "KnightBig").setDepth(2).setScale(0.3);
	OrcoBig = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 - 80, "OrcoBig").setDepth(2).setScale(0.24);
    ElfoBig = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 - 80, "ElfoBig").setDepth(2).setScale(0.3);

    KnightBig2 = this.add.image(this.game.renderer.width / 2 + 300, this.game.renderer.height / 2 - 80, "KnightBig2").setDepth(2).setScale(0.3);
    OrcoBig2 = this.add.image(this.game.renderer.width / 2 + 300, this.game.renderer.height / 2 - 80, "OrcoBig2").setDepth(2).setScale(0.24);
    ElfoBig2 = this.add.image(this.game.renderer.width / 2 + 300, this.game.renderer.height / 2 - 80, "ElfoBig2").setDepth(2).setScale(0.3);



    //hacemos que se pueda interactuar con las imagenes
    jugarBoton.setInteractive();

    //Que sea invisible la barra y el marco



    //   Eventos de raton:
    //   pointerover - encima del objeto
    //   pointerout - deja de estar encima del objeto
    //   pointerup - click y soltar
    //   pointerDown - solo click

   

    jugarBoton.on("pointerover", () => {
      rayaAmarilla.x = jugarBoton.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = jugarBoton.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    jugarBoton.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })

    jugarBoton.on("pointerup", () => {
		conexion.send("SelecMapa");
		this.scene.remove("mapa");
		this.scene.add("mapa", seleccionMapa, true);
		
    })


    //----------------- Set Interactive --------------------------------------------//
    
	if(manejadorWS.jugadorID == 1){
		Knight.setInteractive();
		Orco.setInteractive();
		Elfo.setInteractive();
	}else if(manejadorWS.jugadorID == 2){
		Knight2.setInteractive();
		Orco2.setInteractive();
		Elfo2.setInteractive();
	}
	
    jugarBoton.setInteractive();
    rayaAmarilla.setInteractive();
    marcoPers.setInteractive();
    marcoPers2.setInteractive();

    vs2.setInteractive();

    //----------------- Set Invisible --------------------------------------------//
    KnightBig.setVisible(false);
    OrcoBig.setVisible(false);
    ElfoBig.setVisible(false);

    KnightBig2.setVisible(false);
    OrcoBig2.setVisible(false);
    ElfoBig2.setVisible(false);

    jugarBoton.setVisible(false);
    rayaAmarilla.setVisible(false);
    marcoPers.setVisible(false);
    marcoPers2.setVisible(false);

    vs2.setVisible(false);


    //------------------ Click en pers----------------------------------------------//
    Knight.on("pointerup", () => {

      if (marcoPers2.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);
		

      }

      KnightBig.setVisible(true);
      OrcoBig.setVisible(false);
      ElfoBig.setVisible(false);

      marcoPers.setVisible(true);
      marcoPers.x = Knight.x;
      marcoPers.y = Knight.y;
		
		
	  juego.personajeJugador1 = datosCaballero;
	  conexion.send("caballero");
	
    })
    Orco.on("pointerup", () => {

      if (marcoPers2.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);

      }

      KnightBig.setVisible(false);
      OrcoBig.setVisible(true);
      ElfoBig.setVisible(false);

      marcoPers.setVisible(true);
      marcoPers.x = Orco.x;
      marcoPers.y = Orco.y;
	  
	  juego.personajeJugador1 = datosLancero;
	  conexion.send("lancero");

    })
    Elfo.on("pointerup", () => {

      if (marcoPers2.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);

      }

      KnightBig.setVisible(false);
      OrcoBig.setVisible(false);
      ElfoBig.setVisible(true);

      marcoPers.setVisible(true);
      marcoPers.x = Elfo.x;
      marcoPers.y = Elfo.y;
	  
	  juego.personajeJugador1 = datosElfo;
	  conexion.send("elfo");


    })

    Knight2.on("pointerup", () => {

      if (marcoPers.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);

      }
      KnightBig2.setVisible(true);
      OrcoBig2.setVisible(false);
      ElfoBig2.setVisible(false);

      marcoPers2.setVisible(true);
      marcoPers2.x = Knight2.x;
      marcoPers2.y = Knight2.y;
	  
	  juego.personajeJugador2 = datosCaballero;
	  conexion.send("caballero");

    })
    Orco2.on("pointerup", () => {

      if (marcoPers.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);

      }

      KnightBig2.setVisible(false);
      OrcoBig2.setVisible(true);
      ElfoBig2.setVisible(false);

      marcoPers2.setVisible(true);
      marcoPers2.x = Orco2.x;
      marcoPers2.y = Orco2.y;
	  
	  juego.personajeJugador2 = datosLancero;
	  conexion.send("lancero");
    })
    Elfo2.on("pointerup", () => {

      if (marcoPers.visible) {
        jugarBoton.setVisible(true);
        vs2.setVisible(true);

      }

      KnightBig2.setVisible(false);
      OrcoBig2.setVisible(false);
      ElfoBig2.setVisible(true);

      marcoPers2.setVisible(true);
      marcoPers2.x = Elfo2.x;
      marcoPers2.y = Elfo2.y;
	  
	  juego.personajeJugador2 = datosElfo;
	  conexion.send("elfo");
	  
    })


  }
  update(){
		if(manejadorWS.jugadorID == 1){
				switch(manejadorWS.recivirPersonaje()){
				
				case 'caballero':
				if (marcoPers.visible) {
				jugarBoton.setVisible(true);
				vs2.setVisible(true);

				}
				KnightBig2.setVisible(true);
				OrcoBig2.setVisible(false);
				ElfoBig2.setVisible(false);

				marcoPers2.setVisible(true);
				marcoPers2.x = Knight2.x;
				marcoPers2.y = Knight2.y;
			
				juego.personajeJugador2 = datosCaballero;
				
				break;
			case 'elfo':
				if (marcoPers.visible) {
					jugarBoton.setVisible(true);
					vs2.setVisible(true);

				}

				KnightBig2.setVisible(false);
				OrcoBig2.setVisible(false);
				ElfoBig2.setVisible(true);

				marcoPers2.setVisible(true);
				marcoPers2.x = Elfo2.x;
				marcoPers2.y = Elfo2.y;
	  
				juego.personajeJugador2 = datosElfo;
				break;
			case 'lancero':
				if (marcoPers.visible) {
					jugarBoton.setVisible(true);
					vs2.setVisible(true);

				}
		
				KnightBig2.setVisible(false);
				OrcoBig2.setVisible(true);
				ElfoBig2.setVisible(false);

				marcoPers2.setVisible(true);
				marcoPers2.x = Orco2.x;
				marcoPers2.y = Orco2.y;
	  
				juego.personajeJugador2 = datosLancero;
				break;
				
			case 'SelecMapa':
				//escenaDestruir = this.scene.get("mapa")
				this.scene.add("mapa", seleccionMapa, true);
				break;
				
			case 'atrasPersonaje':
				KnightBig2.setVisible(false);
				OrcoBig2.setVisible(false);
				ElfoBig2.setVisible(false);
				marcoPers2.setVisible(false);
				jugarBoton.setVisible(false);
				break;
			}
		
				
		}else if(manejadorWS.jugadorID == 2){
			switch(manejadorWS.recivirPersonaje()){
				case 'caballero':
				if (marcoPers2.visible) {
					jugarBoton.setVisible(true);
					vs2.setVisible(true);
		

				}	

				KnightBig.setVisible(true);
				OrcoBig.setVisible(false);
				ElfoBig.setVisible(false);

				marcoPers.setVisible(true);
				marcoPers.x = Knight.x;
				marcoPers.y = Knight.y;
		
		
				juego.personajeJugador1 = datosCaballero;
				
				break;
			case 'elfo':
				if (marcoPers2.visible) {
					jugarBoton.setVisible(true);
					vs2.setVisible(true);

				}

				KnightBig.setVisible(false);
				OrcoBig.setVisible(false);
				ElfoBig.setVisible(true);

				marcoPers.setVisible(true);
				marcoPers.x = Elfo.x;
				marcoPers.y = Elfo.y;
	  
				juego.personajeJugador1 = datosElfo;
				break;
			case 'lancero':
				if (marcoPers2.visible) {
					jugarBoton.setVisible(true);
					vs2.setVisible(true);

				}

				KnightBig.setVisible(false);
				OrcoBig.setVisible(true);
				ElfoBig.setVisible(false);

				marcoPers.setVisible(true);
				marcoPers.x = Orco.x;
				marcoPers.y = Orco.y;
	  
				juego.personajeJugador1 = datosLancero;
				break;
			case 'SelecMapa':
				
				this.scene.add("mapa", seleccionMapa, true);
				break;
			case 'atrasPersonaje':
				KnightBig.setVisible(false);
				OrcoBig.setVisible(false);
				ElfoBig.setVisible(false);
				marcoPers.setVisible(false);
				jugarBoton.setVisible(true);
				break;
			}
			
		}
		
		//console.log(manejadorWS.recivirPersonaje());
  }

}
