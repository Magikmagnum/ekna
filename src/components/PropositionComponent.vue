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

                <!-- Propriétés regroupées par ligne de 3 -->
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

// i18n
const { t } = useI18n()

// Données réactives
const properties = ref([])

// Fetch des données au montage
onMounted(async () => {
    try {
        const response = await axios.post('https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements')

        const now = new Date()

        properties.value = response.data.result.data.map((annonce, index) => {
            // Fallback simple si une date de dispo n'est pas fournie
            const countdown = {
                days: String(now.getDate()).padStart(2, '0'),
                month: String(now.getMonth() + 1).padStart(2, '0'),
                years: String(now.getFullYear()).slice(-2),
            }

            return {
                id: annonce.id || index,
                title: annonce.ville || 'Ville inconnue',
                address: `${annonce.adresse || ''} ${annonce.code_postal || ''}, ${annonce.ville || ''}`.trim(),
                imageUrl: annonce.image || '/assets/images/default.jpg',
                investors: Number(annonce.loyer_hors_charge) || 0,
                chambres: annonce.total_chambre?.toString() || 'N.C.',
                type: annonce.type_logement || 'N.C.',
                detailsUrl: `/detail/${annonce.reference || ''}`,
                countdown,
                locataires: annonce.locataires || [],
                proprietaire: annonce.proprietaire || { photo: '' },
            }
        })
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