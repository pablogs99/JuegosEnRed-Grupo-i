# JuegosEnRed

## Grupo I

# 2 Knights 1 Game

## Temática

El juego girará entorno a las historias de guerra en el reino de Atépece. En este universo el territorio es disputado por 3 facciones: humanos, orcos y elfos. Hoy en día las historias son contadas en pequeños teatros, donde los participantes disfrutan de las obras sobre las batallas de los más valientes guerreros.

Queremos crear una experiencia que fomente la competitividad con amigos, con un juego ágil y divertido.

## Género

Será un videojuego multijugador online de lucha, pues los jugadores se ubicarán en un arena y su objetivo es dejar a 0 puntos de salud a su rival para quitar "vidas".

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

---

# Entrega: Segunda Fase

## Controles

![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/Controles.PNG)
Para esta entrega hemos decidido implementar únicamente aquellas mecánicas básicas del juego. Estas son:

- Correr: AD/JL
- Saltar: W/I. Solo se puede saltar si estamos tocando suelo.
- Descender plataformas: S/K.
- Atacar: Q/U. El enemigo recivirá daño si ambos no atacan a la vez, si no está bloqueando, si no esta en estado de invulnerabilidad por haber recivido daño previamente, o porque el empezo la animación de ataque primero.Gasta un cuarto de la energía.
- Defender: E/O. Personaje empezará a gastar energía hasta que se agote. No recivirá daño en este estado.

Esto es una adaptación de los controles para que ambos jugadores puedan jugar en el mismo teclado.

## Pantallas

![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/diagrama_de_pantallas.png)

- Press Start: contiene el logo del grupo. Lleva a pantalla de inicio al usar algun botón o click de ratón. Se ha implementado como solución al problema de la música de Chrome.
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/pressStart.PNG)
- Menú Principal: Inicio del juego desde el cual podemos acceder a la pantalla de selección de personaje al darle a jugar, ver los controles del juego, o los créditos del mismo
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/menuPrincipal.PNG)
- Controles: Muestra una guía de los controles del juego
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/Controles.PNG)
- Créditos: Muestra el nombre y apellidos de los integrantes
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/Creditos.PNG)
- Selección Personaje: en esta pantalla ambos jugadores podrán elegir al personaje con el que jugaran la partida clicando con el ratón. Se pasará a la selección de escenario al haber elegido a los dos personajes y darle click al botón jugar.
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/seleccionPersonaje.PNG)
- Selección Mapa: en esta pantalla los jugadores podrán previsualizar los mapas al pasar por encima con el ratón. Al clickar se seleccionará el mapa, habilitando los botones jugar, que llevaría a la pantalla de combate y cambiar escenario, que permite seleccionar otro mapa.
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/seleccionEscenario.PNG)
- Combate: ambos jugadores aparecerán a un lado del escenario y podrán empezar a combatir con los controles del apartado anterior. Si se pulsa T se matará al jugador 1 y se reiniciará el juego. Si se muere uno de los dos jugadores ocurrirá lo mismo.

## Diseño

El objetivo del juego es dejar a tu rival sin vida. Para ello deveremos usar el comando de ataque, al mismo tiempo que nos movemos por el escenario y usamos el comando defender para evitar los ataques del rival. Tanto el comando ataque como el comando defender gastan energía, necesaria para realizar ambos.

Hemos introducido 3 personajes distintos con estadísticas diferentes:

- Caballero hacha: es más lento, pero tiene más vida y mayor daño de ataque.
- Caballero lanza: es equilibrado, además de tener un ataque con un poco más de rango.
- Elfo: más rápido, recupera energía antes, pero tiene menos daño y puntos de vida

---

# Entrega: Tercera Fase

## Navegación

Hemos incluido nuevas pantallas dentro del juego para hacer la navegación más fácil dentro del juego, además de nuevas pantallas para acomodar las implementaciones de esta fase:
![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/diagramaPantallas.png)

- Pantalla historial: incluye todo la implementación visual de la funcionalidad de la api rest que hemos creado para esta fase. Consiste en una pequeña tabla que muestra las cuatro últimas partidas del servidor.
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/historial.PNG)

- Pantalla fin de partida: nuevo menú que se muestra al completar un combate, permitiendo el fácil acceso a las pantallas anteriores de selección de personaje, escenario vuelta al menú principal o simplemente reiniciar la batalla con la misma configuración que antes.
  ![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/diagramaDeClases.png)

## Diagrama de clases

En la siguiente imagen mostramos como se relacionan las clases de nuestra api rest:
![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/finPartida.PNG)

## Instrucciones de uso

En la entrega hemos incluido tanto el archivo ".jar" como el proyecto maven que hemos creado. A continuación explicamos como arrancar el servidor con ambos métodos:

### .jar

1. En windows escriba cmd en la carpeta donde se encuentra el archivo "juegosEnRed-0.0.1-SNAPSHOT.jar"
2. En la consola escriba el comando "java -jar juegosEnRed-0.0.1-SNAPSHOT.jar"
3. Abra el navegador y escriba en la barra de busqueda: http://localhost:8080/

## Proyecto Maven y Spring Tool Suite 4

1. Abra el proyecto en Spring Tool suite 4 Importandolo con File>Import>Existing Projects into Workingspace
2. En el archivo app.java, click derecho Run As> Java Application
3. Abra el navegador y escriba en la barra de busqueda: http://localhost:8080/

# Entrega: Cuarta Fase

## Actualización de clases

![alt text](https://github.com/pablogs99/JuegosEnRed-Grupo-i/blob/master/juegosEnRed/src/main/resources/static/extra/diagramaDeClasesExtra.png)

Como podemos comprobar, en esta fase solo hemos implementado una nueva clase que nos ayudará la hora de gestionar los mensajes enviados por el WebSocket.

## Implementación de los WebSocket

En el lado del servidor, hemos creado un array de dimensión 2 para poder almacenar las sesiones de los web sockets.

Enviamos un mensaje inicial para registrar las sesiones de los usuarios.

A partir de ahí, enviamos strings para sincronizar la gestión de la interfaz y el juego de ambos usuarios.

Esto queda reflejado en la selección de personaje, selección de mapa, y las teclas que usan cada usuario para manipular su personaje en el combate.

# Entrega: Cuarta Fase Convocatoria Extraoordinaria

## Problemas de la Entrega Anterior

Podemos resumir los problemas de la entrega en 2:

1. Desconexion:
   Si bien previamente cuando uno de los dos jugadores se desconectaba del juego, al perder la conexión a internet o simplemente por cerrar su navegador, el jugador 1 no tenía ningún efecto.

2. Retraso del jugador 2 en cuanto a su velocidad:

Si bien no hemos encontrado solución a ese problema de manera concreta, pudiendose ver sus efectos en la velocidad de refresco de los sprites del jugador enemigo,
si que hemos solventado el mayor problema que esto generaba: la dessincronización de los jugadores en sus respectivas partidas.

Previamente usabamos el siguiente método: Cada vez que el jugador 1 pulsaba o soltaba una tecla, el jugador 2 recivia con que tecla había interactuado y el controlador del juego se encargaba de calcular que operación había que hacer.

## Solución a la Desincronización

En esta nueva versión, los jugadores, una vez en combate, enviarán la información más relevante en cada iteración del bucle update para garantizar el buen estado del juego:
Info Propia:
Pos x e Y
Energía
Animación Actual
Flip (A que dirección mira el jugador)
Activación de la protección.

Info Enemigo:
Puntos de salud

De esta manera, cada jugador calculará las coliciones propias tanto con el terreno como con su propio ataque, ademas de actualizar la información de su rival precalculada.

## Solución a la Desconexion

Haciendo uso del valor de readyState el cual cuando pasa a ser 3 indica que se ha cerrado el webSocket, hacemos una comprobación en el update de tal manera que cuando un jugador se desconecte, el otro pueda recivir la información.

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

## Video Presentación del Juego.

https://drive.google.com/file/d/1sVdcUup_6uA9is9kcpVPiLtESgcr3DG2/view?usp=sharing
