<template>
    <div class="intro">
        <h3>Détails du logement</h3>

        <div class="details__block">
            <h5>L'équipement</h5>
            <div class="equipements-bloc">
                <div class="equipement">
                    <div class="equipement-item" v-for="(item, index) in equipements" :key="index">
                        <img class="equipement-item-icon" :src="item.icon" :alt="item.label" />
                        <span>{{ item.label }}</span>
                    </div>
                </div>
                <!-- <a href="#" class="button button--effect equipement-btn btn-blanc">
                    voir tous les équipements
                </a> -->
            </div>
        </div>

        <div ref="chambresSection">
            <ChambreCardComponent v-for="(chambre, index) in logement.chambres_for_mobile" :key="chambre.id"
                :titre="`Chambre ${index + 1}`" :prix="chambre.loyer_hors_charge" :sousTitre="`${chambre.surface} m²`"
                :equipements="chambre.equipements" :dateDispo="chambre.date_disponibilites"
                :images="chambre.images" :depotGarantie="chambre.depot_garantie"
                :lienEquipements="`/equipements/${chambre.reference}`" :texteLienEquipements="'Voir les équipements'"
                :isSalleDeBainIndividuelle="chambre.is_salle_de_bain_individuelle" :isMeuble="chambre.is_meuble"
                @louer="handleLouer(`Chambre ${index + 1}`)" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ChambreCardComponent from '@/components/ChambreCardComponent.vue'

const props = defineProps({
    logement: {
        type: Object,
        required: false,
    },
})

const logement = props.logement

function handleLouer(titre) {
    // console.log(`Chambre louée : ${titre}`)
}

// Table de correspondance des labels
const labelMap = {
    canape: 'Canapé',
    cuisiniere: 'Gazinière',
    balcon: 'Balcon',
    douches: 'Douche italienne',
    terasse: 'Terrasse'
    // ajoute d'autres ici si besoin
}

// Générer le tableau final des équipements
const equipements = computed(() => {
    return logement.principaux_equipements.map((nom) => {
        return {
            icon: `https://mydev.espacebailleurekna.fr/svg/${nom}.svg`,
            label: nom // fallback si non trouvé
        }
    })
})



</script>

<style scoped>
.intro {
    margin-top: 40px;
    margin-bottom: 40px;
}

.details__block {
    margin: 40px 0;
    padding-top: 12px;
}

.details__block h5 {
    color: #13216e;
    margin-bottom: 24px;
}

.equipements-bloc {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.equipement {
    flex: 8;
    display: flex;
    gap: 32px;
    align-items: baseline;
    flex-wrap: wrap;
}

.equipement-btn {
    flex: 4;
}

.equipement-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 78px;
}

.equipement-item-icon {
    width: 78px;
    clip-path: inset(2px 2px 2px 2px);
}

.btn-blanc {
    font-size: 0.8em;
    padding: 18px 0px;
    color: #13216f;
    background: #fff;
}


@media (max-width: 768px) {
    .equipements-bloc {
        display: flex;
        align-items: normal;
        flex-direction: column;
        gap: 24px;
    }
}
</style>