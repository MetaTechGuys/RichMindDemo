document.addEventListener("scroll", () => {
  videoAudioControl()
}, { passive: true });

document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0)
  initVideoAudio()
  setupZoomAnimate()
  const popup = document.getElementById('welcome-popup')
  const skip = localStorage.getItem('intro-skipped')
  if (skip) popup.remove()
  else popup.classList.add('show')
})
function setupZoomAnimate() {
  if (window.innerWidth <= 992) return
  const { scroll, transform } = Motion

  const galhelp = document.getElementById('galhelp')
  const gallery = document.getElementById('gallery')
  const viewHeight = window.innerHeight
  const top = gallery.offsetTop
  const height = gallery.clientHeight
  const offset = (viewHeight - height) / 2
  
  galhelp.style.paddingBottom = (viewHeight + 70) + 'px'

  const scrollToYOffset = transform(
    [top - offset, top + viewHeight - offset], // Input
    [0, viewHeight], // Output,
    { clamp: true }
  )
  
  const scrollToScale = transform(
    [top - offset, top + viewHeight - offset], // Input
    [1, 2.8], // Output,
  )

  scroll((p, info) => {
    const scrollY = info.y.current
    const offset = scrollToYOffset(scrollY)
    const scale = scrollToScale(scrollY)
    // console.log(animationScale);
    gallery.style.transform = `translateY(${offset}px) scale(${scale})`
  }, { axis: 'y'})
}

let isLoaded = false
let heroVideo
let heroAudio
const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
function initVideoAudio() {
  heroVideo = document.getElementById("hero-video");
  heroAudio = document.getElementById("hero-audio");
  heroVideo.onplay = function () { heroAudio.play(); isLoaded = true }
  heroVideo.onpause = function () { heroAudio.pause(); }
}

function videoAudioControl() {
  const scrollY = window.scrollY;
  const width = window.innerWidth;
  const videScrollEnd = width / 1.77 // ( devide by aspectratio of 16:9 )
  const volume = Math.min(videScrollEnd, Math.max(0, videScrollEnd - scrollY)) / videScrollEnd
  heroVideo.volume = volume
  heroAudio.volume = volume
  if (isLoaded) {
    if (volume > 0 && !isVideoPlaying(heroVideo)) {
      heroVideo.play()
    } else if (volume === 0 && isVideoPlaying(heroVideo)) {
      heroVideo.pause()
    }
  }
}

function enterSite(play) {
  const popup = document.getElementById('welcome-popup')
  if (popup) {
    window.scrollTo(0, 0)
    popup.classList.add('exit')
    setTimeout(() => {
      popup.remove()
    }, 999);
    // localStorage.setItem('intro-skipped', true)
  }
  if (!play) { 
    heroAudio.volume = 0
  }  
  heroVideo.play()
  document.getElementById('hero-content')?.classList.add('animate')
}