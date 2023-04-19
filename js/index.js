//EcmaScripts - ES6 Modules
import resetControls from "./controls.js" 
import { Timer } from "./timer.js"

//Document Object Model -> Modelagem do objeto em JS = DOM
const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSound_on = document.querySelector('.sound-on')
const buttonSound_off = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimeOut, 
  resetControls,}
)

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countDown()
})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)

})

buttonStop.addEventListener('click', function(){
  resetControls()
  timer.resetTimer()
})

buttonSound_off.addEventListener('click', function(){
  buttonSound_on.classList.remove('hide')
  buttonSound_off.classList.add('hide')
})

buttonSound_on.addEventListener('click', function(){
  buttonSound_on.classList.add('hide')
  buttonSound_off.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
  let newMinutes = prompt('Qual o tempo ?')
  if (!newMinutes){
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})