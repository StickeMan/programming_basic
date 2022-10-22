// Metodo para que la pc eliga aleatoriamente.
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Metodo de elección.
function eleccion(play) {
  let result = "";

  if (play == 1) {
    result = "Piedra ✊🏽";
  } else if (play == 2) {
    result = "Papel ✋🏽"
  } else if (play == 3) {
    result = "Tijera ✌🏽"
  } else {
    result = "Mala elección 😔";
  }
  return result;
}

//  1 es piedra, 2 es papel y 3 es tijera.
let player = 0;
let pc = 0;
let victories = 0;
let losses = 0;

// Ciclo.
while (victories < 3 && losses < 3) {

  pc = aleatorio(1, 3);

  player = prompt("Por favor elige: 1 para piedra, 2 para papel y 3 para tijera");

  // Muestra lo que eligieron la PC y Tú.
  alert("PC eligio: " + eleccion(pc));
  alert("Tú eligiste: " + eleccion(player));

  // COMBATE v2.
  if (pc == player) {
    alert("EMPATE");
  } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {
    alert("GANASTE");
    victories = victories + 1;
  } else {
    alert("PERDISTE");
    losses = losses + 1;
  }
}

// Muestra las victorias y perdidas.
alert("Ganaste " + victories + " veces. Perdiste " + losses + " veces.");

    // Aqui elige el jugador
/*if (player == 1) {
  alert("Eligiste ✊🏽");
} else if (player == 2) {
  alert("Eligiste ✋🏽");
} else if (player == 3) {
  alert("Eligiste ✌🏽");
} else {
  alert("Eligiste PERDER, ¿miedo? 😈")
}*/

    // Aqui elige la pc
/*if (pc == 1) {
  alert("PC eligio ✊🏽");
} else if (pc == 2) {
  alert("PC eligio ✋🏽");
} else if (pc == 3) {
  alert("PC eligio ✌🏽");
}*/

/*
//COMBATE v1
if (pc == jugador) {
  alert("EMPATE");
} else if (jugador == 1 && pc == 3) {
  alert("GANASTE");
} else if (jugador == 2 && pc == 1) {
  alert("GANASTE");
} else if (jugador == 3 && pc == 2) {
  alert("GANASTE")
} else {
  alert("PERDISTE");
}
*/
