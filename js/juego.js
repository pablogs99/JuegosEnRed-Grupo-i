var config = {
    type: Phaser.AUTO,
    parent: "canvas",
	expandParent :true,
	width: 800,
	height: 600,
<<<<<<< Updated upstream
    scene: [menuPrincipal],
=======
    scene: [pantallaPressStart,menuPrincipal,selectorPersonaje,seleccionMapa,combate],
>>>>>>> Stashed changes
	scale: {
   
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
<<<<<<< Updated upstream
=======
	physics:{
		default :'arcade',
		arcade : {
			debug : false,
			graviy: {y:10000},
		},
	}
>>>>>>> Stashed changes
};

var game = new Phaser.Game(config);
