window.addEventListener("load", function () {
    let bird = null; // Start with no bird
    let cursor = document.querySelector("#cursor");
    let scoreElement = document.querySelector("#score");
    let startButton = document.querySelector("#startButton");
    let shootsound = new Audio('./shoot.mp3');
    console.log(startButton);
    let score = 0;
    let gameStarted = false;

    // Start Game button logic
    startButton.addEventListener("click", function () {
        if (!gameStarted) {
            console.log("start");
            
            gameStarted = true;
            score = 0; // Reset score
            scoreElement.textContent = score; // Update score on scoreboard
            startButton.style.display = 'none'; // Hide the start button

            // Start spawning and moving birds
            createBird(); // Spawn the first bird
        }
    });

    // Move cursor 
    document.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
    });

    //bird shooting
    document.addEventListener("click", function (e) {
        console.log(shootsound);
            
            shootsound.play();
        if (e.target.id === 'bird' && gameStarted) {
            
            bird.remove();
            score++; 
            scoreElement.textContent = score; // Update scoreElement
            setTimeout(createBird, 1500);
        }
    });

    // Function to spawn a new bird at a random position
    function createBird() {
        bird = document.createElement('img');
       // bird.src = './images/bird.gif';
       bird.src = './images/kareem.png';
        bird.id = 'bird';
        bird.style.position = 'absolute';

        // Randomize bird's position (within the container)
        // bird.style.top = `${Math.random() * 80 + 10}%`; // Between 10% and 90%
        // bird.style.left = `${Math.random() * 80 + 10}%`; // Between 10% and 90%
        bird.style.top = `${Math.random() *  90+ 10}%`; // Between 10% and 90%
        bird.style.left = `${Math.random() * 90 + 10}%`; // Between 10% and 90%

        // Append bird to container
        document.querySelector('#container').appendChild(bird);

        // Make the bird move in random directions
        moveBird(bird);
    }

    // Function to move the bird around
    function moveBird(bird) {
        let birdSpeed = 2;
        let directionX = Math.random() < 0.5 ? 1 : -1;
        let directionY = Math.random() < 0.5 ? 1 : -1;
    
        // Set initial numeric position (in pixels)
        let x = Math.random() * (window.innerWidth - bird.offsetWidth);
        let y = Math.random() * (window.innerHeight - bird.offsetHeight);
    
        bird.style.left = `${x}px`;
        bird.style.top = `${y}px`;
    
        let moveInterval = setInterval(function () {
            // Update position
            x += directionX * birdSpeed;
            y += directionY * birdSpeed;
    
            // Bounce off window edges
            if (x <= 0 || x >= window.innerWidth - bird.offsetWidth) {
                directionX *= -1;
            }
            if (y <= 0 || y >= window.innerHeight - bird.offsetHeight) {
                directionY *= -1;
            }
    
            bird.style.left = `${x}px`;
            bird.style.top = `${y}px`;
        }, 10);
    
        // Store interval so you can clear it later if needed (e.g., bird.remove())
        bird.dataset.intervalId = moveInterval;
    }
    
});
