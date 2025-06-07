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
                                <a href="/properties" class="button button--secondary button--effect">
                                    Voir toutes les annonces
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Propriétés regroupées par ligne de 3 -->
                <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
                    <div class="row">
                        <CardVerticalComponent
                            v-for="(property, idx) in chunk"
                            :key="property.id"
                            v-bind="property"
                        />
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
import CardVerticalComponent from './CardVerticalComponent.vue'

// i18n
const { t } = useI18n()

// Reactive state
const properties = ref([])

// API fetch on mount
onMounted(async () => {
    try {
        const response = await axios.post('https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements')
        properties.value = response.data.result.data.map((annonce, index) => ({
            id: annonce.id || index,
            title: annonce.ville || 'Ville inconnue',
            address: `${annonce.adresse || ''} ${annonce.code_postal || ''}, ${annonce.ville || ''}`.trim(),
            imageUrl: annonce.image || '/assets/images/default.jpg',
            investors: annonce.loyer_hors_charge || 0,
            progressPercent: annonce.avancement || 0,
            chambres: annonce.total_chambre?.toString() || 'N.C.',
            type: annonce.type_logement || 'N.C.',
            detailsUrl: `/logement/${annonce.reference || ''}`,
            countdown: { days: '10', month: '08', years: '24' }, // à ajuster dynamiquement si nécessaire
        }))
    } catch (error) {
        console.error('Erreur lors du chargement des logements:', error)
    }
})

// Fonction pour grouper les propriétés par ligne de 3
function chunkArray(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

// Propriétés découpées pour l'affichage en lignes
const chunkedProperties = computed(() => chunkArray(properties.value, 3))
</script>