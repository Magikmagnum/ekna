<template>
    <div class="p__details__content">
        <!-- Bouton ouverture Galleria -->
        <button class="button button--effect button--secondary" @click="visibleGallery = true">
            <i class="fa-solid fa-images"></i>
            {{ t('PropertyDetailsComponent.voirLaGalerie') }}
        </button>

        <!-- Dialog PrimeVue contenant Galleria -->
        <Dialog v-model:visible="visibleGallery" modal :style="{ width: '90vw' }"
            :header="t('PropertyDetailsComponent.galerie')">
            <Galleria :value="images" :numVisible="5" :circular="true" :showThumbnails="true"
                :responsiveOptions="responsiveOptions" containerStyle="max-width: 100%;">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%;" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100px" />
                </template>
            </Galleria>
        </Dialog>

        <div class="intro">
            <div>
                <span class="secondary details__color">{{ t('PropertyDetailsComponent.professionnel') }}</span>
                <h3 v-if="logement"> {{ logement.titre_annonce }} </h3>
                <h3 v-else>
                    {{ t('PropertyDetailsComponent.chargement') }}
                </h3>

                <p v-if="logement">
                    {{ capitalizeFirstLetter(logement.type_logement) }} •
                    {{ logement.chambres_for_mobile?.length || 1 }} {{ t('PropertyDetailsComponent.chambres') }} •
                    {{ logement.surface_total }}m<sup>2</sup> •
                    {{ t('PropertyDetailsComponent.logement') }} {{ logement.is_meuble ?
                        t('PropertyDetailsComponent.meuble') : t('PropertyDetailsComponent.nonMeuble') }} •
                    {{ t('PropertyDetailsComponent.proprietaire') }} {{ logement.is_occupant ?
                        t('PropertyDetailsComponent.occupant') : t('PropertyDetailsComponent.nonOccupant') }}
                </p>
                <p v-else>
                    {{ t('PropertyDetailsComponent.chargement') }}
                </p>
            </div>

            <hr class="details__intro" />

            <div>
                <h4>{{ t('PropertyDetailsComponent.description') }}</h4>
                <p v-if="logement" v-html="logement.description"></p>
                <p v-else>
                    {{ t('PropertyDetailsComponent.chargement') }}
                </p>

                <div class="group__one" v-if="logement && logement.lat && logement.lon">
                    <div class="map__wrapper">
                        <iframe :src="mapUrl" width="746" height="312" style="border:0;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>{{ t('PropertyDetailsComponent.pointsFortsColocation') }}</h5>
                <AvantagesList :avantages="avantages" />
            </div>

            <div class="details__block">
                <h5>{{ t('PropertyDetailsComponent.conditionsLocation') }}</h5>
                <div class="condition-cards">
                    <div class="condition-card" v-for="(item, index) in conditions" :key="index">
                        <div class="condition-icon">{{ item.icon }}</div>
                        <p class="condition-label">{{ item.label }}</p>
                        <p class="condition-value">{{ item.value }}</p>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>{{ t('PropertyDetailsComponent.elementsFinanciers') }}</h5>
                <AvantagesList :avantages="elements" />
            </div>
        </div>

        <div class="group__one">
            <div class="tabular__group bailleur" v-if="logement && logement.proprietaire">
                <div class="bailleur_block_image">
                    <img class="bailleur_image" :src="logement.proprietaire.photo"
                        :alt="t('PropertyDetailsComponent.photoBailleur')" />
                </div>
                <div class="bailleur_block_body">
                    <div class="bailleur_block_header">
                        <h5>{{ logement.proprietaire.first_name }} {{ logement.proprietaire.name }} ({{
                            t('PropertyDetailsComponent.bailleur') }})</h5>
                    </div>
                    <div class="bailleur_block_content">
                        <p class="neutral-bottom">
                            {{ logement.proprietaire.description || t('PropertyDetailsComponent.aucuneDescription') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import AvantagesList from '@/components/AvantagesList.vue'
import { capitalizeFirstLetter } from '@/services/capitalizeFirstLetter.js'
import { useI18n } from 'vue-i18n'
import Galleria from 'primevue/galleria';


// PrimeVue
import Dialog from 'primevue/dialog'

const { t } = useI18n()

// État du modal
const visibleGallery = ref(false)

// Transformation des images du logement pour Galleria
const images = computed(() => {
  if (!props.logement || !props.logement.images) return []
  return props.logement.images.map(img => ({
    itemImageSrc: img.file,
    thumbnailImageSrc: img.file,
    alt: 'Image du logement'
  }))
})

// Options responsive de Galleria
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]

const props = defineProps({
    logement: {
        type: Object,
        required: true,
    },
})

// Avantages du logement traduits
const avantages = computed(() => [
    props.logement.is_meuble ? t('PropertyDetailsComponent.logementMeuble') : t('PropertyDetailsComponent.logementNonMeuble'),
    props.logement.chambres_for_mobile?.length
        ? `${props.logement.chambres_for_mobile.length} ${t('PropertyDetailsComponent.chambres')}`
        : null,
    props.logement.is_eligible_apl ? t('PropertyDetailsComponent.logementEligibleAPL') : null,
    props.logement.principaux_equipements?.length > 0
        ? t('PropertyDetailsComponent.equipementsLogement')
        : null,
    props.logement.minDate ? t('PropertyDetailsComponent.datesDisponibilite') : null
].filter(Boolean))

// Conditions pour louer le logement
const conditions = ref([
    {
        icon: 'D',
        label: t('PropertyDetailsComponent.typeBail'),
        value: props.logement.type_bail || t('PropertyDetailsComponent.pasBailDefini'),
    },
    {
        icon: 'G',
        label: t('PropertyDetailsComponent.garantie'),
        value: props.logement.type_garantie || t('PropertyDetailsComponent.pasGarantieDefinie'),
    },
    {
        icon: '€',
        label: t('PropertyDetailsComponent.dossier'),
        value: t('PropertyDetailsComponent.dossierComplet'),
    },
])

// Éléments financiers traduits
const elements = ref([
    t('PropertyDetailsComponent.chargesLocatives'),
    t('PropertyDetailsComponent.depotGarantie'),
    t('PropertyDetailsComponent.loyerHorsCharge'),
    t('PropertyDetailsComponent.assuranceHabitation'),
    t('PropertyDetailsComponent.fraisAgence')
])

// URL de la carte Google Maps
const mapUrl = computed(() => {
    if (!props.logement || !props.logement.lat || !props.logement.lon) return ''
    return `https://www.google.com/maps?q=${props.logement.lat},${props.logement.lon}&hl=fr&z=14&output=embed`
})
</script>



<style scoped>
.details__color {
    color: #645afc;
}

/* Tes styles sont conservés sans modification */
.details__intro {
    margin-bottom: 40px;
    margin-top: 40px;
}

.details__block {
    margin-bottom: 40px;
    margin-top: 40px;
}

.details__block h5 {
    color: #13216e;
}

.bailleur h5 {
    color: #13216e;
}

.bailleur {
    padding: 40px !important;
    display: flex;
    flex-direction: row;
    gap: 24px;
}


@media (max-width: 768px) {
    .bailleur_block_header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        margin: 24px 0;
    }
}

@media (max-width: 768px) {
    .bailleur {
        display: block;
    }
}

.bailleur_block_image {
    width: 124px;
}

.bailleur_block_body {
    flex: 1;
}

.bailleur_block_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.bailleur_block_header .button {
    padding: 14px 30px 16px;
    background-color: #fff;
    color: #13216e;
}

.bailleur_image {
    border-radius: 50%;
    height: 124px;
    width: 124px;
    background-color: #aaaaaa;
}

.singl {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 8px;
}

.singl__wrapper {
    margin: 22px 0px;
}

.rental-conditions {
    padding: 1rem;
}

.condition-title {
    background-color: #e0ecff;
    color: #003399;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: inline-block;
}

.condition-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 24px;
}

.condition-card {
    flex: 1 1 200px;
    background-color: #f0f8fa;
    border-radius: 12px;
    padding: 2.7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.condition-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background-color: #e0e7ff;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    color: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
}

.condition-label {
    color: #334155;
    font-size: 0.9rem;
}

.condition-value {
    font-size: 1.1rem;
    font-weight: bold;
    color: #0f172a;
    text-align: inherit;
}

.invest__cta {
    min-width: 140px;
}
</style>