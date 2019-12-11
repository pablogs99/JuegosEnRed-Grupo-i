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
	this.load.image("cuadro1","../assets/images/Historial/marco1.png");
	this.load.image("cuadro2","../assets/images/Historial/marco2.png");
	this.load.image("barra","../assets/images/Historial/rayaSeparar.png")
    this.load.image("volverHistorial", "../assets/images/userInterface/volver.png");
	this.load.image("victoria","../assets/images/Historial/Victoria.png")
	this.load.image("derrota","../assets/images/Historial/Derrota.png")
	this.load.image("cabeza1","../assets/images/userInterface/caballeroCabeza.png");
	this.load.image("cabeza2","../assets/images/userInterface/lanceroCabeza.png");
	this.load.image("cabeza3","../assets/images/userInterface/elfoCabeza.png");

    //this.load.image("idHistorial", "../assets/images/Historial/ID.png");
    //this.load.image("numSala", "../assets/images/Historial/NSala.png");
    //this.load.image("rayaSeparar", "../assets/images/Historial/rayaSeparar.png");
    //this.load.image("marcoJugador1Historial", "../assets/images/userInterface/marcoJugador1.png");
    //this.load.image("marcoJugador2Historial", "../assets/images/userInterface/marcoJugador2.png");
  }

  create() {
    actualizarHistorial;
	controladorHistorial.separar();
	
	
	let portadaHistorial = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "portadaHistorial").setDepth(0).setScale(1.1);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    let historialTitulo = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2 - 250, "historialTitulo").setDepth(1).setScale(0.80);
    let texto1 = this.add.text(this.game.renderer.width / 2 - 480, this.game.renderer.height / 2 - 170, "Escribir nombre de usuario",{ fontFamily: '"Roboto Condensed",Verdana, "Times New Roman", Tahoma, serif' , color: '#2d3037'}).setDepth(2).setScale(1.03);
    let buscar = this.add.image(this.game.renderer.width / 2 - 385, this.game.renderer.height / 2 - 215, "buscar").setDepth(1).setScale(0.5);
	
	let marco11 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-150,"cuadro1").setDepth(1).setScale(0.75);
	let marco12 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2 - 25,"cuadro1").setDepth(1).setScale(0.75);
	let marco13 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2 + 100,"cuadro1").setDepth(1).setScale(0.75);
	let marco14 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2 + 225,"cuadro1").setDepth(1).setScale(0.75);
	
	let marco21 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-150,"cuadro2").setDepth(1).setScale(0.75);
	let marco22 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2 - 25,"cuadro2").setDepth(1).setScale(0.75);
	let marco23 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2 + 100,"cuadro2").setDepth(1).setScale(0.75);
	let marco24 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2 + 225,"cuadro2").setDepth(1).setScale(0.75);
	
	let barraSeparar1 = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2-150,"barra").setDepth(1).setScale(0.50);
	let barraSeparar2 = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2-25,"barra").setDepth(1).setScale(0.50);
	let barraSeparar3 = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2+100,"barra").setDepth(1).setScale(0.50);
	let barraSeparar4 = this.add.image(this.game.renderer.width / 2 + 50, this.game.renderer.height / 2+225,"barra").setDepth(1).setScale(0.50);
	
	let victoria11 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2-150,"victoria").setDepth(1).setScale(0.25);
	let victoria12 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2-25,"victoria").setDepth(1).setScale(0.25);
	let victoria13 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2+100,"victoria").setDepth(1).setScale(0.25);
	let victoria14 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2+225,"victoria").setDepth(1).setScale(0.25);
	
	let victoria21 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2-150,"victoria").setDepth(1).setScale(0.25);
	let victoria22 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2-25,"victoria").setDepth(1).setScale(0.25);
	let victoria23 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2+100,"victoria").setDepth(1).setScale(0.25);
	let victoria24 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2+225,"victoria").setDepth(1).setScale(0.25);
	
	let derrota11 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2-150,"derrota").setDepth(1).setScale(0.25);
	let derrota12 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2-25,"derrota").setDepth(1).setScale(0.25);
	let derrota13 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2+100,"derrota").setDepth(1).setScale(0.25);
	let derrota14 = this.add.image(this.game.renderer.width / 2 -25, this.game.renderer.height / 2+225,"derrota").setDepth(1).setScale(0.25);
	
	let derrota21 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2-150,"derrota").setDepth(1).setScale(0.25);
	let derrota22 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2-25,"derrota").setDepth(1).setScale(0.25);
	let derrota23 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2+100,"derrota").setDepth(1).setScale(0.25);
	let derrota24 = this.add.image(this.game.renderer.width / 2 +125, this.game.renderer.height / 2+225,"derrota").setDepth(1).setScale(0.25);
	
	let cabeza111 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-150,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza112 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-25,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza113 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+100,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza114 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+225,"cabeza1").setDepth(1).setScale(0.1);	
	let cabeza121 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-150,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza122 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-25,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza123 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+100,"cabeza1").setDepth(1).setScale(0.1);
	let cabeza124 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+225,"cabeza1").setDepth(1).setScale(0.1);
	
	let cabeza211 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-150,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza212 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-25,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza213 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+100,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza214 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+225,"cabeza2").setDepth(1).setScale(0.1);	
	let cabeza221 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-150,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza222 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-25,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza223 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+100,"cabeza2").setDepth(1).setScale(0.1);
	let cabeza224 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+225,"cabeza2").setDepth(1).setScale(0.1);
	
	let cabeza311 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-150,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza312 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2-25,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza313 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+100,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza314 = this.add.image(this.game.renderer.width / 2-125, this.game.renderer.height / 2+225,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza321 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-150,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza322 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2-25,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza323 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+100,"cabeza3").setDepth(1).setScale(0.1);
	let cabeza324 = this.add.image(this.game.renderer.width / 2+225, this.game.renderer.height / 2+225,"cabeza3").setDepth(1).setScale(0.1);
	
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
	
	//-------------- visibility -----------------------------------
	victoria11.setVisible(false);
	victoria12.setVisible(false);
	victoria13.setVisible(false);
	victoria14.setVisible(false);
	victoria21.setVisible(false);
	victoria22.setVisible(false);
	victoria23.setVisible(false);
	victoria24.setVisible(false);
	
	derrota11.setVisible(false);
	derrota12.setVisible(false);
	derrota13.setVisible(false);
	derrota14.setVisible(false);
	derrota21.setVisible(false);
	derrota22.setVisible(false);
	derrota23.setVisible(false);
	derrota24.setVisible(false);
	
	cabeza111.setVisible(false);
	cabeza112.setVisible(false);
	cabeza113.setVisible(false);
	cabeza114.setVisible(false);
	cabeza121.setVisible(false);
	cabeza122.setVisible(false);
	cabeza123.setVisible(false);
	cabeza124.setVisible(false);
	
	cabeza211.setVisible(false);
	cabeza212.setVisible(false);
	cabeza213.setVisible(false);
	cabeza214.setVisible(false);
	cabeza221.setVisible(false);
	cabeza222.setVisible(false);
	cabeza223.setVisible(false);
	cabeza224.setVisible(false);
	
	cabeza311.setVisible(false);
	cabeza312.setVisible(false);
	cabeza313.setVisible(false);
	cabeza314.setVisible(false);
	cabeza321.setVisible(false);
	cabeza322.setVisible(false);
	cabeza323.setVisible(false);
	cabeza324.setVisible(false);
	

    //-------------eventosRaton------------------//
    volverHistorial.on("pointerup", () => {
      this.scene.start('menu');
    })
	
	
	
	//////////////////////////// MARCO 1 //////////////////////////////////
	switch (controladorHistorial.historia1.charAt(0)) {
		case '1':
			cabeza111.setVisible(true);
			break;
		case '2':
			cabeza211.setVisible(true);
			break;
		case '3':
			cabeza311.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia1.charAt(1)){
		case '1':
			cabeza121.setVisible(true);
			break;
		case '2':
			cabeza221.setVisible(true);
			break;
		case '3':
			cabeza321.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia1.charAt(2)){
		case '0':
			victoria21.setVisible(true);
			derrota11.setVisible(true);
			break;
		case '1':
			victoria11.setVisible(true);
			derrota21.setVisible(true);
			break;
	}
	
	/////////////////////////// MARCO 2 ///////////////////////////////
	switch (controladorHistorial.historia2.charAt(0)) {
		case '1':
			cabeza112.setVisible(true);
			break;
		case '2':
			cabeza212.setVisible(true);
			break;
		case '3':
			cabeza312.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia2.charAt(1)){
		case '1':
			cabeza122.setVisible(true);
			break;
		case '2':
			cabeza222.setVisible(true);
			break;
		case '3':
			cabeza322.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia2.charAt(2)){
		case '0':
			victoria22.setVisible(true);
			derrota12.setVisible(true);
			break;
		case '1':
			victoria12.setVisible(true);
			derrota22.setVisible(true);
			break;
	}
	
	///////////////////////////// MARCO 3 ///////////////////////////
	
	switch (controladorHistorial.historia3.charAt(0)) {
		case '1':
			cabeza113.setVisible(true);
			break;
		case '2':
			cabeza213.setVisible(true);
			break;
		case '3':
			cabeza313.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia3.charAt(1)){
		case '1':
			cabeza123.setVisible(true);
			break;
		case '2':
			cabeza223.setVisible(true);
			break;
		case '3':
			cabeza323.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia3.charAt(2)){
		case '0':
			victoria23.setVisible(true);
			derrota13.setVisible(true);
			break;
		case '1':
			victoria13.setVisible(true);
			derrota23.setVisible(true);
			break;
	}
	
	////////////////////////// MARCO 4 ////////////////////////////
	switch (controladorHistorial.historia4.charAt(0)) {
		case '1':
			cabeza114.setVisible(true);
			break;
		case '2':
			cabeza214.setVisible(true);
			break;
		case '3':
			cabeza314.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia4.charAt(1)){
		case '1':
			cabeza124.setVisible(true);
			break;
		case '2':
			cabeza224.setVisible(true);
			break;
		case '3':
			cabeza324.setVisible(true);
			break;
	}
	
	switch(controladorHistorial.historia4.charAt(2)){
		case '0':
			victoria24.setVisible(true);
			derrota14.setVisible(true);
			break;
		case '1':
			victoria14.setVisible(true);
			derrota24.setVisible(true);
			break;
	}
	
  }
  
   update(){
	  
  }

}


