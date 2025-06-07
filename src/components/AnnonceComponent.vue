<template>
    <section class="featured__properties section__space">
        <div class="container">
            <div class="featured__properties__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>{{$t('AnnonceComponent.annoncesALaUne')}}</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="/home" class="button button--secondary button--effect">
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
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'

// Importing the CardHorizontalComponent for displaying property details
import CardHorizontalComponent from './CardHorizontalComponent.vue'

// Importing the i18n instance for translations
const { t } = useI18n()

// Reactive reference to hold the list of properties
const properties = ref([])
onMounted(async () => {
    try {
        const response = await axios.post('https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements')
        properties.value = response.data.result.data.map(annonce => ({
            title: annonce.ville,
            location: annonce.adresse + ' ' + annonce.code_postal + ', ' + annonce.ville,
            image: annonce.image,
            investors: annonce.loyer_hors_charge || 0,
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