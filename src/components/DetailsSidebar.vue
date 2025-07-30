<template>
    <div class="p__details__sidebar">
        <div class="group brini">
            <h5 class="neutral-top">Chauffage et diagnostics</h5>
            <hr />
            <DiagnosticsCard :dpe="logement.dpe_diagnostic" :ges="logement.ges_diagnostic"/>
        </div>
        <div class="group brini">
            <h5 class="neutral-top">Connectivité</h5>
            <hr />
            <!-- si connectivite est vide -->
            <AvantagesList v-if="connectivite.length" :avantages="connectivite" />
            <p v-else>Aucune information de connectivité disponible</p>
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Charges locatives</h5>
            <hr />
            <AvantagesList v-if="charges.length" :avantages="charges" />
            <p v-else>Aucune information de charges locatives disponible</p>
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Autres équipements</h5>
            <hr />
            <AvantagesList :avantages="autres" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AvantagesList from '@/components/AvantagesList.vue'
import DiagnosticsCard from '@/components/DiagnosticsCard.vue'

// Tableau de conversion pour les connectivités
const CONNECTIVITE_LABELS: Record<string, string> = {
    wifi: 'Wifi',
    fibre: 'Fibre',
    adsl: 'ADSL',
}

// Tableau de conversion pour les charges locatives
const CHARGES_LABELS: Record<string, string> = {
    eau: 'Eau',
    electricite: 'Électricité',
    gaz: 'Gaz',
    ordure_menagere: 'Taxe ordures ménagères',
}

// Props
const props = defineProps({
    logement: {
        type: Object,
        required: false,
    },
})

const logement = props.logement ?? {}

// Hydratation dynamique
const connectivite = computed(() => {
    if (!logement.connectivite) return []
    return Object.entries(CONNECTIVITE_LABELS)
        .filter(([key]) => logement.connectivite?.[key])
        .map(([, label]) => label)
})

const charges = computed(() => {
    if (!logement.charge_locatives) return []
    return Object.entries(CHARGES_LABELS)
        .filter(([key]) => logement.charge_locatives?.[key])
        .map(([, label]) => label)
})

// Autres avantages, modifiable selon besoin
const autres = ref(['Places de parking: 2', 'Ascenseur', 'Netflix', 'Amazon Prime'])

</script>

<style scoped>
.p__details__sidebar .group .suby {
    border: 1px solid #ffffff;
}

.p__details__sidebar .group .suby button {
    width: 225px;
}

.colocataire_image_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.colocataire_image {
    border-radius: 50%;
    height: 124px;
    width: 124px;
    background-color: #aaaaaa;
}

.chambres_diplonibles_badge_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f8fa;
    padding: 10px 30px;
    line-height: 3em;
    border-radius: 12px;
}

.chambre_diplonible_prix {
    color: #13216e;
    font-weight: bold;
    text-align: center;
}

.bullet-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #1e293b;
    line-height: 1.6;
}

.bullet-list li {
    margin: 32px 0;
}
</style>