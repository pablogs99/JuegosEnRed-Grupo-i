class ajustes extends Phaser.Scene {
  constructor() {
    super("ajustes"); //super("identificador de la escena") hace que esta escena herede todas las caracterisitcas de la clase scene de Phaser
  }

  preload() {
    //------------------ BackGround----------------------------------------------//
    this.load.image("FondoAjustes", "../assets/images/backgrounds/ajustes/fondoazul.jpg");
  }

create(){

    let FondoAjustes = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "FondoAjustes").setDepth(0);


}



}