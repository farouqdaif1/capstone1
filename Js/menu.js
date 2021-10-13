const menu =document.querySelector('.nav-b');
const cBtn =document.querySelector('#close');
function showMenu(){
    document.querySelector('#close').classList.toggle('active');
    document.querySelector('.nav-ul').classList.toggle('active');
}
menu.addEventListener("click",showMenu)
