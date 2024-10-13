const main = document.querySelector('.main')
const gif = document.querySelector('.gif')

window.addEventListener('load' , mainWeb)

function mainWeb() {
  
    gif.classList.toggle("hidden")
    main.classList.toggle("hidden")
 }

const video = document.querySelector('video')
const btn = document.querySelector('.btn')
const btnOverlay = document.querySelector('.btnOverlay')

btn.addEventListener('click',control)

function control() {

    if(!video.paused){
        video.pause()
        btnOverlay.classList.toggle("right-16")
        btnOverlay.classList.toggle("right-0")
        btnOverlay.classList.toggle("left-16")
        btnOverlay.classList.toggle("left-0")
    } else{
        video.play()
        btnOverlay.classList.toggle("right-16")
        btnOverlay.classList.toggle("right-0")
        btnOverlay.classList.toggle("left-16")
        btnOverlay.classList.toggle("left-0")
    }

}