const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused){
                milliseconds += 10

                if(milliseconds === 1000){
                    seconds++;
                    milliseconds = 0;
                }

                if (seconds === 60) {
                    minutes++;
                    seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }

    },10);

    startBtn.style.display = "none"; //Esconde botão play
    pauseBtn.style.display = "block"; //Aparece botão Pause
    resetBtn.style.display = "none"; //Esconde botão reset
}

function pauseTimer(){
    isPaused = true;
    startBtn.style.display = "none"; //Esconde botão play
    pauseBtn.style.display = "none"; //Aparece botão Pause
    resetBtn.style.display = "block"; //Esconde botão reset
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isPaused = false; // Adiciona esta linha para reiniciar o temporizador corretamente

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"

    startBtn.style.display = "block"; //Esconde botão play
    pauseBtn.style.display = "none"; //Aparece botão Pause
    resetBtn.style.display = "none"; //Esconde botão reset
    
}

function formatTime(time){ //Se os minutos for menor que  10, adiciona um zero à esquerda para manter o formato de 09:59 e não 9:59
    return time < 10 ? `0${time}`: time;

}

function formatMilliseconds(time){
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}




