const start = document.querySelector('#start')
const stp = document.querySelector('#stop')
const save = document.querySelector('#save')
const out = document.querySelector('#output')
const list = document.querySelector('#notes')

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

if (!SpeechRecognition) {
  alert("Speech Recognition not supported in this browser")
}

const reco = new SpeechRecognition()


reco.continuous = true
reco.interimResults = true
reco.lang = "en-US"

let finalTranscript = ""


let isListening = false

start.addEventListener('click', function () {
  if (isListening) return
  finalTranscript = out.value
  reco.start()
  isListening = true
})

stp.addEventListener('click', function () {
  reco.stop()
  isListening = false
})

reco.onresult = function(e){
  let interimTranscript = ""

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const transcript = e.results[i][0].transcript

    if (e.results[i].isFinal) {
      finalTranscript += transcript + " "
    } else {
      interimTranscript += transcript
    }
  }

  out.value = finalTranscript + interimTranscript
}

save.addEventListener('click', function(){
    const text = out.value.trim()
    if(!text) return

    const item = document.createElement('li')
    item.textContent = text
    list.prepend(item)

    out.value = ""
    finalTranscript = ""
})

reco.onerror = function(e){
  console.error("Speech recognition error:", e.error)
}