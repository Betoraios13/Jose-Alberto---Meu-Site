function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );
}

function isElementPartiallyVisible(el){
    const rect = el.getBoundingClienteRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return(
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0
    );
}

document.addEventListener('scroll', () =>{
    const element  = document.getElementById('id');
    if(isElementVisible){

    }else if(isElementPartiallyVisible){

    }else{
        const opa = document.querySelector('opa');
    }
});