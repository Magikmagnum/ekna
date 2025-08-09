<template>
    <section class="featured__properties section__space">
        <div class="container">
            <div class="featured__properties__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>{{ $t('AnnonceComponent.annoncesALaUne') }}</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="/annonces" class="button button--secondary button--effect">
                                    {{ $t('AnnonceComponent.voirToutes') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="properties.length">
                    <div v-for="(property, index) in properties" :key="property.reference || index"
                        class="property__list__wrapper">
                        <CardHorizontalComponent :property="property" />
                    </div>
                </div>
                <div v-else class="text-center mt-4">{{ $t('AnnonceComponent.chargement') }}</div>
            </div>
        </div>
    </section>
</template>


<script setup>

import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import CardHorizontalComponent from './CardHorizontalComponent.vue'
import { mapApiAnnonceToProperty } from '@/services/annonceMapper'

// i18n
const { t } = useI18n()

const properties = ref([])
onMounted(async () => {
    try {
        const { data } = await axios.post('https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements')
        properties.value = data.result.data.map(mapApiAnnonceToProperty)
    } catch (error) {
        console.error('Erreur lors du chargement des logements:', error)
    }
})

// Découper les propriétés par ligne de 3
function chunkArray(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

const chunkedProperties = computed(() => chunkArray(properties.value, 3))
</script>