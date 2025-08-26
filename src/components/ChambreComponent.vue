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

    <!-- Modale pour les équipements -->
    <VueFinalModal v-model="isModalOpen" :content-style="{
        background: 'white',
        padding: '32px',
        borderRadius: '8px',
        maxWidth: '1000px',
        width: '90%',
        margin: 'auto',
        marginTop: '100px'
    }">
        <template #default>
            <h3>{{ selectedItem?.label }}</h3>
            <ul v-if="selectedItem?.content.length"  class="liste-content">
                <li class="liste-item" v-for="equip in selectedItem.content" :key="equip.label" >
                     <img :src="equip.icon" :alt="equip.label" width="20" />
                    <span>{{ equip.label }}</span>
                </li>
            </ul>
            <p v-else>Aucun équipement disponible</p>
            <button class="button button--effect" @click="isModalOpen = false">Fermer</button>
        </template>
    </VueFinalModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChambreCardComponent from '@/components/ChambreCardComponent.vue'
import { VueFinalModal } from 'vue-final-modal'

// Props logement
const props = defineProps({
    logement: {
        type: Object,
        required: true,
    },
})

const logement = props.logement

// État de la modale
const isModalOpen = ref(false)
const selectedItem = ref(null)

function openModal(item) {
    selectedItem.value = item
    isModalOpen.value = true
}

function handleLouer(titre) {
    // Action sur la location
}

// Mapping sous-équipements
const sousEquipementsMap = {
    canape: { label: 'Canapé', icon: 'https://mydev.espacebailleurekna.fr/svg/canape.svg' },
    fauteuil: { label: 'Fauteuil', icon: 'https://mydev.espacebailleurekna.fr/svg/fauteuil.svg' },
    television: { label: 'Télévision', icon: 'https://mydev.espacebailleurekna.fr/svg/television.svg' },
    rangement: { label: 'Rangement', icon: 'https://mydev.espacebailleurekna.fr/svg/rangement.svg' },
    table_basse: { label: 'Table basse', icon: 'https://mydev.espacebailleurekna.fr/svg/table_basse.svg' },
    salle_a_manger: { label: 'Salle à manger', icon: 'https://mydev.espacebailleurekna.fr/svg/salle_a_manger.svg' },
    cuisiniere: { label: 'Cuisinière', icon: 'https://mydev.espacebailleurekna.fr/svg/cuisiniere.svg' },
    table_et_chaise: { label: 'Table et chaise', icon: 'https://mydev.espacebailleurekna.fr/svg/table_chaise.svg' },
    refrigerateur: { label: 'Réfrigérateur', icon: 'https://mydev.espacebailleurekna.fr/svg/refrigerateur.svg' },
    micro_ondes: { label: 'Micro-ondes', icon: 'https://mydev.espacebailleurekna.fr/svg/micro_ondes.svg' },
    lave_vaisselle: { label: 'Lave-vaisselle', icon: 'https://mydev.espacebailleurekna.fr/svg/lave_vaisselle.svg' },
    vaisselle: { label: 'Vaisselle', icon: 'https://mydev.espacebailleurekna.fr/svg/vaisselle.svg' },
    hotte: { label: 'Hotte', icon: 'https://mydev.espacebailleurekna.fr/svg/hotte.svg' },
    baignoire: { label: 'Baignoire', icon: 'https://mydev.espacebailleurekna.fr/svg/baignoire.svg' },
    douche: { label: 'Douche', icon: 'https://mydev.espacebailleurekna.fr/svg/douche.svg' },
    vasque: { label: 'Vasque', icon: 'https://mydev.espacebailleurekna.fr/svg/vasque.svg' },
    seche_serviette: { label: 'Sèche-serviette', icon: 'https://mydev.espacebailleurekna.fr/svg/seche_serviette.svg' },
    seche_cheveux: { label: 'Sèche-cheveux', icon: 'https://mydev.espacebailleurekna.fr/svg/seche_cheveux.svg' },
    double_vasque: { label: 'Double vasque', icon: 'https://mydev.espacebailleurekna.fr/svg/double_vasque.svg' },
    ventilation: { label: 'Ventilation', icon: 'https://mydev.espacebailleurekna.fr/svg/ventilation.svg' },
    lave_linge: { label: 'Lave-linge', icon: 'https://mydev.espacebailleurekna.fr/svg/lave_linge.svg' },
    toilette: { label: 'Toilette', icon: 'https://mydev.espacebailleurekna.fr/svg/toilette.svg' },
    balance: { label: 'Balance', icon: 'https://mydev.espacebailleurekna.fr/svg/balance.svg' },
    balcon: { label: 'Balcon', icon: 'https://mydev.espacebailleurekna.fr/svg/balcon.svg' },
    terasse: { label: 'Terrasse', icon: 'https://mydev.espacebailleurekna.fr/svg/terrasse.svg' },
    barbecue: { label: 'Barbecue', icon: 'https://mydev.espacebailleurekna.fr/svg/barbecue.svg' },
    jardin: { label: 'Jardin', icon: 'https://mydev.espacebailleurekna.fr/svg/jardin.svg' },
}

// Définition des pièces avec icônes principales
const equipements_maison = {
    salons: { label: "Salon", icon: `https://mydev.espacebailleurekna.fr/svg/salon.svg` },
    cuisines: { label: "Cuisine", icon: `https://mydev.espacebailleurekna.fr/svg/cuisine.svg` },
    salle_bain: { label: "Salle de bain", icon: `https://mydev.espacebailleurekna.fr/svg/douche.svg` },
    exterieurs: { label: "Exterieur", icon: `https://mydev.espacebailleurekna.fr/svg/exterieur.svg` },
}

// Générer la liste des équipements par pièce
function getEquipementsContent(pieceData) {
    return Object.keys(pieceData)
        .filter((key) => key !== 'logements_id' && pieceData[key] && sousEquipementsMap[key])
        .map((key) => sousEquipementsMap[key])
}

const equipementsMaisonList = computed(() =>
    Object.keys(equipements_maison).map((pieceKey) => {
        const pieceData = logement[pieceKey]
        return pieceData
            ? {
                label: equipements_maison[pieceKey].label,
                icon: equipements_maison[pieceKey].icon,
                content: getEquipementsContent(pieceData),
            }
            : null
    }).filter(Boolean)
)
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

.equipement-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
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

.equip-modal-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 12px 0;
}

.equip-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
}


.liste-content {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding: 24px 0;
    flex-wrap: wrap;
    justify-content: space-around;
}

.liste-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* width: 100px; */
    text-align: center;
}

.liste-item img {
    width: 100px;
    clip-path: inset(2px 2px 2px 2px);
}
</style>
