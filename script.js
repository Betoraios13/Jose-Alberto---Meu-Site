const headerfixo = document.querySelector('.headerfixo');
const headerNaofixo = document.querySelector('.headerNaofixo');

let lastValue = window.scrollY;
let subindo = false;

window.addEventListener('scroll', () =>{
    const currentValue = window.scrollY;
    if(currentValue > lastValue){
        //decendo
        if(subindo == true){
            headerfixo.style.animation = 'exitHeaderfixo 1s';
            headerfixo.style.top = '-8vw';
            subindo = false;
        }
    }else if(currentValue < lastValue){
        //subindo
        if(subindo == false){
            headerfixo.style.animation = 'enterHeaderfixo 1s';
            headerfixo.style.top = '0vw';
            headerNaofixo.style.opacity = '0';
            headerNaofixo.style.pointerEvents = 'none';
            subindo = true;
        }
    }
    lastValue = currentValue;
    if(scrollY == 0){
        subindo = false;
        headerfixo.style.animation = 'none';
        headerfixo.style.top = '-8vw';
        headerNaofixo.style.opacity = '1';
        headerNaofixo.style.pointerEvents = 'auto';
    }
});