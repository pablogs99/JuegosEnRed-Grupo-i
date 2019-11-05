class selectorPersonaje extends Phaser.Scene {
  constructor() {
    super("SelectPers"); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  //Funcion que carga los assets en la memoria, coge el id que vamos a usar para referirnos al asset y la direccion
  preload() {
    //------------------ BackGround----------------------------------------------//
	this.load.image("fondo", "../assets/images/backgrounds/SelectorPersonaje/blueMapBackground.jpg"); 
   

   //----------------- UI Images --------------------------------------------//
	this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
    this.load.image("vs", "../assets/images/backgrounds/SelectorPersonaje/vs.png")
   
   
     //----------- PERS ------------------------------------------------//
     this.load.image("knight", "../assets/images/PersonajesSelect/knight.png");
     this.load.image("orco", "../assets/images/PersonajesSelect/orco.png");
     this.load.image("elfo", "../assets/images/PersonajesSelect/elfo.png");

     this.load.image("marco", "../assets/images/PersonajesSelect/marco.png");
 
  }
  
  //Funcion que añade los assets u objetos al juego
  create() {

    let Background = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "fondo").setDepth(0); //setDepth(numero) le da un numero en el eje z a la imagen para sobreponer una imagen sobre otra
    // 0 seria el que esta mas "hondo" y despues 1,2,etc
 
    let jugarBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 130, "jugar").setDepth(2).setScale(0.8);
    let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4); //setScale escala la imagen
    let marco = this.add.image(this.game.renderer.width / 2 , this.game.renderer.height / 2, "marco").setDepth(2).setScale(0.2);
    let vs = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 -20 , "vs").setDepth(1).setScale(1.5);

    let Knight = this.add.image(this.game.renderer.width / 2 - 400, this.game.renderer.height / 2 + 210, "knight").setDepth(2).setScale(0.2);
    let Orco = this.add.image(this.game.renderer.width / 2 - 260, this.game.renderer.height / 2 + 210, "orco").setDepth(2).setScale(0.2);
    let Elfo = this.add.image(this.game.renderer.width / 2 - 120, this.game.renderer.height / 2 + 210, "elfo").setDepth(2).setScale(0.2);

    let Knight2 = this.add.image(this.game.renderer.width / 2 + 120, this.game.renderer.height / 2 + 210, "knight").setDepth(2).setScale(0.2);
    let Orco2 = this.add.image(this.game.renderer.width / 2 + 260, this.game.renderer.height / 2 + 210, "orco").setDepth(2).setScale(0.2);
    let Elfo2 = this.add.image(this.game.renderer.width / 2 + 400, this.game.renderer.height / 2 + 210, "elfo").setDepth(2).setScale(0.2);

    let P1Choose = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 220, "PersonajeChoose1").setDepth(2).setScale(0.8);
    let P2Choose = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 220, "PersonajeChoose1").setDepth(2).setScale(0.8);

    //hacemos que se pueda interactuar con las imagenes
    jugarBoton.setInteractive();
    //Que sea invisible la barra y el marco
 

    rayaAmarilla.setInteractive();
    Knight.setInteractive();
    Orco.setInteractive();
    Elfo.setInteractive();

    Knight2.setInteractive();
    Orco2.setInteractive();
    Elfo2.setInteractive();
  
    marco.setInteractive();
  
    rayaAmarilla.setVisible(false);
    marco.setVisible(false);

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
  
//------------------ Click en pers1----------------------------------------------//
Knight.on("pointerup", () => {
  

 P1Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Knight.x;
  marco.y = Knight.y;
})
Orco.on("pointerup", () => {
  

  P1Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Orco.x;
  marco.y = Orco.y;
})
Elfo.on("pointerup", () => {
 

  P1Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Elfo.x;
  marco.y = -Elfo.y;
})

//si el jugador 1 ha seleccionado

Knight.on("pointerup", () => {
 

  P2Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Knight2.x;
  marco.y = Knight2.y;
})
Orco.on("pointerup", () => {
 

  P2Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Orco2.x;
  marco.y = Orco2.y;
})
Elfo.on("pointerup", () => {
  

  P2Choose.setVisible(true);

  marco.setVisible(true);
  marco.x = Elfo2.x;
  marco.y = -Elfo2.y;
})


    
  }

}
