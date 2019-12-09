class escenaHistorial extends Phaser.Scene {
  constructor() {
    super("sceneHistorial");
  }

  preload() {
    //-------------------------BackGround----------------------------------------//
    this.load.image("portadaHistorial", "../assets/images/backgrounds/menuPrincipal/portadaJuego.png");
    //-----------------------------IU--------------------------------------------//
    this.load.image("historialTitulo", "../assets/images/Historial/Historial.png");
    this.load.image("marcoHistorial", "../assets/images/Historial/marcoEntero.png");
    this.load.image("marcoBuscar", "../assets/images/Historial/marcoBuscar.png");
    this.load.image("buscar", "../assets/images/Historial/Buscar.png");
    this.load.image("cuadroCompleto", "../assets/images/Historial/cuadroCompleto.png");
    this.load.image("volverHistorial", "../assets/images/userInterface/volver.png");

    //this.load.image("idHistorial", "../assets/images/Historial/ID.png");
    //this.load.image("numSala", "../assets/images/Historial/NSala.png");
    //this.load.image("rayaSeparar", "../assets/images/Historial/rayaSeparar.png");
    //this.load.image("marcoJugador1Historial", "../assets/images/userInterface/marcoJugador1.png");
    //this.load.image("marcoJugador2Historial", "../assets/images/userInterface/marcoJugador2.png");
  }

  create() {
    let portadaHistorial = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "portadaHistorial").setDepth(0).setScale(1.1);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    let historialTitulo = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2 - 250, "historialTitulo").setDepth(1).setScale(0.80);
    let texto1 = this.add.text(this.game.renderer.width / 2 - 480, this.game.renderer.height / 2 - 170, "Escribir nombre de usuario",{ fontFamily: '"Roboto Condensed",Verdana, "Times New Roman", Tahoma, serif' , color: '#2d3037'}).setDepth(2).setScale(1.03);
    let buscar = this.add.image(this.game.renderer.width / 2 - 385, this.game.renderer.height / 2 - 215, "buscar").setDepth(1).setScale(0.5);
    let cuadroCompleto = this.add.image(this.game.renderer.width / 2 + 40, this.game.renderer.height / 2 - 150, "cuadroCompleto").setDepth(1).setScale(1.05);
    let marcoHistorial1 = this.add.image(this.game.renderer.width / 2 + 45, this.game.renderer.height / 2 + 35, "marcoHistorial").setDepth(1).setScale(1.05);
    let marcoBuscar = this.add.image(this.game.renderer.width / 2 - 370, this.game.renderer.height / 2 - 160, "marcoBuscar").setDepth(1);
    let volverHistorial = this.add.image(this.game.renderer.width / 2 + 410, this.game.renderer.height / 2 + 245, "volverHistorial").setDepth(1).setScale(0.20);

    //let idHistorial = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 195, "idHistorial").setDepth(1).setScale(0.45);
    //let numSala = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 195, "numSala").setDepth(1).setScale(0.45);
    //let rayaSeparar = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 195, "rayaSeparar").setDepth(1).setScale(0.45);
    //let marcoJugador1Historial = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 195, "marcoJugador1Historial").setDepth(1).setScale(0.45);
    //let marcoJugador2Historial = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 195, "marcoJugador2Historial").setDepth(1).setScale(0.45);


    //--------------setInteractive---------------//
    volverHistorial.setInteractive();

    //-------------eventosRaton------------------//
    volverHistorial.on("pointerup", () => {
      this.scene.start('menu');
    })
  }

}
