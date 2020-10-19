//Animação do scroll Navbar

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

//Animação do scroll MenuBar

const menuBar = document.querySelectorAll(".menu-ul a[href^='#']");

menuBar.forEach(item =>{
    item.addEventListener('click', scrollSuave)
});

function scrollSuave(event){
    var element = event.target;
    var idMenu = element.getAttribute('href');
    console.log(idMenu);

    var a = document.querySelector(idMenu);
    console.log(a);

}


//Animação do menu


const menuH = document.getElementById('hamburguer');
const menuUL = document.getElementById('menu-ul');
menuH.addEventListener('click', () => {
    menuUL.classList.toggle('menu-ul');
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
