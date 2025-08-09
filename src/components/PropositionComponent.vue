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
            return {
                id: annonce.id,
                title: annonce.ville || 'Ville inconnue',
                address: `${annonce.adresse || 'Adresse inconnue'}`.trim(),
                imageUrl: annonce.image,
                loyer_hors_charge: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} €` : 'Loyer inconnu',
                chambres: annonce.total_chambre?.toString() || 'N.C.',
                bail: annonce.is_meuble ? 'Meublé' : 'Non meublé',
                type_logement: annonce.type_logement || 'N.C.',
                surface: annonce.surface_total ? `${annonce.surface_total} m²` : 'N.C.',
                security: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} € HC` : 'N.C.',
                reference: annonce.reference,
                is_occupant: annonce.is_occupant === 1 ? 'Proprietaire occupant' : 'Proprietaire non occupant',
                type_bail: annonce.type_bail || 'N.C.',
                locataires: annonce.locataires || [],
                proprietaire: annonce.proprietaire || { photo: '' },
                detailsUrl: `/detail/${annonce.id || ''}`,
                type: annonce.type || 'N.C.', // <- AJOUT
                countdown: {
                    days: String(now.getDate()).padStart(2, '0'),
                    month: String(now.getMonth() + 1).padStart(2, '0'),
                    years: String(now.getFullYear()).slice(-2),
                },
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