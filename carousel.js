const image = document.querySelector('img')
const leftArrow = document.querySelector('.bx-chevron-left')
const rightArrow = document.querySelector('.bx-chevron-right')

leftArrow.addEventListener('click', () => {
    if(image.src.match('collector_app1')) {
        image.src = 'images/collector_app3.png'
    } else if (image.src.match('collector_app3')) {
        image.src = 'images/collector_app2.png'
    } else if (image.src.match('collector_app2')){
        image.src = 'images/collector_app1.png'
    }
})

rightArrow.addEventListener('click', () => {
    if(image.src.match('collector_app1')) {
        image.src = 'images/collector_app2.png'
    } else if (image.src.match('collector_app2')) {
        image.src = 'images/collector_app3.png'
    } else if (image.src.match('collector_app3')) {
        image.src = 'images/collector_app1.png'
    }
})