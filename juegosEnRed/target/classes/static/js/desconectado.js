class desconectado extends Phaser.Scene {
  constructor() {
    super("desconectado");
  }

  preload() {
    this.load.image(
      "desconMsg",
      "../assets/images/backgrounds/menuPrincipal/pantallaDeDesconexion.png"
    );
  }
  create() {
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2 - 20,
        "desconMsg"
      )
      .setDepth(0)
      .setScale(1.1);
  }
}
