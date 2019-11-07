var config = {
    type: Phaser.AUTO,
    parent: "canvas",
	expandParent :true,
	width: 1000,
	height: 600,
    scene: [pantallaPressStart,menuPrincipal,ajustes,selectorPersonaje,seleccionMapa],
	scale: {
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

var game = new Phaser.Game(config);
