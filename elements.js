//Document Object Model -> Modelagem do objeto em JS = DOM
const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSound_on = document.querySelector('.sound-on')
const buttonSound_off = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSound_on,
  buttonSound_off,
  minutesDisplay,
  secondsDisplay
}