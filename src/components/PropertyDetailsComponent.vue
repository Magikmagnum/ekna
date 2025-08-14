<template>
    <div class="p__details__content">
        <a href="#gallery" class="button button--effect button--secondary">
            <i class="fa-solid fa-images"></i> Voir la galerie
        </a>

        <div class="intro">
            <div>
                <span class="secondary details__color">Professionnel</span>
                <h3 v-if="logement"> {{ logement.titre_annonce }} </h3>
                <h3 v-else>
                    Chargement...
                </h3>

                <p v-if="logement">
                    {{ capitalizeFirstLetter(logement.type_logement) }} •
                    {{ logement.chambres_for_mobile?.length || 1 }} chambres •
                    {{ logement.surface_total }}m<sup>2</sup> •
                    Logement {{ logement.is_meuble ? 'meublé' : 'non meublé' }} •
                    Propriétaire {{ logement.is_occupant ? 'occupant' : 'non occupant' }}
                </p>
                <p v-else>
                    Chargement...
                </p>
            </div>

            <hr class="details__intro" />

            <div>
                <h4>Description</h4>
                <p v-if="logement">
                    {{ logement.description }}</p>
                <p v-else>
                    Chargement...
                </p>

                <div class="group__one" v-if="logement && logement.lat && logement.lon">
                    <div class="map__wrapper">
                        <iframe :src="mapUrl" width="746" height="312" style="border:0;" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>Les points forts de cette colocation:</h5>
                <AvantagesList :avantages="avantages" />
            </div>

            <div class="details__block">
                <h5>Les principales conditions pour louer ce logement:</h5>
                <div class="condition-cards">
                    <div class="condition-card" v-for="(item, index) in conditions" :key="index">
                        <div class="condition-icon">{{ item.icon }}</div>
                        <p class="condition-label">{{ item.label }}</p>
                        <p class="condition-value">{{ item.value }}</p>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>les principaux elements financiers a anticiper.</h5>
                <AvantagesList :avantages="elements" />
            </div>
        </div>

        <div class="group__one">
            <div class="tabular__group bailleur" v-if="logement && logement.proprietaire">
                <div class="bailleur_block_image">
                    <img class="bailleur_image" :src="logement.proprietaire.photo" alt="Photo du bailleur" />
                </div>
                <div class="bailleur_block_body">
                    <div class="bailleur_block_header">
                        <h5>{{ logement.proprietaire.first_name }} {{ logement.proprietaire.name }} (bailleur)</h5>
                    </div>
                    <div class="bailleur_block_content">
                        <p class="neutral-bottom">
                            {{ logement.proprietaire.description || 'Aucune description disponible.' }}
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

const props = defineProps({
    logement: {
        type: Object,
        required: true,
    },
})

// Cette propriété renvoie un tableau contenant uniquement les avantages valides du logement
const avantages = computed(() => [
    props.logement.is_meuble ? 'Logement meublé' : null,
    props.logement.chambres_for_mobile?.length
        ? `${props.logement.chambres_for_mobile.length} chambres`
        : null,
    props.logement.is_eligible_apl ? 'Logement éligible aux APL' : null,
    props.logement.principaux_equipements?.length > 0
        ? 'Équipement du logement'
        : null,
    props.logement.minDate ? 'Les dates de disponibilité' : null
].filter(Boolean))

// Conditions pour louer le logement
const conditions = ref([
    {
        icon: 'D',
        label: 'Type de bail',
        value: props.logement.type_bail || 'Pas de bail défini',
    },
    {
        icon: 'G',
        label: 'Garantie',
        value: props.logement.type_garantie || 'Pas de garantie définie',
    },
    {
        icon: '€',
        label: 'Dossier',
        value: 'Complet et conforme',
    },
])

const elements = ref([
    'Charges locatives',
    'Dépôt de garantie',
    'Loyer hors charge',
    'Assurance habitation',
    "Frais d'agence éventuels"
])

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