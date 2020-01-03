class sala extends Phaser.Scene {
  constructor() {
    super("sceneSala");
  }
  preload() {
    //-------------------------BackGround----------------------------------------//
    this.load.image("portadaSala", "../assets/images/backgrounds/menuPrincipal/portadaJuego.png");
    //-------------------------IU----------------------------------------//
    this.load.image("crear", "../assets/images/Salas/crearActualDisponible.png")
    this.load.image("numSalas", "../assets/images/Salas/numeroSalas.png")
    this.load.image("volverSalas", "../assets/images/userInterface/volver.png")
    this.load.image("actualizar", "../assets/images/Salas/Actualizar.png")
    this.load.image("confirmar", "../assets/images/Salas/Confirmar.png")
    this.load.image("rayaAmarilla", "../assets/images/userInterface/raya.png")
  }
  create(){
	let portadaSala = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "portadaSala").setDepth(0).setScale(1.1);

  let crear = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "crear").setDepth(2).setScale(1);
  let numSalas = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "numSalas").setDepth(2).setScale(1);
  let volverSalas = this.add.image(this.game.renderer.width / 2 - 210, this.game.renderer.height / 2 + 200, "volverSalas").setDepth(2).setScale(0.2);
  let confirmar = this.add.image(this.game.renderer.width / 2 - 210, this.game.renderer.height / 2 - 80, "confirmar").setDepth(2).setScale(0.45);
  let actualizar = this.add.image(this.game.renderer.width / 2 - 210, this.game.renderer.height / 2 + 45, "actualizar").setDepth(2).setScale(0.45);
  let rayaAmarilla = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "rayaAmarilla").setDepth(1).setScale(1);


  //---------------setInteractive--------------//
  confirmar.setInteractive();
  actualizar.setInteractive();
  rayaAmarilla.setInteractive();
  volverSalas.setInteractive();

  //--------------rayaAmarilla----------------//
  rayaAmarilla.setVisible(false);

  confirmar.on("pointerover", () => {
    rayaAmarilla.x = confirmar.x;
    rayaAmarilla.y = confirmar.y;
    rayaAmarilla.setVisible(true);
  })
  confirmar.on("pointerout", () => {
    rayaAmarilla.setVisible(false);
  })

  actualizar.on("pointerover", () => {
    rayaAmarilla.x = actualizar.x;
    rayaAmarilla.y = actualizar.y;
    rayaAmarilla.setVisible(true);
  })
  actualizar.on("pointerout", () => {
    rayaAmarilla.setVisible(false);
  })


  volverSalas.on("pointerup", () => {
  let escenaDestruir = this.scene.get("menu")
  escenaDestruir.scene.remove("menu");
  this.scene.add("menu", menuPrincipal, true);
})

  }

}
