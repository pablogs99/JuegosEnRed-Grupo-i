var config = {
    type: Phaser.AUTO,
    parent: "canvas",
	expandParent :true,
	width: 800,
	height: 600,
    scene: [pantallaPressStart,menuPrincipal,seleccionMapa],
	scale: {
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

var game = new Phaser.Game(config);
