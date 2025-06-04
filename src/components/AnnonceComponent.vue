<template>
    <section class="featured__properties section__space">
        <div class="container">
            <div class="featured__properties__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>Annonces à la une</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="/home" class="button button--secondary button--effect">
                                    Voir toutes les annonces
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-for="(property, index) in properties" :key="index" class="property__list__wrapper">
                    <CardHorizontalComponent :property="property" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import CardHorizontalComponent from './CardHorizontalComponent.vue'

const image1 = new URL('@/assets/images/property/los.png', import.meta.url).href
const image2 = new URL('@/assets/images/property/san.png', import.meta.url).href

const properties = [
    {
        title: 'Tourcoing',
        location: '36 rue des Acacias',
        image: image1,
        investors: 350,
        chambres: '3',
        bail: 'Individuel',
        type: 'Maison',
        Surface: '75 m2',
        security: '1st-Rank Mortgage',
    },
    {
        title: 'San Francisco, CA',
        location: '3335 21 St, San Francisco',
        image: image2,
        investors: 179,
        chambres: '2',
        bail: 'Individuel',
        type: 'Maison',
        Surface: '75 m2',
        security: '1st-Rank Mortgage',
    },
]
</script>
