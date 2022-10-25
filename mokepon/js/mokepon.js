// * Variables globales.
let attackPlayer;
let attackEnemy;

// * Iniciar juego.
// * Función para ejecutar cada boton en la pagina.
function startplay() {
    // * Variable.
    const buttonPetPlayer = document.getElementById('button-pet');

    buttonPetPlayer.addEventListener('click', selectPetPlayer);

    // * Eventos.
    const buttonFire = document.getElementById('button-fire');
    buttonFire.addEventListener('click', attackFire);
    const buttonWater = document.getElementById('button-water');
    buttonWater.addEventListener('click', attackWater);
    const buttonEarth = document.getElementById('button-earth');
    buttonEarth.addEventListener('click', attackEarth);
}

// * Función para mascotas del jugador.
function selectPetPlayer() {
    // * Variables.
    const inputHipodoge = document.getElementById('Hipodoge');
    const inputCapipepo = document.getElementById('Capipepo');
    const inputRatigueya = document.getElementById('Ratigueya');
    const inputLangostelvis = document.getElementById('Langostelvis');
    const inputTucapalma = document.getElementById('Tucapalma');
    const inputPydos = document.getElementById('Pydos');
    const spanPetPlayer = document.getElementById('pet-player');

    if (inputHipodoge.checked) {
        alert('You select to Hipodoge.');
        spanPetPlayer.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        alert('You select to Capipepo.');
        spanPetPlayer.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        alert('You select to Ratigueya.');
        spanPetPlayer.innerHTML = 'Ratigueya';
    } else if (inputLangostelvis.checked) {
        alert('You select to Langostelvis.');
        spanPetPlayer.innerHTML = 'Langostelvis';
    } else if (inputTucapalma.checked) {
        alert('You select to Tucapalma.');
        spanPetPlayer.innerHTML = 'Tucapalma';
    } else if (inputPydos.checked) {
        alert('You select to Pydos.');
        spanPetPlayer.innerHTML = 'Pydos';
    } else {
        alert('You must select a pet!');
    }

    selectPetEnemy();
}

// * Función para mascotas del enemigo.
function selectPetEnemy() {
    const petRandom = aleatorio(1,6);
    const spanPetEnemy = document.getElementById('pet-enemy');

    if (petRandom == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge';
    } else if (petRandom == 2) {
        spanPetEnemy.innerHTML = 'Capipepo';
    } else if (petRandom == 3) {
        spanPetEnemy.innerHTML = 'Ratigueya';
    } else if (petRandom == 4) {
        spanPetEnemy.innerHTML = 'Langostelvis';
    } else if (petRandom == 5) {
        spanPetEnemy.innerHTML = 'Tucapalma';
    } else {
        spanPetEnemy.innerHTML = 'Pydos';
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
    const attackRandom = aleatorio(1,3);

    if (attackRandom == 1) {
        attackEnemy = 'FIRE';
    } else if (attackRandom == 2) {
        attackEnemy = 'WATER';
    } else {
        attackEnemy = 'EARTH';
    }

    createMessage();
}

// * Función para que apareca un historial del combate.
function createMessage() {
    // * Variable.
    const sectionMessage = document.getElementById('messages');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Your pet attacked with ' + attackPlayer + ', the enemy\'s pet attacked with '+ attackEnemy +' - PENDIENTE';

    sectionMessage.appendChild(paragraph);
}

// * Función para elegir aleatoriamente la mascota y el ataque.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// * NOTA: esta es otra manera de llamar al script despues de que se cargue el HTML; la función startplay se cargara cuando ya el contenido esta cargado.
window.addEventListener('load', startplay);