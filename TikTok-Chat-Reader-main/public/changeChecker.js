let count_of_gifts = 1
document.addEventListener("DOMNodeInserted", (evt) => {
    if (evt.target.className == "giftitem") {
        evt.target.style.background = "rgba(255,202,4,0.75)"
        getGiftInfo(evt.target)
    }
})

function getGiftInfo(evt_target) {
    let nickname = evt_target.children[1].children[0].children[0].text
    let rep_nick = nickname.replace("_", "")
    rep_nick = rep_nick.replace(".", "")
    //let gift_price = evt_target.children[1].children[1].children[0].children[0].children[1].children[0].textContent
    doSound()
    speak(rep_nick, evt_target)
}

function doSound() {
    let audio = new Audio()
    audio.src = "https://cdn.freesound.org/previews/171/171671_2437358-lq.mp3"
    audio.volume = 0.05
    audio.autoplay = true
}

function speak(nickname, evt_target) {
    // evt_target.style.backgroundColor = "green"
    // let speech = window.speechSynthesis
    // let text = new SpeechSynthesisUtterance("Дякую за подарунок " + nickname)
    //
    // speech.speak(text)
    // speech.onend = () => {
    //     evt_target.style.backgroundColor = "transparent"
    // }
    let speech = new SpeechSynthesisUtterance()
    speech.text = "Дякую за подарунок " + nickname
    speech.onstart = () => {
        evt_target.style.background = "rgba(143,194,80,0.71)"
    }
    speech.onend = () => {
        evt_target.style.backgroundColor = "transparent"
    }
    speechSynthesis.speak(speech)
}
