const { createApp } = Vue;

createApp({
    data() {
        return {
            // Creiamo una variabile dell'indice dell'immagine in active e la inizializziamo a 0
            activeIndex: 0,
            // Creiamo un array di oggetti (immagini), ognuno con delle proprietà src,title e description
            images: [
                {
                    src: 'img/1.jpg',
                    title: 'Mountains',
                    description: 'Una splendida vista su maestose montagne innevate, immerse nella quiete della natura.',
                },
                {
                    src: 'img/2.jpg',
                    title: 'Lighthouse',
                    description: 'Un faro solitario si erge sopra le scogliere, guidando le navi attraverso le acque tempestose.',
                },
                {
                    src: 'img/3.jpg',
                    title: 'Iceland',
                    description: 'Un paesaggio islandese mozzafiato con ghiacciai, vulcani e vasti spazi selvaggi.',
                },
                {
                    src: 'img/4.jpg',
                    title: 'Lake',
                    description: 'Un lago cristallino riflette il cielo sereno, circondato da verdi colline e foreste.',
                },
                {
                    src: 'img/5.jpg',
                    title: 'Bridge',
                    description: 'Un ponte imponente si estende sopra un fiume, collegando due sponde con eleganza e forza.',
                }
            ]
        }
    },

    // Methods per gestire la visualizzazione delle immagini
    methods: {
        // Metodo per tornare all'immagine precedente
        prevImage() {
            this.activeIndex--;
            if (this.activeIndex < 0) this.activeIndex = this.images.length - 1;
        },
        // Metodo per passare all'immagine successiva
        nextImage() {
            this.activeIndex++;
            if (this.activeIndex === this.images.length) this.activeIndex = 0;
        },
        // Metodo per passare all'immagine cliccata nei thumbnails
        currentImage(i) {
            this.activeIndex = i;
        },
        // Metodo per la visualizzazione dell'immagine automatica
        autoPlay() {
            setInterval(() => {
                this.activeIndex++;
                if (this.activeIndex === this.images.length) this.activeIndex = 0;
            }, 3000);
        },

    },

    created() {
        this.autoPlay();
    },
    updated() {
        console.log('On the image: ', this.activeIndex);
    }
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

