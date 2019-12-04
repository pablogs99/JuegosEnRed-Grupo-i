var config = {
    type: Phaser.AUTO,
    parent: "canvas",
	expandParent :true,
	width: 1000,
	height: 600,
    scene: [pantallaPressStart,menuPrincipal,escenaHistorial,selectorPersonaje,seleccionMapa,combate],
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
};

var game = new Phaser.Game(config);
