<template>
    <section class="properties__grid section__space">
        <div class="container">
            <div class="properties__grid__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>{{ t('PropositionComponent.bouton') }}</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="/annonces" class="button button--secondary button--effect">
                                    {{ t("PropositionComponent.bouton") }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
                    <div class="row">
                        <CardVertical2Component v-for="property in chunk" :key="property.id" v-bind="property" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import CardVertical2Component from './CardVertical2Component.vue'
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