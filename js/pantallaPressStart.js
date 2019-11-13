class pantallaPressStart extends Phaser.Scene {
    constructor() {
      super("pressStart"); 
    }

    preload(){
        this.load.image("logo", "../assets/images/userInterface/logoPAWStudios.png");
    }
    create(){
        this.add.image()

        let logo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 60, "logo").setScale(0.35);
        this.add.text(this.game.renderer.width / 2 - 115 , this.game.renderer.height / 2 + 240, "Press any button to start");

        this.input.on('pointerup', function (pointer) {

            this.scene.start('menu');

        }, this);

        this.input.keyboard.on('keydown', function () {

         this.scene.start('menu');

        }, this);

    }


}
