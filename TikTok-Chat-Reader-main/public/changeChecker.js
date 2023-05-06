let count_of_gifts = 1

document.addEventListener("DOMSubtreeModified", (e) => {
    let gift_container = document.getElementsByClassName("giftcontainer")[0]
    if (e.target.className == "giftcontainer" && count_of_gifts <= gift_container.childElementCount) {
        count_of_gifts++
        //doSound()
        getGiftInfo()
    }
}, false)

function getGiftInfo() {
    let all_gifts = document.getElementsByClassName("user-gift")
    let gift = all_gifts[all_gifts.length - 1]
    let user_nickname = gift.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].text
    let gift_name = gift.children[0].children[0].textContent
    let gift_count = gift.children[2].children[1].textContent
    let gift_price = gift.children[4].children[0].textContent
    setTimeout(() => {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Дякую за подарунок " + user_nickname))
    }, 1000)
    doSound()
}

function doSound() {
    let audio = new Audio()
    audio.src = "https://cdn.freesound.org/previews/171/171671_2437358-lq.mp3"
    audio.volume = 0.1
    //audio.src = "https://allsoundsaround.com/wp-content/uploads/2020/12/o-privet-1.mp3?_=1"
    audio.autoplay = true
}
