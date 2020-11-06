//Scroll suave Navbar

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
        top: section - 10,
        behavior: "smooth"
    });
    
}

//Scroll suave MenuBar

const menuBar = document.querySelectorAll(".menu-ul a[href^='#']");


menuBar.forEach(item =>{
    item.addEventListener('click', scrollSuave)
});

function scrollSuave(event){
    event.preventDefault();
    var element = event.target;
    var idMenu = element.getAttribute('id');

    if (idMenu == null){
        var idMenu = element.getAttribute('href');
    }

    var a = document.querySelector(idMenu).getBoundingClientRect().top;

    window.scroll({
        top: a -10,
        behavior: "smooth"
    });

}

//Scroll suave foto de perfil


function scrollSuaveImg(){
    var to = document.querySelector('#inf').getBoundingClientRect().top;

    
    window.scroll({
        top: to -15,
        behavior: "smooth"
    });
}





//Animação do menu toggle

const menuH = document.getElementById('hamburguer');
const menuUL = document.getElementById('menu-ul');
menuH.addEventListener('click', () => {
    
    menuUL.classList.toggle('menu-ul');
    
});

menuUL.addEventListener('mouseover', () => {
    let largura = window.screen.width;
    
    if (largura > 620){
        console.log("aaaaaaa");
        menuUL.classList.add('menu-ul');
    }
})


//Animação do título typeWriter

const titulo = document.querySelector(".titulo h1");

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

typeWriter(titulo);
