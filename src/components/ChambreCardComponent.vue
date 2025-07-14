<template>
    <div class="chambre-card">
        <div class="image-section">
            <div class="image-placeholder">{{ imagePlaceholder }}</div>
        </div>

        <div class="info-section">
            <div class="title">
                <h2>{{ titre }}</h2>
                <div class="price">
                    {{ prix }}<span class="per">/mois</span>
                </div>
            </div>

            <p class="subtitle">{{ sousTitre }}</p>

            <div class="equipements" v-if="equipements && equipements.length">
                <h3>Équipements</h3>
                <div class="equipements-bloc">
                    <div class="equipement-item" v-for="(equipement, index) in equipements" :key="index">
                        <img class="icon-placeholder" :src="equipement.icon" :alt="equipement.label" />
                        <span>{{ equipement.label }}</span>
                    </div>

                    <a :href="lienEquipements" class="button button--effect btn-blanc">
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
                        <strong>{{ dateDispo }}</strong>
                    </div>
                    <div class="detail-row-item">
                        <span class="dot-green"></span>
                        <span>Dépôt de garantie</span>
                        <span>|</span>
                        <strong>{{ depotGarantie }}</strong>
                    </div>
                </div>
                <button class="button button--effect" @click="$emit('louer')">Louer</button>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({
    titre: {
        type: String,
        default: 'Chambre 01 de 12m²'
    },
    prix: {
        type: String,
        default: '650€'
    },
    sousTitre: {
        type: String,
        default: 'Meublée - SDB individuelle'
    },
    imagePlaceholder: {
        type: String,
        default: '4096X2304'
    },
    equipements: {
        type: Array,
        default: () => [
            {
                icon: '/src/assets/images/icons/douche.png',
                label: 'Douche'
            }
        ]
    },
    lienEquipements: {
        type: String,
        default: '/logement/6d1b65aa-6437-3000-8bc2-651b06265bbf'
    },
    dateDispo: {
        type: String,
        default: '09 avril 2025'
    },
    depotGarantie: {
        type: String,
        default: '580€'
    }
})

defineEmits(['louer'])
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

.image-section {
    background: #ccc;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1 1 200px;
    min-width: 150px;
}

.info-section {
    flex: 2 1 530px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    font-size: 1.2em;
}

.title .size {
    font-weight: normal;
    font-size: 1em;
}

.title .per {
    font-weight: normal;
    font-weight: bold;
    font-size: 0.8em;
}


.info-section .subtitle {
    color: #13216f;
    font-size: 0.8em;
    line-height: 1em;
    text-align: left;
}

.equipements {
    margin-top: 24px;
}

.equipements h3 {
    margin-bottom: 0px;
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
</style>