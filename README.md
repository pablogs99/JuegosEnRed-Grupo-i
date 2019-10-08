# JuegosEnRed
## Grupo I


# 2 Knights 1 Game


## Temática
El juego girará entorno a las historias de guerra en el reino de Atépece. En este universo el territorio es disputado por 3 facciones: humanos, orcos y elfos. Hoy en día las historias son contadas en pequeños teatros, donde los participantes disfrutan de las obras sobre las batallas de los más valientes guerreros.

Queremos crear una experiencia que fomente la competitividad con amigos, con un juego ágil y divertido.

## Género

Será un videojuego multijugador online de lucha, pues los jugadores se hayarán en un arena y su objetivo es dejar a 0 puntos de salud a su rival para quitar "vidas".

## Gameplay
Objetivo: Quitar 3 vidas a tu rival al dejarle a 0 puntos de salud o ganar por tiempo.

### Mecánicas:
- Básicas
  - **Caminar**: el jugador deberá poder desplazarse por la pantalla, afectandole la gravedad.
  - **Correr**: aumentar la velocidad de caminado.
  - **Saltar**: el jugador podrá moverse en el eje vertical para poder aprovechar al máximo el espacio del escenario.
  - **Atacar**: el jugador podrá usar su arma para quitar puntos de salud a su rival al impactar.
  - **Morir**: si el jugador queda a 0 puntos de salud, se deberá iniciar una nueva ronda o finalizar la partida en caso de no quedar vidas.
 - Especiales
    - **Barra de energía**: el jugador tendrá un medidor de energía que se consumirá al realizar acciones que no sean simplemente caminar por el escenario. En caso de no tener energía el jugador no podrá realizar acción alguna. Esta se restablecerá con el tiempo.
    - **PowerUps**: cada ronda deberán aparecer objetos aleatorios que doten al personaje que los coja de una habilidad especial determinada. Se podría implementar una bola de fuego como proyectil o la posibilidad de realizar doble salto.
    - **Parry**: el jugador deberá poder bloquear los golpes del rival. En caso de hacerlo en un intervalo de tiempo determinado, el jugador que bloquea devolverá el ataque. Puede ocurrir un caso en el que bloquee el ataque del rival pero no se lo devuelva, en cuyo caso el jugador que bloquea retrocederá.
    - **Ataques Fuertes y Flojos**: el jugador podrá elegir entre dos tipos de ataques: uno más lento que al impactar hará mucho daño; o uno más rápido con menos daño.
  
## Arte
### Estética general
El juego poseerá una estética medieval-fantástica. Al crear un mundo con facciones, hemos decidido crear 2 personajes por facción, cuyo único propósito será estético, además de un escenario acorde con la temática de la facción.

### Sprites:
  - **Personajes**: tiras de sprites sacadas de la web: https://craftpix.net/, las cuales se convertirán en una animación en Phaser. Cada facción tiene 2 personajes distinos.
  - **Otros objetos en partida**: se realizarán sprites animados para los powerups, tanto como el objeto a coger como la habilidad obtenida.
  - **Interfaz**: para los menus de inicio y el lobby de partida se creará una interfaz al estilo de un teatrillo, y los medidores en partida, asi como el menú de pausa se usarán texturas de madera y clavos.
  
  
### Escenarios
Crearemos 3 escenarios, uno por cada facción. Serán estáticos, en el sentido de que la cámara no necesitará moverse, pues desde un primer momento se verá la totalidad del espacio. Tendrán plataformas al estilo smash, así como perder vida por caerse de ellas.

### Música y sonidos
Implementaremos los siguientes sonidos para mejorar la experiencia de usario:
  - Dolor al herir
  - Grito al caer de la plataforma
  - Espadas chocando al hacer parry
  - Efectos de sonido al hacer click en menú
  - Grito de batalla para empezar partida
  
Canciones a implementar:
  - Canción menú inicio (teatrillo)
  - Canción Elfos
  - Canción Humanos
  - Canción Orcos

## Pantallas
- **Menú inicial**: dos botones uno para ir al lobby de partida y otro para ir al menu de opciones.
- **Menú de opciones**: en el se deberá poder modificar las opciones de sonido y algunas opciones de partida como el tiempo o el número de vidas.
- **Lobby**: los dos jugadores elegirán en un primer lugar al personaje que quieren escoger y luego el escenario donde se realizará el duelo.
- **Pantalla de juego**.
- **Menú de pausa in game**.





## ------------------------------------- INTEGRANTES -----------------------------------

Pablo Garcia Sanchez
  - p.garcias.2017@alumnos.urjc.es
  - Github: https://github.com/pablogs99

Adrián Cerdeño de la Cruz
  - a.cerdeno@alumnos.urjc.es
  - Github: https://github.com/adricerdeno

Alberto Sánchez Mateo
  - a.sanchezmat.2017@alumnos.urjc.es
  - Github: https://github.com/albertosanchezmateo

Wei Zheng
  - w.zheng.2017@alumnos.urjc.es
  - Github: https://github.com/weizheng2
  
 ## Link Trello
 https://trello.com/invite/b/FihuifU9/e5640e6beb6ee002f1e204487b0cecc1/juegosenred
