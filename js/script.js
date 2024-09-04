































































/* const sources = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']; */






/* // Assegnamo active alla prima immagine per vederla
let activeIndex = 0;
images[activeIndex].classList.add('active');
thumbnails[activeIndex].classList.add('active');

// # Fase di gestione eventi
// Mettiamo in ascolto il bottone sinistro
leftButton.addEventListener('click', function () {
    images[activeIndex].classList.remove('active');
    thumbnails[activeIndex].classList.remove('active');

    activeIndex--;

    if (activeIndex < 0) activeIndex = images.length - 1;

    images[activeIndex].classList.add('active');
    thumbnails[activeIndex].classList.add('active');
})

// Mettiamo in ascolto il bottone destro
rightButton.addEventListener('click', function () {
    images[activeIndex].classList.remove('active');
    thumbnails[activeIndex].classList.remove('active');

    activeIndex++;

    if (activeIndex === images.length) activeIndex = 0;

    images[activeIndex].classList.add('active');
    thumbnails[activeIndex].classList.add('active');
})

for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    thumbnail.addEventListener('click', function () {
        images[activeIndex].classList.remove('active');
        thumbnails[activeIndex].classList.remove('active');

        activeIndex = i;

        images[activeIndex].classList.add('active');
        thumbnails[activeIndex].classList.add('active');

    })
} */

