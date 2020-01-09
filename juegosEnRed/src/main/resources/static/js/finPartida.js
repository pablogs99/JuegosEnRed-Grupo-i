//let escenaDestroy;
class finPartida extends Phaser.Scene {
  constructor(handle) {
    super(handle); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  preload() {
    //------------------ BackGround----------------------------------------------//
    //this.load.image("portada", "../assets/images/backgrounds/menuPrincipal/portadaSolo.png");

    //----------------- UI Images --------------------------------------------//
    this.load.image("jugarDeNuevo", "../assets/images/userInterface/Volver-a-jugar.png");
	this.load.image("elegirEscenario", "../assets/images/userInterface/Elegir-escenario.png");
	this.load.image("elegirPersonaje", "../assets/images/userInterface/Elegir-personaje.png");
	this.load.image("volverMenu", "../assets/images/userInterface/Volver-menu.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")





    //----------------------- Audio ----------------------------------//
  }

  create() {

    //Se le suma al eje y para bajarlo
    //Se le suma al eje x para moverlo a la derecha
    //------------------ BackGround----------------------------------------------//
    let fondo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "fondo").setDepth(0).setScale(1.1);

    //------------------ UI Images ----------------------------------------------//
    let jugarDeNuevo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "jugarDeNuevo").setDepth(2).setScale(0.45);
	let elegirEscenario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 40, "elegirEscenario").setDepth(2).setScale(0.45);
	let elegirPersonaje = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "elegirPersonaje").setDepth(2).setScale(0.45);
	let volverMenu = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 160, "volverMenu").setDepth(2).setScale(0.45);
	let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4);
	


    


    //----------------- Set Interactive --------------------------------------------//
    jugarDeNuevo.setInteractive();
	elegirEscenario.setInteractive();
	elegirPersonaje.setInteractive();
	volverMenu.setInteractive();
	
    

    //----------------- Set Invisible --------------------------------------------//
    rayaAmarilla.setVisible(false);
    

    
    //----------------- Raya Amarilla UI --------------------------------------------//

    jugarDeNuevo.on("pointerover", () => {
      rayaAmarilla.x = jugarDeNuevo.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = jugarDeNuevo.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    jugarDeNuevo.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })
	
	elegirEscenario.on("pointerover", () => {
      rayaAmarilla.x = elegirEscenario.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = elegirEscenario.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    elegirEscenario.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })
	
	elegirPersonaje.on("pointerover", () => {
      rayaAmarilla.x = elegirPersonaje.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = elegirPersonaje.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    elegirPersonaje.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })
	
	volverMenu.on("pointerover", () => {
      rayaAmarilla.x = volverMenu.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = volverMenu.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    volverMenu.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })


    //----------------- Click En Botones UI --------------------------------------------//
    jugarDeNuevo.on("pointerup", () => {
		conexion.send("volverCombate");
		juego.destruirEscena(this)
		this.scene.add("combate", combate, true); 
	  
    })
	
	elegirEscenario.on("pointerup", () => {
		conexion.send("volverEscenario");
		escenaDestruir = this.scene.get("mapa")
		juego.destruirEscena(this)
		escenaDestruir.scene.remove("mapa");
		this.scene.add("mapa", seleccionMapa, true);
	  
    })
	
	elegirPersonaje.on("pointerup", () => {
		conexion.send("volverPersonaje");
		escenaDestruir = this.scene.get("SelectPers")
		juego.destruirEscena(this)
		escenaDestruir.scene.remove("SelectPers");
		this.scene.add("SelectPers", selectorPersonaje, true);
		
	  
    })
	
	volverMenu.on("pointerup", () => {
		conexion.send("volverMenu");
		escenaDestruir = this.scene.get("menu")
		juego.destruirEscena(this)
		escenaDestruir.scene.remove("menu");
		this.scene.add("menu", menuPrincipal, true);
	  
    })
	
	

  

    

  }
  
  update(){
			switch(manejadorWS.recivirFinPartida()){
				case "volverCombate":
					juego.destruirEscena(this)
					this.scene.add("combate", combate, true); 
					break;
				case "volverEscenario":
					escenaDestruir = this.scene.get("mapa")
					juego.destruirEscena(this)
					this.scene.remove("mapa");
					this.scene.add("mapa", seleccionMapa, true);
					break;
				case "volverPersonaje":
					escenaDestruir = this.scene.get("SelectPers")
					juego.destruirEscena(this)
					this.scene.remove("SelectPers");
					this.scene.add("SelectPers", selectorPersonaje, true);
					break;
				case "volverMenu":
					escenaDestruir = this.scene.get("menu")
					juego.destruirEscena(this)
					this.scene.remove("menu");
					this.scene.add("menu", menuPrincipal, true);
					break;
				
			}
	}

}
