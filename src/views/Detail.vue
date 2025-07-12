<template>
    <div id="app">
        <HeaderComponent />


        <div>
            <div class="property__details__banner bg__img clear__top"
                :style="{ backgroundImage: `url(${constructionImage})` }">
            </div>

            <section class="p__details p__details__two faq section__space__bottom">
                <div class="container">
                    <div class="p__details__area">
                        <div class="row">
                            <div class="col-lg-7">
                                <!-- Include content as a component if needed -->
                                <PropertyDetailsComponent />
                            </div>

                            <div class="col-lg-5">
                                <PropertyDetailsSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Proposition2Component />
        <FooterComponent />
    </div>
</template>

<script setup>

import { ref } from 'vue'

// Importing components
import HeaderComponent from '@/components/HeaderComponent.vue'
import Proposition2Component from '@/components/Proposition2Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PropertyDetailsComponent from '@/components/PropertyDetailsComponent.vue';
import PropertyDetailsSidebar from '@/components/PropertyDetailsSidebar.vue'

import constructionImage from '@/assets/images/construction.png';

const logements = ref([])
const loading = ref(true)

// Background image for PropertyDetailsComponent
const backgroundImageBannerSecond = new URL('@/assets/images/ekna/App.png', import.meta.url).href


// Background image and stats for Home5Component
const backgroundImageComponent5 = new URL('@/assets/images/globe.png', import.meta.url).href
const statsComponent5 = [
    {
        image: new URL('@/assets/images/ekna/matching-modified.png', import.meta.url).href,
        alt: 'Platform',
        value: '73%',
        label: 'de matching réussi </br> grâce à notre scoring </br> de compatibilité',
    },
    {
        image: new URL('@/assets/images/ekna/partenair-modified.png', import.meta.url).href,
        alt: 'Returns',
        value: '+50',
        label: 'bailleurs partenaires nous font déjà confiance',
    },
    {
        image: new URL('@/assets/images/ekna/annonce-modified.png', import.meta.url).href,
        alt: 'Experience',
        value: '95%',
        label: 'des annonces trouvent </br> un candidat qualifié </br> en moins de 7 jours',
    }
];
</script>
