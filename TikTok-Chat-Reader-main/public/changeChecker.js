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
    //let gift_price = evt_target.children[1].children[1].children[0].children[0].children[1].children[0].textContent
    doSound()
    speak(nickname)
}

function doSound() {
    let audio = new Audio()
    audio.src = "https://cdn.freesound.org/previews/171/171671_2437358-lq.mp3"
    audio.volume = 0.05
    audio.autoplay = true
}

function speak(nickname) {
    setTimeout(() => {
        let rep_nick = nickname.replace("_", "")
        let speech = window.speechSynthesis
        let text = new SpeechSynthesisUtterance("Дякую за подарунок " + rep_nick)
        speech.speak(text)
    }, 1000)
}
