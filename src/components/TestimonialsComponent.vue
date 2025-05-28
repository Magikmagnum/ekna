<template>
    <section class="testimonial testimonial--two section__space pos__rel over__hi bg__img testimonial__area"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="container">
            <div class="testimonial__area">
                <div class="section__header">
                    <h5 class="neutral-top">{{ header.smallTitle }}</h5>
                    <h2>{{ header.mainTitle }}</h2>
                    <p class="neutral-bottom">{{ header.description }}</p>
                </div>

                <div class="testimonial__item__wrapper">
                    <!-- Bouton Previous -->
                    <button type="button" class="slick-prev pull-left button arrow--button slick-arrow" @click="prev"
                        aria-label="Previous testimonial">
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>

                    <!-- Container animé des slides -->
                    <div class="testimonial__support slider-wrapper">
                        <transition-group name="slide" tag="div" class="slider-inner">
                            <div v-for="(testimonial, index) in testimonials" :key="testimonial.name"
                                v-show="index === currentIndex" class="testimonial__item bg__img"
                                :style="{ backgroundImage: `url(${quoteImage})` }">
                                <div class="testimonial__author__ratings">
                                    <i v-for="n in 5" :key="n" :class="[
                                        'fa-solid',
                                        n <= testimonial.stars ? 'fa-star' : 'fa-star-half-alt'
                                    ]"></i>
                                </div>
                                <p class="tertiary">{{ testimonial.comment }}</p>
                                <div class="testimonial__author">
                                    <div class="testimonial__author__info">
                                        <div class="avatar__wrapper">
                                            <img :src="testimonial.avatar" :alt="testimonial.name" />
                                        </div>
                                        <div>
                                            <h5>{{ testimonial.name }}</h5>
                                            <p class="neutral-bottom">{{ testimonial.country }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition-group>
                    </div>

                    <!-- Bouton Next -->
                    <button type="button" class="slick-next pull-right button arrow--button slick-arrow" @click="next"
                        aria-label="Next testimonial">
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import backgroundImage from '@/assets/images/testimonial/dot-map.png'
import quoteImage from '@/assets/images/testimonial/quote.png'
import avatar from '@/assets/images/testimonial/avatar.png'

export default {
    name: 'Testimonials',
    data() {
        return {
            backgroundImage,
            quoteImage,
            header: {
                smallTitle: 'Investors Trust Us',
                mainTitle: 'Trusted by Over 40,000 Worldwide Customers since 2022',
                description:
                    'We divide each property into shares so anyone can get started. Kindly check out what our investors say about Revest.',
            },
            testimonials: [
                {
                    name: 'Allan Murphy',
                    country: 'United States',
                    avatar,
                    stars: 5,
                    comment:
                        'Very trustworthy and clear platform to invest in real estate. Safe investment with monthly payouts. Really recommended!',
                },
                {
                    name: 'John Doe',
                    country: 'Canada',
                    avatar,
                    stars: 4,
                    comment: 'Excellent service and smooth investment experience.',
                },
                {
                    name: 'Jane Smith',
                    country: 'United Kingdom',
                    avatar,
                    stars: 3,
                    comment: 'Good platform but could improve the UI.',
                },
            ],
            currentIndex: 0,
            autoSlideInterval: null,
        }
    },
    mounted() {
        // Auto slide toutes les 5 secondes
        this.autoSlideInterval = setInterval(() => {
            this.next()
        }, 8000)
    },
    beforeUnmount() {
        clearInterval(this.autoSlideInterval)
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
        },
        prev() {
            this.currentIndex =
                (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length
        },
    },
}
</script>

<style scoped>
/* Conteneur de la zone de slides */
.slider-wrapper {
    position: relative;
    overflow: hidden;
    height: 500px;
    /*Ajuste selon la hauteur de ton contenu*/
}

/* Le container interne pour les slides */
.slider-inner {
    position: relative;
    height: 100%;
}

/* Animation de transition entre slides */
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0%);
    opacity: 1;
}

.slide-leave-from {
    transform: translateX(0%);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* Style pour les boutons si besoin */
button.button {
    cursor: pointer;
}

/* Ajustement général pour éviter débordement */
.testimonial__item {
    height: 320px;
    /* même hauteur que le container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
}

.testimonial--two .testimonial__item {
    -webkit-box-shadow: 0px 4px 10px 0px rgba(19, 33, 110, 0.25);
    box-shadow: 0px 4px 10px 0px rgba(19, 33, 110, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 3px 60px;
    height: auto;
    padding: 40px !important;
}
</style>