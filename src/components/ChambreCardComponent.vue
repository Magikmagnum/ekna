<template>
    <div class="chambre-card">
        <div class="image-section image-container">
            <template v-if="props.images && props.images.length">
                <img v-for="image in props.images.slice(0, 3)" :key="image.id" :src="image.file" alt="Image du logement"
                    :class="['image', `count-${props.images.length > 3 ? 3 : props.images.length}`]" />
            </template>
            <div v-else class="image-placeholder">{{ imagePlaceholder }}</div>
        </div>

        <div class="info-section">

            <div class="info-section-header">
                <div class="info-section whithousPadding">
                    <div class="title">
                        <h2>{{ titre }}</h2>
                    </div>
                    <p class="subtitle">
                        <template v-if="isMeuble || isSalleDeBainIndividuelle">
                            <div v-if="isMeuble" class="meuble">Meublée</div>
                            <div v-if="isSalleDeBainIndividuelle">Salle de bain individuelle</div>
                        </template>
                        <template v-else>
                            <span>Non meublée</span>
                            <span> - </span>
                            <span>Pas de SDB individuelle</span>
                        </template>
                    </p>
                </div>
                <div class="title title-right">
                    <div class="price">
                        {{ prix }}€<span class="per">/mois</span>
                    </div>
                    <div class="price">
                        100€ <span class="per">charges locatives</span>
                    </div>
                    <div class="price sub">
                        Disponible
                    </div>
                </div>
            </div>

            <div class="equipements" v-if="equipementsActifs.length">
                <h3>Équipements de la chambre</h3>
                <div class="equipements-bloc">
                    <div class="equipement-item" v-for="(equipement, index) in equipementsActifs.slice(0, 3)"
                        :key="index">
                        <img class="icon-placeholder" :src="equipement.icon" :alt="equipement.label" />
                        <span :title="equipement.label">
                            {{ equipement.label.length > 11 ? equipement.label.slice(0, 11) + '…' : equipement.label }}
                        </span>
                    </div>

                    <!-- Bouton pour ouvrir le modal -->
                    <a class="button button--effect btn-blanc" @click.prevent="showEquipements = true">
                        Consulter les équipements
                    </a>
                </div>
            </div>

            <div class="details">
                <div class="detail-row">
                    <div class="detail-row-item">
                        <span class="dot-green"></span>
                        <span>Disponible à partir du</span>
                        <span>|</span>
                        <strong>{{ Array.isArray(dateDispo) && dateDispo.length > 0 ? extraireDateFin(dateDispo[0]) :'Non définie'}}</strong>
                    </div>
                    <div class="detail-row-item">
                        <span class="dot-green"></span>
                        <span>Dépôt de garantie</span>
                        <span>|</span>
                        <strong>{{ depotGarantie }}€</strong>
                    </div>
                </div>
                <button class="button button--effect" @click="$emit('louer')">Louer</button>
            </div>

            <!-- Modal placé ici, hors du flex -->
            <div v-if="showEquipements" class="modal-overlay" @click.self="showEquipements = false">
                <div class="modal">
                    <h3>Liste complète des équipements</h3>
                    <ul>
                        <li v-for="(equipement, index) in equipementsActifs" :key="index">
                            <img :src="equipement.icon" :alt="equipement.label" width="20" />
                            {{ equipement.label }}
                        </li>
                    </ul>
                    <button @click="showEquipements = false">Fermer</button>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import { computed, ref } from 'vue'

const showEquipements = ref(false)

const props = defineProps({
    titre: {
        type: String,
        default: 'Chambre 01 de 12m²'
    },
    prix: {
        type: String,
        default: '650€'
    },
    imagePlaceholder: {
        type: String,
        default: '4096X2304'
    },
    equipements: {
        type: Object,
        default: () => ({
            lit_double: true,
            lit_simple: true,
            armoire: false,
            bureau: true,
            table_chevet: false,
            radiateur: true
        })
    },
    lienEquipements: {
        type: String,
        default: '/detail/6d1b65aa-6437-3000-8bc2-651b06265bbf'
    },
    dateDispo: {
        type: Array,
        default: () => []
    },
    images: {
        type: Array,
        default: () => []
    },
    depotGarantie: {
        type: String,
        default: 'Non définie'
    },
    isMeuble: {
        type: Boolean,
        default: false
    },
    isSalleDeBainIndividuelle: {
        type: Boolean,
        default: false
    }
})

defineEmits(['louer'])

// Liste des icônes et labels pour chaque équipement
const allEquipements = {
    lit_double: {
        label: 'Lit double',
        icon: 'https://mydev.espacebailleurekna.fr/svg/lit_double.svg'
    },
    lit_simple: {
        label: 'Lit simple',
        icon: 'https://mydev.espacebailleurekna.fr/svg/lit_simple.svg'
    },
    armoire: {
        label: 'Armoire',
        icon: 'https://mydev.espacebailleurekna.fr/svg/armoire.svg'
    },
    bureau: {
        label: 'Bureau',
        icon: 'https://mydev.espacebailleurekna.fr/svg/bureau.svg'
    },
    table_chevet: {
        label: 'Table de chevet',
        icon: 'https://mydev.espacebailleurekna.fr/svg/table_chevet.svg'
    },
    radiateur: {
        label: 'Radiateur',
        icon: 'https://mydev.espacebailleurekna.fr/svg/radiateur.svg'
    }
}

// Transformer les équipements actifs en tableau exploitable
const equipementsActifs = computed(() =>
    Object.entries(props.equipements)
        .filter(([key, value]) => value === true)
        .map(([key]) => ({
            label: allEquipements[key]?.label || key,
            icon: allEquipements[key]?.icon || ''
        }))
)

function extraireDateFin(periode) {
    if (!periode || typeof periode !== 'string') return ''
    const parts = periode.split('Au')
    return parts[1] ? parts[1].trim() : ''
}
</script>

<style scoped>
.detail-row {
    flex: 1;
    margin-right: 32px;
}

.chambre-card {
    display: flex;
    flex-wrap: wrap;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
}


.image-container {
    height: 348px;
    /* gap: 10px; */
}

.image-container .count-1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container .count-2 {
    /* width: calc(100% / 2); */
    /* height: 200px; */
    flex: 1;
    object-fit: cover;
    width: 100%;
    height: calc(100% / 2);
}

.image-container .count-3 {
    /* width: calc(100% / 3); */
    /* height: 200px; */
    flex: 1;
    object-fit: cover;
    width: 100%;
    height: calc(100% / 3);
}

.image-section {
    background: #ccc;
    /* padding: 16px; */
    display: flex;
    flex-direction: column;
    /* gap: 16px; */
    flex: 1 1 200px;
    min-width: 150px;
}

.info-section {
    flex: 2 1 530px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.title h2 {
    font-weight: bold;
    margin: 0;
    font-size: 1em;
    line-height: 24px;
}

.title .price {
    font-weight: bold;
    /* font-size: 1.2em; */
}

.title .size {
    font-weight: normal;
    font-size: 1em;
}

.title .per {
    font-weight: normal;
    font-weight: bold;
    font-size: 0.6em;
}


.info-section .subtitle {
    color: #13216f;
    font-size: 0.8em;
    line-height: 1em;
    text-align: left;
}

.equipements {
    margin-top: 8px;
}

.equipements h3 {
    margin-bottom: 12px;
    font-size: 1em;
    line-height: 24px;
    text-align: left;
}

.equipements-bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.equipements .equipement-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 70px;
    height: 88px;
    align-items: center;
}

.equipements .icon-placeholder {
    background: #f3f3f3;
    border-radius: 4px;
    flex: 1;
    width: 85px;
    height: 30px;
}

.btn-blanc {
    font-size: 0.6em;
    padding: 10px 20px;
    color: #13216f;
    background: #fff;
}

.btn-blanc:hover {
    color: #13216e;
}

.chambre-block h5 {
    margin-bottom: 24px;
}

.equipement-item span {
    font-size: 0.6em;
    line-height: 16px;
}

.details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail-row-item {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    font-size: 0.8em;
    line-height: 16px;
    border-bottom: solid 1px #e5e5e5;
    border-top: solid 1px #e5e5e5;
    padding: 6px 0;
    margin-bottom: 6px;
}

.detail-row-item span {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: 0.8em;
    line-height: 16px;
}

.detail-row-item strong {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: 0.8em;
    line-height: 16px;
}

.dot-green {
    background-color: #28a745;
    border-radius: 100%;
    width: 10px;
    height: 10px;
}

.meuble {
    margin-bottom: 8px;
}

.whithousPadding {
    padding: 0;
}

.info-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.title-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    width: 312px;
    flex-direction: column;
}

.title-right .price {
    flex: 1;
}

.sub {
    font-size: medium;
    color: #8acfa0;
    margin-top: 12px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
}
</style>