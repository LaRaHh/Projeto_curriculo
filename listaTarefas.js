//seletores

const form = document.getElementById("tarefa-form");
const inputTarefa = document.getElementById("tarefaInput");
const listaTarefas = document.querySelector(".lista");
const limparBtn = document.getElementById("limparBtn");

//EventListeners

loadEventListeners();

function loadEventListeners(){
    //Evento que adiciona tarefas - com submit
    form.addEventListener('submit', adicionarTarefa);
    document.addEventListener('DOMContentLoaded', carregaTarefas);
    limparBtn.addEventListener('click', limparLista);
    listaTarefas.addEventListener('click', riscarTarefa)

}

function adicionarTarefa(e){
    if( inputTarefa.value == "" || inputTarefa.value == " "){
        alert("Adicione uma tarefa!!");
    }else{
        e.preventDefault();

        //Cria um li
        const li = document.createElement("li");
        li.className = "tarefa";

        //Cria um nó de texto e adição do elemento li
        li.appendChild(document.createTextNode(inputTarefa.value));

        //Criação da tag a para o ícone
        const link = document.createElement("a");
        link.className = "check-tarefa"

        //inserção do ícone
        link.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>"
        li.appendChild(link);

        //Adição do li ao elemento ul
        listaTarefas.appendChild(li);

        //Armazena no LocalStorage
        armazenaTarefa({tarefa: inputTarefa.value, feito: false})

        //Ativa botão de limpar tarefas
        if (limparBtn.hasAttribute('disabled')){
            limparBtn.removeAttribute('disabled');
        }

        //Limpa a caixa de entrada
        inputTarefa.value = " "
        
    }
    
}

function armazenaTarefa(tarefa){
    let tarefas;
    if (localStorage.getItem('tarefas') == null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregaTarefas(){
    let tarefas;
    if (localStorage.getItem('tarefas') == null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.forEach(function (tarefa){
        const li = document.createElement("li");
        li.className = "tarefa";

        li.appendChild(document.createTextNode(tarefa.tarefa));

        if (tarefa.feito){
            li.classList.add('done');
        }

        
        const link = document.createElement("a");
        link.className = "check-tarefa"

       
        link.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>"
        li.appendChild(link);

        
        listaTarefas.appendChild(li);
    });
    //Ativa botão de limpar lista
    if (limparBtn.hasAttribute('disabled')){
        limparBtn.removeAttribute('disabled');
    }
}

//Limpar lista de tarefas

function limparLista(){
    while (listaTarefas.firstChild){
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
    let atributo = document.createAttribute('disabled');
    limparBtn.setAttributeNode(atributo);
    localStorage.clear();
}

//Riscar tarefa feita

function riscarTarefa(e){
    if (e.target.parentElement.classList.contains('check-tarefa')){
        e.target.parentElement.parentElement.classList.toggle('done');
    }
    atualizarLocalStorage(e.target.parentElement.parentElement);
}

//Atualiza o localStorage

function atualizarLocalStorage(item){
    let tarefas;
    if (localStorage.getItem('tarefas') == null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function (tarefa){
        if (item.textContent == tarefa.tarefa){
            item.classList.contains('done')? (tarefa.feito = true): (tarefa.feito = false)
        }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}