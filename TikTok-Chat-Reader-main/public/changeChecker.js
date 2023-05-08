let count_of_gifts = 1
document.addEventListener("DOMNodeInserted", (evt) => {
    if (evt.target.className == "giftitem") {
        getGiftInfo(evt.target)
    }
})

// document.addEventListener("DOMSubtreeModified", (e) => {
//     let gift_container = document.getElementsByClassName("giftcontainer")[0]
//     if (e.target.className == "giftcontainer" && count_of_gifts <= gift_container.childElementCount) {
//         count_of_gifts++
//         doSound()
//         getGiftInfo()
//     }
// }, false)

function getGiftInfo(evt_target) {
    let nickname = evt_target.children[1].children[0].children[0].text
    let rep_nick = nickname.replace("_", "")
    rep_nick = rep_nick.replace(".", "")
    //let gift_price = evt_target.children[1].children[1].children[0].children[0].children[1].children[0].textContent
    doSound()
    setTimeout(() => {
        speak(rep_nick)
    }, 500)
}

function doSound() {
    let audio = new Audio()
    audio.src = "https://cdn.freesound.org/previews/171/171671_2437358-lq.mp3"
    audio.volume = 0.05
    audio.autoplay = true
}

function speak(nickname) {
    let speech = window.speechSynthesis
    let text = new SpeechSynthesisUtterance("Дякую за подарунок " + nickname)
    text.volume = 2
    speech.speak(text)
}
