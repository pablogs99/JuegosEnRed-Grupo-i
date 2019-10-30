class selectorPersonaje extends Phaser.Scene {
  constructor() {
    super("SelectPers"); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  //Funcion que carga los assets en la memoria, coge el id que vamos a usar para referirnos al asset y la direccion
  preload() {
    //------------------ BackGround----------------------------------------------//
	this.load.image("fondo", "../assets/images/backgrounds/menuPrincipal/portadaSolo.png"); 
   

   //----------------- UI Images --------------------------------------------//
	this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
   
  }
  
  //Funcion que añade los assets u objetos al juego
  create() {

    let Selector = this.add.image(400, 300, "fondo").setDepth(0); //setDepth(numero) le da un numero en el eje z a la imagen para sobreponer una imagen sobre otra
    // 0 seria el que esta mas "hondo" y despues 1,2,etc
 
    let jugarBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 40, "jugar").setDepth(2);
    let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4); //setScale escala la imagen
    
    //hacemos que se pueda interactuar con las imagenes
    jugarBoton.setInteractive();
    //Que sea invisible la barra
    rayaAmarilla.setVisible(false);

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
        this.scene.start('mapa');
      })
  
  }

}
