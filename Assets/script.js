
let goodTarget = {
    id: 'target',
    src: 'Assets/images/icons8-bug-50.png',
    animation: getRandomInt(8,10),
}
let badTarget = {
    id: 'badtarget',
    src: 'Assets/images/icons8-chat-48.png',
    animation: getRandomInt(8,10),
}
const targets = [goodTarget,goodTarget, badTarget];

function getRandomInt(min, max) {
    random = Math.floor(Math.random() * (max - min) + min);
    return random
    
}
function showTarget() {
    time <= 10 ? goodTarget.animation = getRandomInt(5,7) : badTarget.animation = getRandomInt(8,10);
    let objectTarget = targets[Math.floor(Math.random() * targets.length)];
    
    // Creation et positionnement de la cible
    let target = document.createElement('img');
    target.id = objectTarget.id;
    target.src = objectTarget.src;
    container.appendChild(target);
    target.style.animationDuration = objectTarget.animation + 's';
    target.style.top = Math.random() * (200 - target.offsetHeight) + 'px';
    target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';
    
    // Suppression de la cible
    setTimeout(function () {
        target.remove();
    }, getRandomInt(2,5) * 1000);
    
    // Quand la cible est cliquée
    target.onclick =  () => {
    target.id == 'target' ? score += 1 : time -= 3;
    target.src = 'Assets/images/icons8-éclaboussure-48.png';
    // target.remove();
    } 
    
}
// Constantes QuerySelector
let container = document.querySelector('.container');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');
let btn = document.querySelector('.start_btn');
// Variables du jeu
let score = 0;
let time = 20;
btn.onclick = function () {

    let interval = setInterval(function gameStart() {
       // Création de la cible
       showTarget();  
        time -= 0.5;
       // Afficher les infos
        timeContainer.innerHTML = `Time : ${time}`;
        scoreContainer.innerHTML = `Score : ${score}`;
        if (time == 0) {
            clearInterval(interval);
            container.innerHTML = `<div class="fin">
            <h1>Le jeu est terminé</h1>
            <h2>Score : ${score}</h2>
            <button class="start_btn" onclick="location.reload();">RESTART</button>
            </div>`
        }
    }, 500);


}   