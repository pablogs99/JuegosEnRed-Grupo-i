var jugador1;
var jugador2;
var desconectadoPuesto = false;

var actualizarEstado = function (state) {
  if (state != "") {
    estado = JSON.parse(state);
    jugador2.sprite.body.x = estado.posX;
    jugador2.sprite.body.y = estado.posY;
    jugador2.energia = estado.energia;
    jugador2.animacionActual = estado.animacionActual;
    jugador2.sprite.flipX = estado.flip;
    jugador2.accion.protege = estado.protege;
    jugador1.hp = estado.eSalud;
  }
};

class combate extends Phaser.Scene {
  constructor() {
    super("combate");
  }

  preload() {
    //Creamos los objetos jugador

    if (manejadorWS.jugadorID == 1) {
      jugador1 = new Jugador(1, juego.personajeJugador1, false);
      jugador2 = new Jugador(-1, juego.personajeJugador2, true);
    } else if (manejadorWS.jugadorID == 2) {
      jugador1 = new Jugador(-1, juego.personajeJugador2, false);
      jugador2 = new Jugador(1, juego.personajeJugador1, true);
    }

    //Cargamos los datos del personaje

    //Cargamos las hojas de sprites
    jugador1.loadSprites(this);
    jugador2.loadSprites(this);

    //Cargamos el fondo seleccionado con sus plataformas correspondientes y lo llevamos al fondo
    juego.preloadMapas(this);

    //Cargamos la interfaz de usuraio
    juego.preloadUI(this);
  }

  create() {
    juego.escena = this;
    this.physics.world.setBounds(0, 100, 1000, 500, true, true, false, true);
    //Cargamos animaciones sprites jugador 1
    jugador1.createAnimations(this);
    jugador2.createAnimations(this);

    //Configuramos el sprite y lo colocamos en el canvas
    jugador1.setSprite(this);
    jugador2.setSprite(this);

    //Cargamos el fondo
    this.add.image(500, 300, "fondoCombate");

    //Cargamos la UI
    juego.createUI(this);

    //Añadimos el collider con las plataformas
    this.physics.add.collider(jugador1.sprite, juego.plataformas, function () {
      jugador1.colisionPlataforma(jugador1.sprite, juego.plataformas);
    });
    this.physics.add.collider(jugador2.sprite, juego.plataformas, function () {
      jugador2.colisionPlataforma(jugador2.sprite, juego.plataformas);
    });

    jugador1.colisionArma = this.physics.add.collider(
      jugador1.hitbox,
      jugador2.sprite,
      function () {
        jugador1.colisionAtaque(jugador2);
      }
    );
    jugador1.colisionArma.active = false;
    jugador2.colisionArma = this.physics.add.collider(
      jugador2.hitbox,
      jugador1.sprite,
      function () {
        jugador2.colisionAtaque(jugador1);
      }
    );
    jugador2.colisionArma.active = false;

    this.input.keyboard.on(
      "keydown-" + "T",
      function () {
        this.scene.start("finPartida");
      },
      this
    );
  }

  update() {
    manejadorWS.recivirFinCombate();
    //
    if (conexion.readyState == 3) {
      if (!desconectadoPuesto) {
        desconectadoPuesto = true;
        this.scene.add("desconectado", desconectado, true);
      }
    }

    // Recogemos información de teclado
    juego.checkInputPersonaje1(this);
    juego.checkInputPersonaje2(this);

    //plataformas.setVelocityX(10);

    //Iniciamos la animacion actual del personaje
    jugador1.playAnimation(this);
    jugador2.playAnimation(this);

    jugador1.comprobarEstado(this);
    jugador2.comprobarEstado(this);

    manejadorWS.enviarInfoJugador(
      jugador1.sprite.body.x,
      jugador1.sprite.body.y,
      jugador1.energia,
      jugador1.animacionActual,
      jugador1.sprite.flipX,
      jugador1.accion.protege,
      jugador2.hp
    );

    actualizarEstado(manejadorWS.recibirInfoJugador());

    // manejadorWS.recivirInfoJugador();

    //manejadorWS.enviarInfoJugador(jugador1.sprite.body.x);

    if (juego.fin) {
      juego.fin = false;

      let historia = "";

      switch (juego.personajeJugador1.personaje) {
        case "caballero":
          historia += "1";
          break;
        case "lancero":
          historia += "2";
          break;
        case "elfo":
          historia += "3";
          break;
      }

      switch (juego.personajeJugador2.personaje) {
        case "caballero":
          historia += "1";
          break;
        case "lancero":
          historia += "2";
          break;
        case "elfo":
          historia += "3";
          break;
      }

      //console.log(juego.campeon)

      historia += juego.campeon;

      //console.log(historia)

      if (manejadorWS.jugadorID == 1) {
        $.ajax({
          method: "POST",
          url: "/historial/" + historia,
        });

        actualizarHistorial();
        controladorHistorial.separar();
      }

      this.scene.add("menu", menuPrincipal, true);
    }
  }
}
