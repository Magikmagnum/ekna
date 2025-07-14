<template>
    <div class="p__details__sidebar">
        

        <div class="group brini">
            <h5 class="neutral-top">Chauffage et diagnostics</h5>
            <hr />
            <DiagnosticsCard />
        </div>
        <div class="group brini">
            <h5 class="neutral-top">Connectivité</h5>
            <hr />
            <AvantagesList :avantages="connectivite" />
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Charges locatives</h5>
            <hr />
            <AvantagesList :avantages="charges" />
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Autres oduinements</h5>
            <hr />
            <AvantagesList :avantages="autres" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AvantagesList from '@/components/AvantagesList.vue'
import DiagnosticsCard from '@/components/DiagnosticsCard.vue'

const connectivite = ref(['Wifi', 'Fibre', 'ADSL'])
const charges = ref(['Eau', 'Electricité', 'Gaz', 'Taxe ordures ménagères',])
const autres = ref(['Places de parking: 2', 'Ascenseur', 'Netflix', 'Amazon Prime',])
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