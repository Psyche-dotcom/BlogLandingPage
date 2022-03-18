hamOpen = document.querySelector("#img-ham-open");
hamClose = document.querySelector("#img-ham-close");
nav = document.querySelector(".main_NavHide");
a = document.querySelector(".nav_wrap .main_NavHide ul #open1");
b = document.querySelector(".nav_wrap .main_NavHide ul #open2");
function show(){
    hamOpen.style.display="none"
    hamClose.style.display="block"
    nav.style.display="block"
}
function hide(){
    hamOpen.style.display="block"
    hamClose.style.display="none"
    nav.style.display="none"
}

function toggle(){
    if(a.style.display=="none"){
        a.style.display="block"
    }
    else{
        a.style.display="none"
    }
}
function toggle2(){
    if(b.style.display=="none"){
        b.style.display="block"
    }
    else{
        b.style.display="none"
    }
}
