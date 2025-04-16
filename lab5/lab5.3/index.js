// const bird = document.getElementById('bird');
//         let position = 0;
//         let direction = 1; // 1 for right, -1 for left
//         const speed = 2; // Adjust speed as needed
//         const birdWidth = 100; // Width of the bird image

//         function fly() {
//             const maxWidth = window.innerWidth - birdWidth;
//             position += speed * direction;

//             if (position >= maxWidth || position <= 0) {
//                 direction *= -1; // Change direction
//                 bird.style.transform = `scaleX(${direction})`;
//             }

//             bird.style.left = position + 'px';
//         }

//         setInterval(fly, 20); // Adjust interval for smoother animation

//select image
let image = document.querySelector('#bird');
let imgWidth = image.offsetWidth;
let position = 0;
let maxWidth = window.innerWidth - imgWidth;
let direction = 1;  // 1 => l to r        -1 => r to l
let step = 20;
setInterval(()=>{
    position += direction * step ;
    if(position >= maxWidth || position <= 0)
    {
        direction *= -1;
        image.style.transform = `scaleX(${direction})`;
    }
    image.style.left = position + `px`;
}, 100);
