<template>
    <div class="intro">
        <h3>Détails du logement</h3>


        <div class="details__block">
            <h5>L'équipement du logement</h5>
            <div class="equipements-bloc">
                <div class="equipement">
                    <!-- je utilise  equipements_maison à la place de equipements -->
                    <div class="equipement-item" v-for="(item, key) in equipementsMaisonList" :key="key">
                        <img class="equipement-item-icon" :src="item.icon" :alt="item.label" />
                        <span>{{ item.label }}</span>
                    </div>
                </div>
                <!-- <a href="#" class="button button--effect equipement-btn btn-blanc">
                    voir tous les équipements
                </a> -->
            </div>
        </div>

        <div class="chambres_block" ref="chambresSection">
            <h5>Les chambres</h5>
            <ChambreCardComponent v-for="(chambre, index) in logement.chambres_for_mobile" :key="chambre.id"
                :titre="`Chambre ${index + 1}`" :prix="String(chambre.loyer_hors_charge)" :sousTitre="`${chambre.surface} m²`"
                :equipements="chambre.equipements" :dateDispo="chambre.date_disponibilites" :images="chambre.images"
                :depotGarantie="String(chambre.depot_garantie)" :lienEquipements="`/equipements/${chambre.reference}`"
                :texteLienEquipements="'Voir les équipements'"
                :isSalleDeBainIndividuelle="chambre.is_salle_de_bain_individuelle" :isMeuble="chambre.is_meuble"
                :isDisponible="chambre.is_disponible" :charge_locatives="chambre.charge_locatives"
                @louer="handleLouer(`Chambre ${index + 1}`)" :surface="chambre.surface" />
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

const equipements_maison = {
    salons: {
        icon: `https://mydev.espacebailleurekna.fr/svg/salons.svg`,
        label: 'Salon',
        content: {
            description: 'Un salon confortable avec un canapé.',
            superficie: '20 m²'
        }
    },
    cuisines: {
        icon: `https://mydev.espacebailleurekna.fr/svg/cuisines.svg`,
        label: 'Cuisine',
        content: {
            description: 'Une cuisine équipée avec tous les appareils nécessaires.',
            superficie: '15 m²'
        }
    },
    salle_bain: {
        icon: `https://mydev.espacebailleurekna.fr/svg/salle_bain.svg`,
        label: 'Salle de bain',
        content: {
            description: 'Une salle de bain moderne avec douche.',
            superficie: '8 m²'
        }
    },
    exterieurs: {
        icon: `https://mydev.espacebailleurekna.fr/svg/exterieurs.svg`,
        label: 'Extérieur',
        content: {
            description: 'Un espace extérieur agréable.',
            superficie: '30 m²'
        }
    }
};

// Transforme l'objet en tableau de valeurs
const equipementsMaisonList = computed(() => Object.values(equipements_maison))

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

.details__block h5,
.chambres_block h5 {
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