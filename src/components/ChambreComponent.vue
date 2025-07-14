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
                <a href="#" class="button button--effect equipement-btn btn-blanc">
                    voir tous les équipements
                </a>
            </div>
        </div>

        <div class="details__block chambre-block">
            <h5>Les chambres</h5>
            <ChambreCardComponent v-for="(chambre, index) in chambres" :key="index" :titre="chambre.titre"
                :prix="chambre.prix" :sousTitre="chambre.sousTitre" :equipements="chambre.equipements"
                :dateDispo="chambre.dateDispo" :depotGarantie="chambre.depotGarantie"
                :lienEquipements="chambre.lienEquipements" :texteLienEquipements="chambre.texteLienEquipements"
                @louer="handleLouer(chambre.titre)" />
        </div>
    </div>
</template>

<script setup>
import ChambreCardComponent from '@/components/ChambreCardComponent.vue'

const chambres = [
    {
        titre: 'Chambre 01 de 15m²',
        prix: '750€',
        sousTitre: 'Non meublée - SDB partagée',
        equipements: [{ icon: '/src/assets/images/icons/douche.png', label: 'Douche' }],
        dateDispo: '01 mai 2025',
        depotGarantie: '620€',
        lienEquipements: '/logement/uuid-xyz',
        texteLienEquipements: 'Consulter les équipements',
    },
    {
        titre: 'Chambre 02 de 13m²',
        prix: '700€',
        sousTitre: 'Meublée - SDB privative',
        equipements: [{ icon: '/src/assets/images/icons/douche.png', label: 'Douche' }],
        dateDispo: '15 mai 2025',
        depotGarantie: '600€',
        lienEquipements: '/logement/uuid-abc',
        texteLienEquipements: 'Voir les équipements',
    },
    {
        titre: 'Chambre 03 de 12m²',
        prix: '680€',
        sousTitre: 'Meublée - SDB partagée',
        equipements: [{ icon: '/src/assets/images/icons/douche.png', label: 'Douche' }],
        dateDispo: '01 juin 2025',
        depotGarantie: '580€',
        lienEquipements: '/logement/uuid-def',
        texteLienEquipements: 'Tous les équipements',
    },
]

const equipements = [
    {
        icon: new URL('@/assets/images/icons/canape.png', import.meta.url).href,
        label: 'Canapé',
    },
    {
        icon: new URL('@/assets/images/icons/gazinier.png', import.meta.url).href,
        label: 'Gazinière',
    },
    {
        icon: new URL('@/assets/images/icons/douches.png', import.meta.url).href,
        label: 'Douche italienne',
    },
    {
        icon: new URL('@/assets/images/icons/terasse.png', import.meta.url).href,
        label: 'Terrasse',
    },
]

function handleLouer(titre) {
    console.log(`Chambre louée : ${titre}`)
}
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