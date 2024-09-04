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
    computed: {
        restartCicle() {
            if (this.activeIndex < 0) {
                return this.activeIndex = this.images.length - 1;
            } else if (this.activeIndex === this.images.length) {
                return this.activeIndex = 0;
            } else {
                return this.activeIndex;
            }
        },
        /* stopAutoPlay(interval) {
            clearInterval(interval);
        } */
    },

    // Methods per gestire la visualizzazione delle immagini
    methods: {
        // Metodo per tornare all'immagine precedente
        prevImage() {
            this.activeIndex--;
            this.restartCicle;
        },
        // Metodo per passare all'immagine successiva
        nextImage() {
            this.activeIndex++;
            this.restartCicle;
        },
        // Metodo per passare all'immagine cliccata nei thumbnails
        currentImage(i) {
            this.activeIndex = i;
        },
        // Metodo per la visualizzazione dell'immagine automatica
        autoPlay() {
            setInterval(() => {
                this.activeIndex++;
                this.restartCicle;
                this.stopAutoPlay;
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



