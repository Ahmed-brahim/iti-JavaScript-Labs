const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
const scoreBoard = document.getElementById('scoreBoard');
let score = 0;

//moving basket
gameArea.addEventListener('mousemove', (e) => {
    let basketPosition = e.clientX ;
    basket.style.left = basketPosition + 'px';
});

function createEgg() {
    const egg = document.createElement('img');
    egg.src = './images/egg.png';
    egg.className = 'egg';
    egg.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    egg.style.top = '0px';
    gameArea.appendChild(egg);

    let fallInterval = setInterval(() => {
        let eggTop = parseInt(egg.style.top);
        egg.style.top = eggTop + 5 + 'px';

        if (eggTop > window.innerHeight - (basket.offsetWidth)) {
            let basketLeft = parseInt(basket.style.left);
            if (Math.abs(basketLeft - parseInt(egg.style.left)) < 50) {
                score++;
                scoreBoard.textContent = `Score: ${score}`;
                gameArea.removeChild(egg);
                clearInterval(fallInterval);
            } else {
                egg.src = './images/brokenEgg.png';
                score--;
                scoreBoard.textContent = `Score: ${score}`;
                setTimeout(() => {
                    gameArea.removeChild(egg);
                }, 800);
                clearInterval(fallInterval);
            }
        }
    }, 50);
}

setInterval(createEgg, 2000);