//EcmaScripts - ES6 Modules
import Controls from "./controls.js" 
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { buttonPlay, buttonPause, buttonStop, buttonSet, buttonSound_on, buttonSound_off, minutesDisplay, secondsDisplay } from "../elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset,
})

const sound = Sounds()

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSound_on.addEventListener('click', function(){
  buttonSound_on.classList.add('hide')
  buttonSound_off.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSound_off.addEventListener('click', function(){
  buttonSound_on.classList.remove('hide')
  buttonSound_off.classList.add('hide')
  sound.bgAudio.pause()
})


buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  
  if (!newMinutes){
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})