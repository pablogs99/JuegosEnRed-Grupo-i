var config = {
    type: Phaser.AUTO,
    parent: "canvas",
	expandParent :true,
	width: 1000,
	height: 600,
<<<<<<< HEAD
    scene: [pantallaPressStart,menuPrincipal,ajustes,selectorPersonaje,seleccionMapa],
	scale: {
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    suena: false,
=======
    scene: [pantallaPressStart,menuPrincipal,selectorPersonaje,seleccionMapa,combate],
	scale: {
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
	physics:{
		default :'arcade',
		arcade : {
			debug : false,
			graviy: {y:10000},
		},
	}
>>>>>>> master
};

var game = new Phaser.Game(config);
