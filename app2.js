//Animação do scroll

const menuItems = document.querySelectorAll(".navbar-item a[href^='#']");

menuItems.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('id');
    const section = document.querySelector(id).getBoundingClientRect().top;

    window.scroll({
        top: section,
        behavior: "smooth"
    });
    
}


//Animação do menu
const iconMenu = document.querySelectorAll(".icon-menu");

iconMenu[0].addEventListener('click', () => {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hide")){
        menu.classList.add("show");
        menu.classList.remove("hide");
    }else{
        menu.classList.add("hide");
        menu.classList.remove("show");
    }
    
});

//Animação do título

const titulo = document.querySelector(".titulo h1");

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

typeWriter(titulo);
