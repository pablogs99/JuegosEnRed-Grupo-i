var conexion = new WebSocket("ws://localhost:8080/ws");
var infoWS;
//--------- Manejadores del WebSocket ------------------------------
conexion.onopen = function () {
  conexion.send("registrar");
};

conexion.onerror = function (error) {
  console.log("Error: " + error);
};

conexion.onmessage = function (mensaje) {
  // console.log("Mensaje Recivido");
  infoWS = mensaje.data;
  console.log("Mensaje del WS: " + infoWS);
};

var manejadorWS = new manejadorJugadores();
var mensajeEnviado;

var config = {
  type: Phaser.AUTO,
  parent: "canvas",
  expandParent: true,
  width: 1000,
  height: 600,
  scene: [
    pantallaPressStart,
    menuPrincipal,
    escenaHistorial,
    selectorPersonaje,
    seleccionMapa,
  ],
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      graviy: { y: 10000 },
    },
  },
};

var game = new Phaser.Game(config);
