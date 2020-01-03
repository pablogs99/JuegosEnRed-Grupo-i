class usuario extends Phaser.Scene {
  constructor() {
    super("sceneUsuario");
  }
  preload() {
    //------------------ BackGround----------------------------------------------//
    this.load.image("portadaUsuario", "../assets/images/backgrounds/menuPrincipal/portadaSolo.png");
    //----------------- UI Images --------------------------------------------//
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
    this.load.image("nombreUsuario", "../assets/images/userInterface/nombreUsuario.png")
    this.load.image("confirmarUsuario", "../assets/images/Salas/Confirmar.png")
  }
  create(){
  let portadaUsuario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "portadaUsuario").setDepth(0).setScale(1.1);
  //----------------- UI Images --------------------------------------------//
  let nombreUsuario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "nombreUsuario").setDepth(2).setScale(1);
  let rayaAmarilla = this.add.image(400, 330, "rayaAmarilla").setDepth(1).setScale(1.4);
  let confirmarUsuario = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 165, "confirmarUsuario").setDepth(2).setScale(0.45);

  //---------------setInteractive--------------//
  confirmarUsuario.setInteractive();
  rayaAmarilla.setInteractive();

  //--------------rayaAmarilla----------------//
  rayaAmarilla.setVisible(false);

  confirmarUsuario.on("pointerover", () => {
    rayaAmarilla.x = confirmarUsuario.x;
    rayaAmarilla.y = confirmarUsuario.y;
    rayaAmarilla.setVisible(true);
  })
  confirmarUsuario.on("pointerout", () => {
    rayaAmarilla.setVisible(false);
  })

 //-----------ClickON-------------------//
 confirmarUsuario.on("pointerup", () => {
     this.scene.start('menu');
 })


  }
}
