<template>
    <div class="chambre-card">
        <div class="image-section image-container">
            <template v-if="images && images.length">
                <img v-for="image in images.slice(0, 3)" :key="image.id" :src="image.file" alt="Image du logement"
                    :class="['image', `count-${images.length > 3 ? 3 : images.length}`]" />
            </template>
            <div v-else class="image-placeholder">{{ imagePlaceholder }}</div>
        </div>

        <div class="info-section">
            <div class="info-section-header">
                <div class="info-section withoutPadding">
                    <div class="title">
                        <h2>{{ titre }} . {{ surface }} m²</h2>
                    </div>
                    <div class="subtitle">
                        <template v-if="isMeuble || isSalleDeBainIndividuelle">
                            <div v-if="isMeuble" class="meuble">Meublée</div>
                            <div v-if="isSalleDeBainIndividuelle">Salle de bain individuelle</div>
                        </template>
                        <template v-else>
                            <div class="meuble">Non meublée</div>
                            <div>Pas de salle de bain individuelle</div>
                        </template>
                    </div>
                </div>
                <div class="title title-right">
                    <div class="price">
                        {{ prix }}€<span class="per">/mois</span>
                    </div>
                    <div class="price">
                        {{ charge_locatives.montant }}€ <span class="per">charges locatives</span>
                    </div>
                    <div :class="['price', 'sub', isDisponible ? 'green' : 'red']">
                        {{ isDisponible ? 'Disponible' : 'Indisponible' }}
                    </div>
                </div>
            </div>

            <div class="equipements">
                <h3>Équipements de la chambre</h3>
                <div class="equipements-bloc"  v-if="equipementsActifs.length">
                    <div class="equipement-container">
                        <div class="equipement-item" v-for="(equipement, index) in equipementsActifs.slice(0, 3)"
                            :key="index">
                            <img class="icon-placeholder" :src="equipement.icon" :alt="equipement.label" />
                            <span :title="equipement.label">
                                {{ equipement.label.length > 10 ? equipement.label.slice(0, 8) + '…' : equipement.label }}
                            </span>
                        </div>
                    </div>

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
                        <strong>{{ Array.isArray(dateDispo) && dateDispo.length > 0 ? extraireDateFin(dateDispo[0]) :'Non définie' }}</strong>
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
        </div>
    </div>

    <!-- Modal vue-final-modal -->
    <VueFinalModal v-model="showEquipements" :click-to-close="true" content-class="bloc-modal" :content-style="{
        background: 'white',
        padding: '32px',
        borderRadius: '8px',
        maxWidth: '1000px',
        width: '90%',
        margin: 'auto',
        marginTop: '100px'
    }">
        <h3>Liste complète des équipements</h3>
        <ul class="liste-content">
            <!-- je qu'il soient aligne les l'un apres les autres et que le label soit en desous de l'icone -->
            <li class="liste-item" v-for="(equipement, index) in equipementsActifs" :key="index">
                <img :src="equipement.icon" :alt="equipement.label" width="20" />
                <span>{{ equipement.label }}</span>
            </li>
        </ul>
        <button class="button button--effect" @click="showEquipements = false">Fermer</button>
    </VueFinalModal>
</template>

<script setup>
import { computed, ref } from 'vue'
import { VueFinalModal } from 'vue-final-modal'

const showEquipements = ref(false)

const props = defineProps({
    titre: { type: String, default: 'Chambre 01 de 12m²' },
    prix: { type: [String, Number], default: '650' },
    imagePlaceholder: { type: String, default: '4096X2304' },
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
    lienEquipements: { type: String, default: '/detail/6d1b65aa-6437-3000-8bc2-651b06265bbf' },
    dateDispo: { type: Array, default: () => [] },
    images: { type: Array, default: () => [] },
    depotGarantie: { type: [String, Number], default: 'Non définie' },
    isMeuble: { type: Boolean, default: false },
    isSalleDeBainIndividuelle: { type: Boolean, default: false },
    isDisponible: { type: Boolean, default: true },
    charge_locatives: { type: Object, default: () => ({ montant: 100 }) },
    surface: { type: Number, default: 0 },
    sousTitre: {type: String, default: ""},                 // <--- ajoute cette prop
    texteLienEquipements: {type: String, default: ""}
})

defineEmits(['louer'])

const allEquipements = {
    lit_double: { label: 'Lit double', icon: 'https://mydev.espacebailleurekna.fr/svg/lit_double.svg' },
    lit_simple: { label: 'Lit simple', icon: 'https://mydev.espacebailleurekna.fr/svg/lit_simple.svg' },
    armoire: { label: 'Armoire', icon: 'https://mydev.espacebailleurekna.fr/svg/armoire.svg' },
    bureau: { label: 'Bureau', icon: 'https://mydev.espacebailleurekna.fr/svg/bureau.svg' },
    table_chevet: { label: 'Table de chevet', icon: 'https://mydev.espacebailleurekna.fr/svg/table_chevet.svg' },
    radiateur: { label: 'Radiateur', icon: 'https://mydev.espacebailleurekna.fr/svg/radiateur.svg' }
}

const equipementsActifs = computed(() =>
    Object.entries(props.equipements)
        .filter(([_, value]) => value === true)
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
    /* flex: 1;
    margin-right: 32px; */
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
}

.image-container .count-1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container .count-2 {
    flex: 1;
    object-fit: cover;
    width: 100%;
    height: calc(100% / 2);
}

.image-container .count-3 {
    flex: 1;
    object-fit: cover;
    width: 100%;
    height: calc(100% / 3);
}

.image-section {
    background: #ccc;
    display: flex;
    flex-direction: column;
    flex: 1 1 200px;
    min-width: 150px;
}

.info-section {
    flex: 2 1 530px;
    padding: 12px 24px;
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
}

.title .per {
    font-weight: bold;
    font-size: 0.6em;
}

.subtitle {
    color: #13216f;
    font-size: 0.8em;
    line-height: 1em;
    text-align: left;
}

.equipements {
    /* margin-top: 8px; */
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
    flex-wrap: wrap;
    gap: 8px;
}

.equipements .equipement-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 70px;
    height: 88px;
    align-items: center;
}
.equipement-item span {
    font-size: 14px;
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

.details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
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
    font-size: 0.9em;
}

.dot-green {
    background-color: #28a745;
    border-radius: 100%;
    width: 10px;
    height: 10px;
}

.withoutPadding {
    padding: 0;
}

.info-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
}

.title-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    width: 312px;
    flex-direction: column;
}

.sub {
    font-size: medium;
    margin-top: 12px;
}

.red {
    color: #ff4d4f;
}

.green {
    color: #49e6cd;
}

.bloc-modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    margin: auto;
}

@media (max-width: 768px) {
    .info-section-header {
        flex-direction: column;
        align-items: flex-start;
        height: 140px;
        margin-bottom: 14px;
    }

    .title-right {
        align-items: flex-start;
        margin-top: 12px;
    }
}

.liste-content {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding: 24px 0;
}

.liste-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* width: 100px; */
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.liste-item img {
    width: 100px;
    clip-path: inset(2px 2px 2px 2px);
}

.equipement-container {
    display: flex;
    flex-direction: row;
    gap: 24px;
}

.meuble {
    margin-bottom: 6px;
}
</style>
