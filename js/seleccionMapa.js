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
    let jugar = this.add.image(this.game.renderer.width / 2 - 130, this.game.renderer.height / 2 + 220, "jugar").setDepth(2);
    let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4);

    escenarioVerde.setInteractive();
    escenarioAzul.setInteractive();
    escenarioRojo.setInteractive();

    jugar.setInteractive();
    rayaAmarilla.setInteractive();

    escenarioVerdeGrande.setVisible(false);
    escenarioAzulGrande.setVisible(false);
    escenarioRojoGrande.setVisible(false);

    jugar.setVisible(false);
    rayaAmarilla.setVisible(false);

    if (clickJugar == false) {
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
    }

    //------------------ Click en Escenario----------------------------------------------//
    escenarioVerde.on("pointerup", () => {
      this.clickJugar = true;
      jugar.setVisible(true);
    })
    escenarioAzul.on("pointerup", () => {
      this.clickJugar = true;
      jugar.setVisible(true);
    })
    escenarioRojo.on("pointerup", () => {
      this.clickJugar = true;
      jugar.setVisible(true);
    })

  }

}
