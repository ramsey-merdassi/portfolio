const images = document.querySelectorAll(".project-img")
const leftArrows = document.querySelectorAll('.bx-chevron-left')
const rightArrows = document.querySelectorAll('.bx-chevron-right')

function scrollImages (img1, img2, img3) {
    for (let i = 0; i < images.length; i++) {
        leftArrows[i].addEventListener('click', () => {
            if (images[i].src.includes(img1)) {
                images[i].src = img3
            } else if (images[i].src.includes(img2)) {
                images[i].src = img1
            } else if (images[i].src.includes(img3)) {
                images[i].src = img2
            }
        })
        rightArrows[i].addEventListener('click', () => {
            if (images[i].src.includes(img1)) {
                images[i].src = img2
            } else if (images[i].src.includes(img2)) {
                images[i].src = img3
            } else if (images[i].src.includes(img3)) {
                images[i].src = img1
            }
        })
    }
}
scrollImages('images/collector_app1.png', 'images/collector_app2.png', 'images/collector_app3.png')
scrollImages('images/film_quiz1.png', 'images/film_quiz2.png', 'images/film_quiz3.png')
scrollImages('images/job_listing1.png', 'images/job_listing2.png', 'images/job_listing3.png')
scrollImages('images/furniture_store1.png', 'images/furniture_store2.png', 'images/furniture_store3.png')
scrollImages('images/academy_portal1.png', 'images/academy_portal2.png', 'images/academy_portal3.png')
scrollImages('images/journey_planner1.png', 'images/journey_planner2.png', 'images/journey_planner3.png')


