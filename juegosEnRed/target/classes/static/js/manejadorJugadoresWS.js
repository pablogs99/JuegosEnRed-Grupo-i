function manejadorJugadores() {
  this.jugadorID;
  this.jugadorContrarioPersonaje;

  this.setJugador = function (msg) {
    console.log(msg);
    if (msg == "J1") {
      this.jugadorID = 1;
      //console.log("Id del jugador: " + this.jugadorID);

      // Jugador 2 queda vinculado a los controladores del ws
    } else if (msg == "J2") {
      this.jugadorID = 2;
      //console.log("Id del jugador: " + this.jugadorID)
      //jugador 1 queda vinculado a los controladores del ws
    }
  };

  this.enviarSeleccionPersonaje = function (personaje) {
    conexion.send(personaje);
  };

  this.recivirPersonaje = function () {
    var mensaje = "";

    switch (infoWS) {
      case "SelecMapa":
        console.log("Hemos pasado a la seleccion de mapa");
        infoWS = "";
        mensaje = "SelecMapa";
        break;
      case "caballero":
        infoWS = "";
        mensaje = "caballero";
        break;
      case "elfo":
        infoWS = "";
        mensaje = "elfo";
        break;
      case "lancero":
        infoWS = "";
        mensaje = "lancero";
        break;
    }

    return mensaje;
  };

  this.recivirEscenario = function () {
    var mensaje = "";
    switch (infoWS) {
      case "combate":
        console.log("Empieza el combate");
        infoWS = "";
        mensaje = "combate";
        break;
      case "cambioEscenario":
        infoWS = "";
        mensaje = "cambioEscenario";
        break;
      case "escenarioVerde":
        infoWS = "";
        mensaje = "escenarioVerde";
        break;
      case "escenarioAzul":
        infoWS = "";
        mensaje = "escenarioAzul";
        break;
      case "escenarioRojo":
        infoWS = "";
        mensaje = "escenarioRojo";
        break;
    }
    return mensaje;
  };

  this.recivirEstadoJugador = function () {
    if (infoWS != "") {
      if (infoWS.charAt(0) == "D") {
        jugador2.controladorTecladoDown(infoWS.substring(1));
      } else if (infoWS.charAt(0) == "U") {
        jugador2.controladorTecladoUp(infoWS.substring(1));
      }
      infoWS = "";
    }
  };

  this.enviarTeclaDown = function (valor) {
    if (mensajeEnviado != "D" + valor) {
      conexion.send("D" + valor);
      mensajeEnviado = "D" + valor;
    }
  };

  this.enviarTeclaUp = function (valor) {
    if (mensajeEnviado != "U" + valor) {
      conexion.send("U" + valor);
      mensajeEnviado = "U" + valor;
    }
  };

  this.recivirFinCombate = function () {
    if (infoWS == "finCombate") {
      console.log("FinCombate");
      juego.fin = true;
      infoWS = "";
    }
  };

  this.recivirFinPartida = function () {
    mensaje = "";
    switch (infoWS) {
      case "volverCombate":
        infoWS = "";
        mensaje = "volverCombate";
        break;
      case "volverEscenario":
        infoWS = "";
        mensaje = "volverEscenario";
        break;
      case "volverPersonaje":
        infoWS = "";
        mensaje = "volverPersonaje";
        break;
      case "volverMenu":
        infoWS = "";
        mensaje = "volverMenu";
        break;
    }
    return mensaje;
  };

  this.enviarInfoJugador = function (x, y, e, an, f, salud) {
    mensaje = {
      posX: x,
      posY: y,
      energia: e,
      animacionActual: an,
      flip: f,
      //AÑADE PROTEGE CAPULLO
      eSalud: salud,
    };
    conexion.send(JSON.stringify(mensaje));
  };

  this.recibirInfoJugador = function () {
    if (infoWS.charAt(0) == "{") {
      return infoWS;
    } else {
      return "";
    }
  };
}
