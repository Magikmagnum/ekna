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

                <div v-if="properties.length">
                    <div v-for="(property, index) in properties" :key="property.reference || index"
                        class="property__list__wrapper">
                        <CardHorizontalComponent :property="property" />
                    </div>
                </div>
                <div v-else class="text-center mt-4">Chargement des annonces...</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardHorizontalComponent from './CardHorizontalComponent.vue'

const properties = ref([])
onMounted(async () => {
    try {
        const response = await axios.post('https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements')
        properties.value = response.data.result.data.map(annonce => ({
            title: annonce.ville,
            location: annonce.adresse,
            image: annonce.image,
            investors: annonce.locataires?.length || 0,
            chambres: annonce.total_chambre?.toString() || 'N.C.',
            bail: annonce.is_meuble ? 'Meublé' : 'Non meublé',
            type: annonce.type_logement || 'N.C.',
            Surface: annonce.surface_total ? `${annonce.surface_total} m²` : 'N.C.',
            security: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} € HC` : 'N.C.',
            reference: annonce.reference,
        }))
    } catch (error) {
        console.error('Erreur lors du chargement des logements:', error)
    } 
})

</script>