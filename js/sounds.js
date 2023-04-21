export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://65381g.ha.azioncdn.net/4/9/8/a/omarcosalmeida-02-sagrado-ao-vivo-0badd4a7.mp3")

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return{
   pressButton,
   timeEnd,
   bgAudio
  }
}