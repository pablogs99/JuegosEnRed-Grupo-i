var juego = new Juego();
var controladorHistorial = new controladorHistorial();

class pantallaPressStart extends Phaser.Scene {
  constructor() {
    super("pressStart");
  }

  preload() {
    this.load.image("logo", "../assets/images/userInterface/logoPAWStudios.png");
  }
  create() {
    this.add.image()

    let logo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 60, "logo").setScale(0.35);
    let texto = this.add.text(this.game.renderer.width / 2 - 115, this.game.renderer.height / 2 + 240, "Pulsa cualquier tecla para jugar");

    logo.alpha = 0;
    this.tweens.add({
      targets: logo,
      alpha: 1,
      duration: 3750,
      yoyo: false,
      delay: 0
    });

    texto.alpha = 0;
    this.tweens.add({
      targets: texto,
      alpha: 1,
      duration: 1500,
      yoyo: true,
      loop: -1, //infinito
      delay: 500

    });

    this.input.on('pointerup', function(pointer) {

      this.scene.start('menu');

    }, this);

    this.input.keyboard.on('keydown', function() {

      this.scene.start('menu');

    }, this);

    this.game.config.suena = false;
    console.log(this.game.config.suena)
  }

}
