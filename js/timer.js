export function Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimeOut, 
  resetControls
}) {

  //Função para acrescentar "00" nos Minutos|Segundos
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

//Função recursiva para decrementar tempo do relogio 
function countDown() {
 timerTimeOut = setTimeout(function (){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <=0){
      resetControls()
      return
    }

    if (seconds <= 0){
      seconds = 2
      minutes--
    }

    secondsDisplay.textContent = String(seconds -1).padStart(2, "0")
    updateTimerDisplay(minutes, String(seconds-1))
    countDown()
  }, 1000)
}

return {
  countDown,
  resetTimer
}
} 