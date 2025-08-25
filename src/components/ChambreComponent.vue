<template>
    <div class="intro">
        <h3>Détails du logement</h3>

        <div class="details__block">
            <h5>L'équipement du logement</h5>
            <div class="equipements-bloc">
                <div class="equipement">
                    <div class="equipement-item" v-for="(item, key) in equipementsMaisonList" :key="key"
                        @click="openModal(item)">
                        <img class="equipement-item-icon" :src="item.icon" :alt="item.label" />
                        <span>{{ item.label }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="chambres_block" ref="chambresSection">
            <h5>Les chambres</h5>
            <ChambreCardComponent v-for="(chambre, index) in logement.chambres_for_mobile" :key="chambre.id"
                :titre="`Chambre ${index + 1}`" :prix="String(chambre.loyer_hors_charge)"
                :sousTitre="`${chambre.surface} m²`" :equipements="chambre.equipements"
                :dateDispo="chambre.date_disponibilites" :images="chambre.images"
                :depotGarantie="String(chambre.depot_garantie)" :lienEquipements="`/equipements/${chambre.reference}`"
                :texteLienEquipements="'Voir les équipements'"
                :isSalleDeBainIndividuelle="chambre.is_salle_de_bain_individuelle" :isMeuble="chambre.is_meuble"
                :isDisponible="chambre.is_disponible" :charge_locatives="chambre.charge_locatives"
                @louer="handleLouer(`Chambre ${index + 1}`)" :surface="chambre.surface" />
        </div>
    </div>

    <!-- Utilise le bon nom de composant -->
    <VueFinalModal v-model="isModalOpen" content-class="modal-content">
        <template #default>
            <h3>{{ selectedItem?.label }}</h3>
            <p>{{ selectedItem?.content?.description }}</p>
            <p><strong>Superficie :</strong> {{ selectedItem?.content?.superficie }}</p>
            <button @click="isModalOpen = false">Fermer</button>
        </template>
    </VueFinalModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChambreCardComponent from '@/components/ChambreCardComponent.vue'
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
    logement: {
        type: Object,
        required: false,
    },
})

const logement = props.logement

function handleLouer(titre) {
    // Action sur la location
}

// Définition des équipements
const equipements_maison = {
    salons: {
        icon: `https://mydev.espacebailleurekna.fr/svg/salon.svg`,
        label: 'Salon',
        content: {
            description: 'Un salon confortable avec un canapé.',
            superficie: '20 m²',
        },
    },
    cuisines: {
        icon: `https://mydev.espacebailleurekna.fr/svg/cuisine.svg`,
        label: 'Cuisine',
        content: {
            description: 'Une cuisine équipée avec tous les appareils nécessaires.',
            superficie: '15 m²',
        },
    },
    salle_bain: {
        icon: `https://mydev.espacebailleurekna.fr/svg/douche.svg`,
        label: 'Salle de bain',
        content: {
            description: 'Une salle de bain moderne avec douche.',
            superficie: '8 m²',
        },
    },
    exterieurs: {
        icon: `https://mydev.espacebailleurekna.fr/svg/exterieur.svg`,
        label: 'Extérieur',
        content: {
            description: 'Un espace extérieur agréable.',
            superficie: '30 m²',
        },
    },
}

// Transforme l'objet en tableau
const equipementsMaisonList = computed(() => Object.values(equipements_maison))

// État de la modale
const isModalOpen = ref(false)
const selectedItem = ref(null)

function openModal(item) {
    selectedItem.value = item
    isModalOpen.value = true
}
</script>

<style scoped>
/* Styles identiques à ton exemple */
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

.equipement-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 78px;
    cursor: pointer;
    text-align: center;
}

.equipement-item-icon {
    width: 78px;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
}
</style>
