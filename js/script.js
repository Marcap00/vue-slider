const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex: 0,
            images: [
                {
                    src: 'img/1.jpeg',
                    title: 'Mountains',
                    description: 'Una splendida vista su maestose montagne innevate, immerse nella quiete della natura.',
                },
                {
                    src: 'img/2.jpeg',
                    title: 'Lighthouse',
                    description: 'Un faro solitario si erge sopra le scogliere, guidando le navi attraverso le acque tempestose.',
                },
                {
                    src: 'img/3.jpeg',
                    title: 'Iceland',
                    description: 'Un paesaggio islandese mozzafiato con ghiacciai, vulcani e vasti spazi selvaggi.',
                },
                {
                    src: 'img/4.jpeg',
                    title: 'Lake',
                    description: 'Un lago cristallino riflette il cielo sereno, circondato da verdi colline e foreste.',
                },
                {
                    src: 'img/5.jpeg',
                    title: 'Bridge',
                    description: 'Un ponte imponente si estende sopra un fiume, collegando due sponde con eleganza e forza.',
                },
            ],
        }
    },
    methods: {

    },
}).mount('#app');






























































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

