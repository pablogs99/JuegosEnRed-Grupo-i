class seleccionMapa extends Phaser.Scene {
    constructor() {
      super("mapa");
    }

    preload(){
      //escenario1 = verde , escenario2 = verde/azul , escenario3 = rojo
        this.load.image("escenario1", "../assets/images/backgrounds/mapas/escenario1.png");
        this.load.image("escenario2", "../assets/images/backgrounds/mapas/escenario2.png");
        this.load.image("escenario3", "../assets/images/backgrounds/mapas/escenario3.png");
    }
    create(){

  let escenario1 = this.add.image(400,300, "escenario1").setScale(0.6);


}

}
