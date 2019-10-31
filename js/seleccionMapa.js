class seleccionMapa extends Phaser.Scene {
  constructor() {
    super("mapa");
  }

  preload() {
    //------------------ BackGround Load----------------------------------------------//
    this.load.image("escenarioVerde", "../assets/images/backgrounds/mapas/escenario1.png");
    this.load.image("escenarioAzul", "../assets/images/backgrounds/mapas/escenario2.png");
    this.load.image("escenarioRojo", "../assets/images/backgrounds/mapas/escenario3.png");
    this.load.image("blueBackground", "../assets/images/backgrounds/mapas/blueMapBackground.jpg");

    //----------------- UI Images --------------------------------------------//
    this.load.image("jugar", "../assets/images/userInterface/jugarBoton.png");
    this.load.image("cambiarEscenario", "../assets/images/userInterface/cambiarEscenario.png");
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")

  }
  create() {
    var clickJugar = false;

    let blueBackground = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "blueBackground").setDepth(0);
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

    //----------------- Set Interactive --------------------------------------------//
    escenarioVerde.setInteractive();
    escenarioAzul.setInteractive();
    escenarioRojo.setInteractive();
    jugar.setInteractive();
    cambiarEscenario.setInteractive();
    rayaAmarilla.setInteractive();

    //----------------- Set Invisible --------------------------------------------//
    escenarioVerdeGrande.setVisible(false);
    escenarioAzulGrande.setVisible(false);
    escenarioRojoGrande.setVisible(false);
    jugar.setVisible(false);
    rayaAmarilla.setVisible(false);
    cambiarEscenario.setVisible(false);


  //----------------- Eventos Raton IU --------------------------------------------//
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
      escenarioVerde.setInteractive();
      escenarioAzul.disableInteractive();
      escenarioRojo.disableInteractive();
      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);
    })
    escenarioAzul.on("pointerup", () => {
      escenarioVerde.disableInteractive();
      escenarioAzul.setInteractive();
      escenarioRojo.disableInteractive();
      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);
    })
    escenarioRojo.on("pointerup", () => {
      escenarioVerde.disableInteractive();
      escenarioAzul.disableInteractive();
      escenarioRojo.setInteractive();
      cambiarEscenario.setVisible(true);
      jugar.setVisible(true);
    })

  }

}
