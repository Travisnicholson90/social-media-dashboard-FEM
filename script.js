//dark mode
const toggle = document.querySelector('.toggle')
const toggleBall = document.querySelector('.ball')
const body = document.querySelector('body')
const header1 = document.querySelector('.header-section-1')
const header2 = document.querySelector('.header-section-2')
const containerFollowers = document.querySelectorAll('.container-followers');
const overviewContainer = document.querySelectorAll('.overview-container')
const overviewHeading = document.querySelector('.overview-heading')

//toggle switch, bg, header
toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('dark-mode')
    toggleBall.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    header1.classList.toggle('dark-mode')
    header2.classList.toggle('dark-mode')
    overviewHeading.classList.toggle('dark-mode')
})


//container followers
containerFollowers.forEach(element => {
    toggle.addEventListener('click', () => {
        element.classList.toggle('dark-mode')
    })

});

//overview container
overviewContainer.forEach(element => {
    toggle.addEventListener('click', () => {
        element.classList.toggle('dark-mode')
    })
})


