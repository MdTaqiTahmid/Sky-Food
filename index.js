const b = document.querySelector('#b');
const menu = document.querySelector('#menu');
b.addEventListener('click', () =>{
    if  (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})