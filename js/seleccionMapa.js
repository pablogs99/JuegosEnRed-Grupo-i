class seleccionMapa extends Phaser.Scene {
    constructor() {
      super("mapa");
    }

    preload(){
      //escenario1 = verde , escenario2 = azul , escenario3 = rojo
        this.load.image("escenarioVerde", "../assets/images/backgrounds/mapas/escenario1.png");
        this.load.image("escenarioAzul", "../assets/images/backgrounds/mapas/escenario2.png");
        this.load.image("escenarioRojo", "../assets/images/backgrounds/mapas/escenario3.png");

    }
    create(){

  let escenarioVerde=  this.add.image(this.game.renderer.width / 2 + 430, this.game.renderer.height / 2 - 200, "escenarioVerde").setScale(0.25);
  let escenarioAzul =  this.add.image(this.game.renderer.width / 2 + 430, this.game.renderer.height / 2 , "escenarioAzul").setScale(0.25);
  let escenarioRojo =  this.add.image(this.game.renderer.width / 2 + 430, this.game.renderer.height / 2 + 200, "escenarioRojo").setScale(0.25);

  let escenarioVerdeGrande=  this.add.image(this.game.renderer.width / 2 - 185, this.game.renderer.height / 2 - 57, "escenarioVerde").setScale(0.65);
  let escenarioAzulGrande =  this.add.image(this.game.renderer.width / 2 - 185, this.game.renderer.height / 2 - 57, "escenarioAzul").setScale(0.65);
  let escenarioRojoGrande =  this.add.image(this.game.renderer.width / 2 - 185, this.game.renderer.height / 2 - 57, "escenarioRojo").setScale(0.65);

  escenarioVerde.setInteractive();
  escenarioAzul.setInteractive();
  escenarioRojo.setInteractive();

  escenarioVerdeGrande.setVisible(false);
  escenarioAzulGrande.setVisible(false);
  escenarioRojoGrande.setVisible(false);

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

}
