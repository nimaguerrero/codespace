/* ACtivar las clases para los NavToggle Martinz */
const nav = document.querySelector('.nav-toggles');
let clicked = false;
let circular = true;
nav.addEventListener('click',  () => {
    if(clicked){
        if(circular){
            nav .classList.remove('actived','circular');
        } else {
            nav .classList.remove('actived');
        }
        clicked = false;
    }else{
        if(circular){
            nav .classList.add('actived','circular');
        } else {
            nav .classList.add('actived');
        }
        clicked = true;
    }
});
