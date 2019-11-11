class seleccionMapa extends Phaser.Scene {
  constructor() {
    super("mapa");
  }

  preload() {
    //------------------ BackGround Load----------------------------------------------//
    this.load.image("escenarioVerde", "../assets/images/backgrounds/mapas/escenario1.png");
    this.load.image("escenarioAzul", "../assets/images/backgrounds/mapas/escenario2.png");
    this.load.image("escenarioRojo", "../assets/images/backgrounds/mapas/escenario3.png");
    this.load.image("fondo", "../assets/images/backgrounds/SelectorPersonaje/Fondo1.jpg");

    //----------------- UI Images --------------------------------------------//
    this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("cambiarEscenario", "../assets/images/userInterface/cambiarEscenario.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
    this.load.image("marcoEscenario", "../assets/images/userInterface/marcoEscenario.png")
    this.load.image("volverMapa", "../assets/images/userInterface/volver.png")

  }
  create() {

    let Background = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "fondo").setDepth(0);

    //------------------Small BackGround----------------------------------------------//
    let escenarioVerde = this.add.image(this.game.renderer.width / 2 + 330, this.game.renderer.height / 2 - 180, "escenarioVerde").setScale(0.25).setDepth(2);
    let escenarioAzul = this.add.image(this.game.renderer.width / 2 + 330, this.game.renderer.height / 2, "escenarioAzul").setScale(0.25).setDepth(2);
    let escenarioRojo = this.add.image(this.game.renderer.width / 2 + 330, this.game.renderer.height / 2 + 180, "escenarioRojo").setScale(0.25).setDepth(2);

    //------------------ Big BackGround----------------------------------------------//
    let escenarioVerdeGrande = this.add.image(this.game.renderer.width / 2 - 145, this.game.renderer.height / 2 - 60, "escenarioVerde").setScale(0.65).setDepth(2);
    let escenarioAzulGrande = this.add.image(this.game.renderer.width / 2 - 145, this.game.renderer.height / 2 - 60, "escenarioAzul").setScale(0.65).setDepth(2);
    let escenarioRojoGrande = this.add.image(this.game.renderer.width / 2 - 145, this.game.renderer.height / 2 - 60, "escenarioRojo").setScale(0.65).setDepth(2);

    //----------------- UI Images --------------------------------------------//
    let jugar = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 + 220, "jugar").setDepth(2);
    let cambiarEscenario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 220, "cambiarEscenario").setDepth(2).setScale(0.8);
    let rayaAmarilla = this.add.image(this.game.renderer.width / 2 - 200, this.game.renderer.height / 2 + 220, "rayaAmarilla").setDepth(1).setScale(1.4);
    let marcoEscenario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "marcoEscenario").setDepth(2).setScale(0.3);
    let volverMapa = this.add.image(this.game.renderer.width / 2 - 430, this.game.renderer.height / 2 - 240, "volverMapa").setDepth(3).setScale(0.12);

    //----------------- Set Interactive --------------------------------------------//
    escenarioVerde.setInteractive();
    escenarioAzul.setInteractive();
    escenarioRojo.setInteractive();
    jugar.setInteractive();
    cambiarEscenario.setInteractive();
    rayaAmarilla.setInteractive();
    marcoEscenario.setInteractive();
    volverMapa.setInteractive();

    //----------------- Set Invisible --------------------------------------------//
    escenarioVerdeGrande.setVisible(false);
    escenarioAzulGrande.setVisible(false);
    escenarioRojoGrande.setVisible(false);
    jugar.setVisible(false);
    rayaAmarilla.setVisible(false);
    cambiarEscenario.setVisible(false);
    marcoEscenario.setVisible(false);


    //----------------- Eventos Raton UI --------------------------------------------//
    volverMapa.on("pointerup", () => {
      this.scene.start('SelectPers');
    })
    
    jugar.on("pointerover", () => {
      rayaAmarilla.x = jugar.x;
      rayaAmarilla.y = jugar.y;
      rayaAmarilla.setVisible(true);
    })
    jugar.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })

    cambiarEscenario.on("pointerup", () => {
      escenarioVerde.setInteractive();
      escenarioAzul.setInteractive();
      escenarioRojo.setInteractive();
      cambiarEscenario.setVisible(false);
      jugar.setVisible(false);
      marcoEscenario.setVisible(false);
    })

    cambiarEscenario.on("pointerover", () => {
      rayaAmarilla.x = cambiarEscenario.x;
      rayaAmarilla.y = cambiarEscenario.y;
      rayaAmarilla.setVisible(true);
    })
    cambiarEscenario.on("pointerout", () => {
      rayaAmarilla.setVisible(false);
    })

    //------------------ Raton por encima de Escenario----------------------------------------------//
    escenarioVerde.on("pointerover", () => {
      escenarioVerdeGrande.setVisible(true);
      escenarioAzulGrande.setVisible(false);
      escenarioRojoGrande.setVisible(false);
    })
    escenarioAzul.on("pointerover", () => {
      escenarioVerdeGrande.setVisible(false);
      escenarioAzulGrande.setVisible(true);
      escenarioRojoGrande.setVisible(false);
    })
    escenarioRojo.on("pointerover", () => {
      escenarioVerdeGrande.setVisible(false);
      escenarioAzulGrande.setVisible(false);
      escenarioRojoGrande.setVisible(true);
    })

    //------------------ Click en Escenario----------------------------------------------//
    escenarioVerde.on("pointerup", () => {
      escenarioVerde.disableInteractive();
      escenarioAzul.disableInteractive();
      escenarioRojo.disableInteractive();

      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);

      marcoEscenario.setVisible(true);
      marcoEscenario.x = escenarioVerde.x;
      marcoEscenario.y = escenarioVerde.y;
    })
    escenarioAzul.on("pointerup", () => {
      escenarioVerde.disableInteractive();
      escenarioAzul.disableInteractive();
      escenarioRojo.disableInteractive();

      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);

      marcoEscenario.setVisible(true);
      marcoEscenario.x = escenarioAzul.x;
      marcoEscenario.y = escenarioAzul.y;
    })
    escenarioRojo.on("pointerup", () => {
      escenarioVerde.disableInteractive();
      escenarioAzul.disableInteractive();
      escenarioRojo.disableInteractive();

      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);

      marcoEscenario.setVisible(true);
      marcoEscenario.x = escenarioRojo.x;
      marcoEscenario.y = escenarioRojo.y;
    })

  }

}
