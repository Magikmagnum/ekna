<!-- components/PropositionComponent.vue -->
<template>
    <section class="properties__grid section__space">
        <div class="container">
            <div class="properties__grid__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>Toutes les colocations</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="properties.html" class="button button--secondary button--effect">
                                    Voir toutes les annonces
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Propriétés regroupées par ligne de 3 -->
                <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
                    <div class="row">
                        <CardVerticalComponent v-for="(property, idx) in chunk" :key="property.id" v-bind="property" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { computed } from 'vue';
import CardVerticalComponent from './CardVerticalComponent.vue'

const imageLos = new URL('@/assets/images/property/los.png', import.meta.url).href
const imageSan = new URL('@/assets/images/property/san.png', import.meta.url).href

const properties = [
    {
        id: 1,
        title: 'Lille',
        address: 'Rue de Douai',
        imageUrl: imageLos,
        investors: 375,
        amount: '494,196',
        progressPercent: 54.73,
        chambres: '2',
        type: 'Appartement',
        detailsUrl: '/home',
        countdown: { days: '10', month: '08', years: '24' },
    },
    {
        id: 2,
        title: 'San Francisco, CA',
        address: '3335 21 St, San Francisco',
        imageUrl: imageSan,
        investors: 179,
        amount: '164,296',
        progressPercent: 64.73,
        chambres: '4',
        type: 'Appartement',
        detailsUrl: '/home',
        countdown: { days: '05', month: '16', years: '00' },
    },
    {
        id: 3,
        title: 'Los Angeles',
        address: '8706 Herrick Ave, Los Angeles',
        imageUrl: imageLos,
        investors: 17,
        amount: '794,196',
        progressPercent: 14.73,
        chambres: '3',
        type: 'Appartement',
        detailsUrl: '/home',
        countdown: { days: '12', month: '03', years: '48' },
    },
    {
        id: 4,
        title: 'San Diego',
        address: '90071, Grand Avenue, San Diego',
        imageUrl: imageSan,
        investors: 59,
        amount: '894,196',
        progressPercent: 54.73,
        chambres: '3',
        type: 'Appartement',
        detailsUrl: '/home',
        countdown: { days: '07', month: '10', years: '00' },
    },
    {
        id: 5,
        title: 'San Diego',
        address: '90071, Grand Avenue, San Diego',
        imageUrl: imageSan,
        investors: 59,
        amount: '894,196',
        progressPercent: 54.73,
        chambres: '2',
        type: 'Commercial',
        detailsUrl: '/home',
        countdown: { days: '02', month: '06', years: '12' },
    },
];

// Fonction utilitaire pour diviser en groupes de 3
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

// ✅ Utilise `computed` pour que ce soit disponible dans le template
const chunkedProperties = computed(() => chunkArray(properties, 3));
</script>