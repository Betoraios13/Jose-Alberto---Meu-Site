const container = document.querySelector('.container');
const sliders = document.querySelectorAll('.slide');
let index = 0;

var width = window.innerWidth;

addEventListener('resize', () => {
    width = window.innerWidth;
});

function sliderMove(){
    if(index < sliders.length){
        container.style.transition = '1s';
        container.style.transform = `translateX(-${width * index}px)`;
        index++;
    }
    else{
        container.style.transition = '0s';
        container.style.transform = 'translateX(0px)';
        index = 0;
    }
}

setInterval(() => sliderMove(), 5000);
