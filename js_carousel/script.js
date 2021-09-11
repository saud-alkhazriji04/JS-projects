const image = document.getElementsByClassName('image');
const imagesCount = image.length;
let imagePosition = 0;

setInterval(function() {
    for (let i = 0; i < imagesCount; i++) {
        image[i].classList.remove('active')
    }

    if (imagePosition === imagesCount - 1) {
        imagePosition = 0;
    } else {
        imagePosition++
    }
    image[imagePosition].classList.add('active');
}, 2500)