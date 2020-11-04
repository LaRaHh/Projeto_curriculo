
let hh = 0;
let mm = 0;
let ss = 0;
let inputHorario = document.getElementById("tempoInput");


let tempo = 1000;//Quantos milésimos valem 1 segundo
let cron;

function limpar(){
    inputHorario.value = null;
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("display").innerText = '00:00:00';
}

//Inicia o temporizador
function start() {
    if (inputHorario.value == null || inputHorario.value == 0 ){
        cron = setInterval(() => { timer(); }, tempo);
    } else{
        pause();
        //Variaveis do usuario
        hh = parseInt(inputHorario.value.substring(0,2));
        mm = parseInt(inputHorario.value.substring(3,5));
        ss = parseInt(inputHorario.value.substring(6));
        //Cria uma variável com o valor tratado HH:MM:SS
        let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        
        //Insere o valor tratado no elemento display
        document.getElementById("display").innerText = format;
        cron = setInterval(() => { timer(); }, tempo);
    }
    
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("display").innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento display
    document.getElementById("display").innerText = format;

    //Retorna o valor tratado
    return format;
}

function regressivo() {
    
    hh = parseInt(inputHorario.value.substring(0,2));
    mm = parseInt(inputHorario.value.substring(3,5));
    ss = parseInt(inputHorario.value.substring(6));
    
    cron = setInterval(() => { timerInverso(); }, tempo);

    function timerInverso(){
    
        ss--;
        if (ss == 00) { 
            ss = 59; 
            mm--; 

            if(mm==00){
                mm = 59;
                hh--;
            }
        }
        //Cria uma variável com o valor tratado HH:MM:SS
        let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        
        //Insere o valor tratado no elemento display
        document.getElementById("display").innerText = format;

        //Retorna o valor tratado
        return format;
    }

    

}

