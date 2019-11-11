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
    this.load.image("soundOn", "../assets/images/userInterface/Sonido-ON.png")
    this.load.image("soundOff", "../assets/images/userInterface/Sonido-OFF.png")
    this.load.image("controles", "../assets/images/userInterface/controles.png")
    this.load.image("volver", "../assets/images/userInterface/volver.png")
    this.load.image("creditos", "../assets/images/userInterface/Creditos.png")
  


    //----------------------- Audio ----------------------------------//
    this.load.audio("musicaInicio", "../assets/audio/menuPrincipal/theme-of-wargroove.mp3");
  }

  create() {

    //Se le suma al eje y para bajarlo
    //Se le suma al eje x para moverlo a la derecha
    //------------------ BackGround----------------------------------------------//
    let portada = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "portada").setDepth(0);

    //------------------ UI Images ----------------------------------------------//
    let jugarBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 40, "jugar").setDepth(2);
    let ajustesBoton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 140, "ajustes").setDepth(2);
    let creditos = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 230, "creditos").setDepth(2).setScale(0.45);
    let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4);
    let soundOn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 40, "soundOn").setDepth(1).setScale(0.55);
    let soundOff = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 40, "soundOff").setDepth(1).setScale(0.55);
    let controles = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 130, "controles").setDepth(1).setScale(0.55);
    let volver = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 220, "volver").setDepth(1).setScale(0.23);


    //------------------ Audio ----------------------------------------------//
    let musicaInicio = this.sound.add("musicaInicio");
    musicaInicio.play();

    //----------------- Set Interactive --------------------------------------------//
    jugarBoton.setInteractive();
    ajustesBoton.setInteractive();
    soundOff.setInteractive();
    soundOn.setInteractive();
    controles.setInteractive();
    volver.setInteractive();
    creditos.setInteractive();

    //----------------- Set Invisible --------------------------------------------//
    rayaAmarilla.setVisible(false);
    soundOn.setVisible(false);
    soundOff.setVisible(false);
    controles.setVisible(false);
    volver.setVisible(false);

    /*
      Eventos de raton:
      pointerover - encima del objeto
      pointerout - deja de estar encima del objeto
      pointerup - click y soltar
      pointerDown - solo click
    */
    //----------------- Raya Amarilla UI --------------------------------------------//
  
    jugarBoton.on("pointerover", () => {
      rayaAmarilla.x = jugarBoton.x; //Que la posicion sea la misma que la del botonJugar
      rayaAmarilla.y = jugarBoton.y;
      rayaAmarilla.setVisible(true); //ahora es visible
    })
    jugarBoton.on("pointerout", () => {
      rayaAmarilla.setVisible(false); // invisible si no esta el raton encima
    })

    soundOn.on("pointerover", () => {
      rayaAmarilla.x = soundOn.x; 
      rayaAmarilla.y = soundOn.y;
      rayaAmarilla.setVisible(true); 
    })
    soundOn.on("pointerout", () => {
      rayaAmarilla.setVisible(false); 
    })

    soundOff.on("pointerover", () => {
      rayaAmarilla.x = soundOff.x; 
      rayaAmarilla.y = soundOff.y;
      rayaAmarilla.setVisible(true); 
    })
    soundOff.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })

    controles.on("pointerover", () => {
      rayaAmarilla.x = controles.x;
      rayaAmarilla.y = controles.y;
      rayaAmarilla.setVisible(true);
    })
    controles.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })

    volver.on("pointerover", () => {
      rayaAmarilla.x = volver.x; 
      rayaAmarilla.y = volver.y;
      rayaAmarilla.setVisible(true);
    })
    volver.on("pointerout", () => {
      rayaAmarilla.setVisible(false); 
    })

    creditos.on("pointerover", () => {
      rayaAmarilla.x = creditos.x; 
      rayaAmarilla.y = creditos.y;
      rayaAmarilla.setVisible(true); 
    })
    creditos.on("pointerout", () => {
      rayaAmarilla.setVisible(false); 
    })

    ajustesBoton.on("pointerover", () => {
      rayaAmarilla.x = ajustesBoton.x;
      rayaAmarilla.y = ajustesBoton.y;
      rayaAmarilla.setVisible(true);
    })
    ajustesBoton.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })


     //----------------- Click En Botones UI --------------------------------------------//
    jugarBoton.on("pointerup", () => {
      musicaInicio.stop();
      this.scene.start('SelectPers');
    })

    ajustesBoton.on("pointerup", () => {
      soundOn.setVisible(true);
      controles.setVisible(true);
      volver.setVisible(true);
      creditos.setVisible(false);
      ajustesBoton.setVisible(false);
      jugarBoton.setVisible(false);
    })

    volver.on("pointerup", () => {
      soundOn.setVisible(false);
      soundOff.setVisible(false);
      controles.setVisible(false);
      volver.setVisible(false);
      creditos.setVisible(true);
      ajustesBoton.setVisible(true);
      jugarBoton.setVisible(true);
    })

    soundOn.on("pointerup",() =>{
      soundOff.setVisible(true);
      musicaInicio.pause();
      soundOn.setVisible(false);
    })
    soundOff.on("pointerup",() =>{
      soundOn.setVisible(true);
      musicaInicio.resume();
      soundOff.setVisible(false);
    })
    
  }

}
