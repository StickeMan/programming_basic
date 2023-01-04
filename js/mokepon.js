//Toda la logia del juego. By: Francisco Delgado Martinez.

// * Variables globales.
let attackPlayer;
let attackEnemy;
let livesPlayer = 3;
let livesEnemy = 3;

// * Iniciar juego.
// * Función para ejecutar cada botón en la página.
function startplay() {
    // Esto solo dejará visible las mascotas y lo demás no se mostrará.
    let sectionSelectAttack = document.getElementById('select-attack');
    sectionSelectAttack.style.display = 'none';

    // Se deja de mostrar el botón de reinicio.
    let sectionSelectRestart = document.getElementById('restart');
    sectionSelectRestart.style.display = 'none';

    // * Variable.
    let buttonPetPlayer = document.getElementById('button-pet');
    buttonPetPlayer.addEventListener('click', selectPetPlayer);

    // * Eventos.
    let buttonFire = document.getElementById('button-fire');
    buttonFire.addEventListener('click', attackFire);
    let buttonWater = document.getElementById('button-water');
    buttonWater.addEventListener('click', attackWater);
    let buttonEarth = document.getElementById('button-earth');
    buttonEarth.addEventListener('click', attackEarth);

    let buttonRestart = document.getElementById('button-restart');
    buttonRestart.addEventListener('click', restartGame);
}

// * Función para mascotas del jugador.
function selectPetPlayer() {
    // Esto dejará de mostrar la sección de elegir tu mascota.
    let sectionSelectPet = document.getElementById('select-pet');
    sectionSelectPet.style.display = 'none';

    // Esto hará que vuelva aparecer los botones de ataque.
    let sectionSelectAttack = document.getElementById('select-attack');
    sectionSelectAttack.style.display = 'block';

    // * Variables.
    const inputHipodoge = document.getElementById('Hipodoge');
    const inputCapipepo = document.getElementById('Capipepo');
    const inputRatigueya = document.getElementById('Ratigueya');
    const inputLangostelvis = document.getElementById('Langostelvis');
    const inputTucapalma = document.getElementById('Tucapalma');
    const spanPetPlayer = document.getElementById('pet-player');

    if (inputHipodoge.checked) {
        //alert('You select to Hipodoge.');
        spanPetPlayer.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        //alert('You select to Capipepo.');
        spanPetPlayer.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        //alert('You select to Ratigueya.');
        spanPetPlayer.innerHTML = 'Ratigueya';
    } else if (inputLangostelvis.checked) {
        //alert('You select to Langostelvis.');
        spanPetPlayer.innerHTML = 'Langostelvis';
    } else if (inputTucapalma.checked) {
        //alert('You select to Tucapalma.');
        spanPetPlayer.innerHTML = 'Tucapalma';
    } else {
        alert('You must select a pet!');
    }

    selectPetEnemy();
}

// * Función para mascotas del enemigo.
function selectPetEnemy() {
    let petRandom = aleatorio(1,5);
    let spanPetEnemy = document.getElementById('pet-enemy');

    if (petRandom == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge';
    } else if (petRandom == 2) {
        spanPetEnemy.innerHTML = 'Capipepo';
    } else if (petRandom == 3) {
        spanPetEnemy.innerHTML = 'Ratigueya';
    } else if (petRandom == 4) {
        spanPetEnemy.innerHTML = 'Langostelvis';
    } else {
        spanPetEnemy.innerHTML = 'Tucapalma';
    }
}

// * Funciones de los ataques del jugador.
function attackFire() {
    attackPlayer = 'FIRE';
    attackRandomEnemy();
}
function  attackWater() {
    attackPlayer = 'WATER';
    attackRandomEnemy();
}
function attackEarth() {
    attackPlayer = 'EARTH';
    attackRandomEnemy();
}

// * Función en donde se elige aleatoriamente el ataque del enemigo.
function attackRandomEnemy() {
    let attackRandom = aleatorio(1,3);

    if (attackRandom == 1) {
        attackEnemy = 'FIRE';
    } else if (attackRandom == 2) {
        attackEnemy = 'WATER';
    } else {
        attackEnemy = 'EARTH';
    }
    combat();
}

// Función del combate.
function combat() {
    let spanLivesPlayer = document.getElementById('lives-player');
    let spanLivesEnemy = document.getElementById('lives-enemy');

    if (attackEnemy == attackPlayer) {
        createMessage("TIE");
    } else if ((attackPlayer == 'FIRE' && attackEnemy == 'EARTH') || (attackPlayer == 'WATER' && attackEnemy == 'FIRE') || (attackPlayer == 'EARTH' && attackEnemy == 'WATER')) {
        createMessage("YOU WON");
        livesEnemy--
        spanLivesEnemy.innerHTML = livesEnemy;
    } else {
        createMessage("YOU LOST");
        livesPlayer--
        spanLivesPlayer.innerHTML = livesPlayer;
    }

    reviewLives();
}

// Función para revisar las vidas.
function reviewLives() {
    if (livesEnemy == 0) {
        createMessageEnd("Congratulations! You won 🎉🎉");
    } else if (livesPlayer == 0) {
        createMessageEnd("Sorry, You lost 😔");
    }
}

// * Función para que aparezca un historial del combate.
function createMessage(result) {
    // * Variable.
    let sectionMessage = document.getElementById('messages');

    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'Your pet attacked with ' + attackPlayer + ', the enemy\'s pet attacked with '+ attackEnemy + ': ' + result;

    sectionMessage.appendChild(paragraph);
}

function createMessageEnd(resultEnd) {
    // * Variable.
    let sectionMessage = document.getElementById('messages');

    let paragraph = document.createElement('p');
    paragraph.innerHTML = resultEnd;

    sectionMessage.appendChild(paragraph);

    let buttonFire = document.getElementById('button-fire');
    buttonFire.disabled = true;
    let buttonWater = document.getElementById('button-water');
    buttonWater.disabled = true;
    let buttonEarth = document.getElementById('button-earth');
    buttonEarth.disabled = true;

    // Muestra de nuevo el botón de reiniciar el juego.
    let sectionSelectRestart = document.getElementById('restart');
    sectionSelectRestart.style.display = 'block';
}

// Función para reiniciar el juego.
function restartGame() {
    location.reload();
}

// * Función para elegir aleatoriamente la mascota y el ataque.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// * NOTA: esta es otra manera de llamar al script despues de que se cargue el HTML; la función startplay se cargara cuando ya el contenido esta cargado.
window.addEventListener('load', startplay);