const sounds = {
    dog: new Audio("Sounds/Dog.mp3"),
    clap: new Audio("Sounds/Clap.mp3"),
    pop: new Audio("Sounds/Pop.mp3"),
    laugh: new Audio("Sounds/Laugh.mp3")
}


document.querySelectorAll('.board button').forEach(function(btn){
    btn.addEventListener('click', function(){
        for(let i in sounds){
            sounds[i].pause()
        }
        sounds[btn.dataset.sound].currentTime = 0
        sounds[btn.dataset.sound].play()
        console.log(sounds[btn.dataset.sound].volume)
    })
})


const vol = document.querySelector("#volume")

vol.addEventListener('input',function(){
    for(let i in sounds){
        sounds[i].volume = vol.value
    }
})

const mute = document.querySelector('#mute')

mute.addEventListener('click',function(){
    for(let i in sounds){
        sounds[i].volume =0
    }
    vol.value=0
})
