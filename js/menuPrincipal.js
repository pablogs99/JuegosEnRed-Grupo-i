class menuPrincipal extends Phaser.Scene {
  constructor() {
    super("menu"); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  preload() {
    //------------------ BackGround----------------------------------------------//
    this.load.image("portada", "../assets/images/backgrounds/menuPrincipal/portadaSolo.png");

    //----------------- UI Images --------------------------------------------//
    this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("ajustes", "../assets/images/userInterface/ajustesBoton.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
    this.load.image("soundOn", "../assets/images/userInterface/soundOn.png")
    this.load.image("soundOff", "../assets/images/userInterface/soundOff.png")

    //----------------------- Audio ----------------------------------//
    this.load.audio("musicaInicio", "../assets/audio/menuPrincipal/theme-of-wargroove.mp3");
  }

  create() {

    //Se le suma al eje y para bajarlo
    //Se le suma al eje x para moverlo a la derecha
    //------------------ BackGround----------------------------------------------//
    let portada = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "portada").setDepth(0);

    //------------------ UI Images ----------------------------------------------//
    let jugarBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 70, "jugar").setDepth(2);
    let ajustesBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 190, "ajustes").setDepth(2);
    let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4);
    //  let soundOn = this.add.image(700, 500, "soundOn").setDepth(1);
    //  let soundOff = this.add.image(700, 500, "soundOff").setDepth(1);

    //------------------ Audio ----------------------------------------------//
    let musicaInicio = this.sound.add("musicaInicio");
    musicaInicio.play();

    //----------------- Set Interactive --------------------------------------------//
    jugarBoton.setInteractive();
    ajustesBoton.setInteractive();
    // soundOff.setInteractive();
    // soundOn.setInteractive();

    //----------------- Set Invisible --------------------------------------------//
    rayaAmarilla.setVisible(false);
    // soundOn.setVisible(false);

    /*
      Eventos de raton:
      pointerover - encima del objeto
      pointerout - deja de estar encima del objeto
      pointerup - click y soltar
      pointerDown - solo click
    */
    //----------------- Mouse Events UI --------------------------------------------//
    /*  soundOff.on("pointerup",() =>{
      soundOn.setVisible(true);
      musicaInicio.play();
      soundOff.setVisible(false);
    })
    soundOn.on("pointerup",() =>{
      soundOff.setVisible(true);
      musicaInicio.stop();
      soundOn.setVisible(false);
    })
*/
    jugarBoton.on("pointerover", () => {
      rayaAmarilla.x = jugarBoton.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = jugarBoton.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    jugarBoton.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })
    jugarBoton.on("pointerup", () => {
      musicaInicio.stop();
      this.scene.start('SelectPers');
    })

    ajustesBoton.on("pointerover", () => {
      rayaAmarilla.x = ajustesBoton.x;
      rayaAmarilla.y = ajustesBoton.y;
      rayaAmarilla.setVisible(true);
    })
    ajustesBoton.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })
    ajustesBoton.on("pointerup", () => {
      musicaInicio.stop();
      this.scene.start('ajustes');
    })


  }

}
