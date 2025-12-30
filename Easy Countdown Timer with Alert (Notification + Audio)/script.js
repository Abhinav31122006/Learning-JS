const start = document.querySelector('#startBtn')
const inp = document.querySelector('#seconds')
const disp = document.querySelector('#timer')
const horn = new Audio('horn.mp3')
let interval

start.addEventListener('click',function(){
    let time = Number(inp.value)

    if(!time || time <= 0){return}

    disp.textContent = time

    if ('Notification' in window && Notification.permission !== 'granted'){
        Notification.requestPermission()
    }

    clearInterval(interval)
    interval = setInterval(function(){
        time-=1
        disp.textContent=time

        if(time === 0){
            clearInterval(interval)

            if(Notification.permission === "granted"){
                new Notification('⏰ TIMER FINISHED!')
            }
            horn.currentTime = 0
            horn.play()
        }
    },1000)
})