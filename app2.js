//Animação do scroll

const menuItems = document.querySelectorAll(".navbar-item a[href^='#']");

menuItems.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const elemento = event.target;
    var id = elemento.getAttribute('id');

    if (id == null){
        var id = elemento.getAttribute('href');
    }
    
    const section = document.querySelector(id).getBoundingClientRect().top ;
    
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
        menu.style.height = "20px";
        menu.style.marginBottom = "100px"
    }else{
        menu.classList.add("hide");
        menu.classList.remove("show");
        menu.style.height = "0";
        menu.style.marginBottom = "0"
        
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
