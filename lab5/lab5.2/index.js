window.addEventListener('load', () => {
    let buttons = document.querySelector('.buttons');
    let imageDiv = document.querySelector('img');
    let index = 1;
    let intervalId;
    buttons.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target.className);
        if(e.target.className == 'button-play')
        {
            console.log('play button clicked');
            if(intervalId) return; 
            intervalId = setInterval(() => {
                imageDiv.src = `../images/${index}.jpg`;
                index++;
                if(index > 8) index = 1;
            }, 700);
        }
        else if(e.target.className == 'button-stop')
        {
            console.log('stop button clicked');
            clearInterval(intervalId);
            intervalId = null;
        }
        else if(e.target.className == 'button-next')
        {
            console.log('next button clicked');
            clearInterval(intervalId);
            intervalId = null;
            index++;
            if(index > 8) index = 1;
            imageDiv.src = `../images/${index}.jpg`;
            
        }
        else if(e.target.className == 'button-prev')
        {
            console.log('prev button clicked');
            clearInterval(intervalId);
            intervalId = null;
            index--;
            if(index < 1) index = 8;
            imageDiv.src = `../images/${index}.jpg`;
        }
    }); 
}); //load end