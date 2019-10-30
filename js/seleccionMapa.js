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

  let escenario1 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "escenarioVerde");


}

}
