<!-- components/PropositionComponent.vue -->
<template>
    <section style="margin-bottom: 100px;">
        <div class="container">
            <div class="properties__grid__area wow fadeInUp">
                
                <PropertiesFilter/>
                <!-- Propriétés regroupées par ligne de 3 -->
                <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
                    <div class="row">
                        <CardVertical2Component
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
import CardVertical2Component from './CardVertical2Component.vue'
import PropertiesFilter from './PropertiesFilter.vue';
// i18n
const { t } = useI18n();

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
            detailsUrl: `/detail/${annonce.reference || ''}`,
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