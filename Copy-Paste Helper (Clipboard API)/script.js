const textarea = document.querySelector('#text')
const copy = document.querySelector('#copyBtn')
const paste = document.querySelector('#pasteBtn')
const stat = document.querySelector('#status')

function statusDisappear(){
    setTimeout(function(){
        stat.textContent = ""
    },1500)
}
copy.addEventListener('click', async function(){
    try{
        if (textarea.value.trim() === ""){
            stat.textContent = "Nothing to Copy!"
        }
        else{
            await navigator.clipboard.writeText(textarea.value)
            stat.textContent = "Copied!"
        }
    }
    catch{stat.textContent = "Copy failed!"}
    statusDisappear()
})

paste.addEventListener('click', async function(){
    try{
        const text = await navigator.clipboard.readText()
        if(text.trim() === ""){
            stat.textContent = "Nothing to Paste!"
        }
        else{
            textarea.value = text
            stat.textContent = "Pasted!"
        }
    }
    catch{stat.textContent = "Paste failed!"}
    statusDisappear()
})