import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSound_on,
  buttonSound_off} from"./elements.js"

export default function(
  {
    controls, 
    timer, 
    sound}
  ){
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

}