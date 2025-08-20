<template>
    <section class="testimonial testimonial--two section__space pos__rel over__hi bg__img testimonial__area"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="container">
            <div class="testimonial__area">
                <div class="section__header">
                    <h5 class="neutral-top">{{ props.smallTitle }}</h5>
                    <h2>{{ props.mainTitle }}</h2>
                    <p class="neutral-bottom">{{ props.description }}</p>
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
                            <div v-for="(testimonial, index) in props.testimonials" :key="testimonial.name"
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Images
import backgroundImage from '@/assets/images/testimonial/dot-map.png'
import quoteImage from '@/assets/images/testimonial/quote.png'
import avatar from '@/assets/images/testimonial/avatar.png'

// Props
const props = defineProps({
    mainTitle: {
        type: String,
        default: 'Plus de 50 bailleurs nous font confiance depuis 2022'
    },
    smallTitle: {
        type: String,
        default: 'Ils nous font confiance'
    },
    description: {
        type: String,
        default: ''
    },
    testimonials: {
        type: Array,
        default: () => [
            {
                name: 'Thomas',
                country: 'Lille, France',
                avatar,
                stars: 5,
                comment: 'Very trustworthy and clear platform to invest in real estate...',
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
        ]
    }
})

// State
const currentIndex = ref(0)
let autoSlideInterval = null

// Lifecycle
onMounted(() => {
    autoSlideInterval = setInterval(() => {
        next()
    }, 8000)
})

onBeforeUnmount(() => {
    clearInterval(autoSlideInterval)
})

// Methods
function next() {
    currentIndex.value = (currentIndex.value + 1) % props.testimonials.length
}
function prev() {
    currentIndex.value = (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length
}
</script>

<style scoped>
.open__tab__btn.active {
    background-color: #333;
    color: #fff;
}
</style>