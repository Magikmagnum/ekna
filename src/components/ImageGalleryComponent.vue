<template>
    <section class="image__gallery image__gallery--two section__space">
        <div v-if="title || subtitle || description" class="section__header wow fadeInUp">
            <h5 v-if="title" class="neutral-top">{{ title }}</h5>
            <h2 v-if="subtitle">{{ subtitle }}</h2>
            <p v-if="description" class="neutral-bottom">{{ description }}</p>
        </div>

        <Swiper v-if="qq?.length" :slides-per-view="3" :space-between="10" :loop="true"
            class="image__gallery__area">
            <SwiperSlide v-for="(image, index) in images" :key="index">
                <div class="gallery__single">
                    <a :href="image" target="_blank" rel="noopener noreferrer">
                        <img :src="image" alt="Project Image" />
                    </a>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// Props
defineProps({
    title: String,
    subtitle: String,
    description: String,
    images: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
/* Ajoute tes styles personnalisés ici */
.image__gallery--two .section__header h2 {
    max-width: 1024px;
}
</style>