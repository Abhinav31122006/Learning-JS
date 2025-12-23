const enbl = document.querySelector('#enableBtn')
const send = document.querySelector('#notifyBtn')
const stat = document.querySelector('#status')

function updateStatus() {
    setTimeout(function(){
        stat.textContent = ""
    }, 2000)
}

if(!("Notification" in window)){
    alert("This browser does not support desktop notification")
}

enbl.addEventListener('click', async function(){
    if(Notification.permission === "granted"){
        send.disabled = false
        stat.textContent = "Notifications already Enabled!"
    }
    else if(Notification.permission === "denied"){
        stat.textContent = "Notifications are Blocked!"
    }
    else{
        const note = await Notification.requestPermission()
        if(note === "granted"){
            send.disabled = false
            stat.textContent = "Notifications Enabled!"
        }
        else if (note === "denied"){
            stat.textContent = "Notifications Blocked!"
        }
    }
    updateStatus()
})

send.addEventListener('click',function(){
    const notify = new Notification("👋 Hey there!")
    stat.textContent = "Notification Sent!"
    updateStatus()
})