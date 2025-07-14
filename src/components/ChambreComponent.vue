<template>
    <div class="">
        <div class="intro">

            <h3>Détails du logement</h3>

            <div class="details__block">
                <h5>L'équipement</h5>
                <ul class="singl__wrapper">
                    <li class="singl" v-for="(item, index) in avantages" :key="index">
                        <img src="/src/assets/images/check.png" alt="Check" />
                        <div>
                            <p>{{ item }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="details__block chambre-block">
                <h5>Les chambres</h5>


                <!-- SLIDE DE BASE -->


                <div class="chambre-card">
                    <div class="image-section">
                        <div class="image-placeholder">4096X2304</div>
                        <!-- v-for="n in 3" :key="n" -->
                    </div>
                    <div class="info-section">
                        <div class="title">
                            <!-- <span class="size"></span> -->
                            <h2>Chambre 01 de 12m²</h2>
                            <div class="price">650€<span class="per">/mois</span></div>
                        </div>
                        <p class="subtitle">Meublée - SDB individuelle</p>

                        <div class="equipements">
                            <h3>Équipements</h3>
                            <div class="equipements-bloc">
                                <div class="equipement-item">
                                    <div class="icon-placeholder"></div>
                                    <span>Douche</span>
                                </div>

                                <a href="/logement/6d1b65aa-6437-3000-8bc2-651b06265bbf" class="button button--effect btn-blanc">
                                    voir tous les équipements
                                </a>
                            </div>
                        </div>

                        <div class="details">
                            <div class="detail-row">
                                <div class="detail-row-item">
                                    <span class="dot-green"></span>
                                    <span>Disponible à partir du |</span>
                                    <strong>09 avril 2025</strong>
                                </div>
                                <div class="detail-row-item">
                                    <span class="dot-green"></span>
                                    <span>Dépôt de garantie |</span>
                                    <strong>580€</strong>
                                </div>
                            </div>
                            <button class="button button--effect">Louer</button>
                        </div>
                    </div>
                </div>


                <!-- FIN DU SLIDE -->






            </div>
        </div>
    </div>
</template>

<script>
import ChambreCard from './ChambreCard.vue';

export default {
    name: 'PropertyDetailsMain',
    data() {
        return {
            interestRates: [13, 13.25, 13.5, 14],
            earnings: [
                { period: '01 Month', amount: '0.72' },
                { period: '12 Month', amount: '11.72' },
                { period: '24 Month', amount: '17.72' },
            ],
            loanInfo: {
                'Amount of funding': '40,000 €',
                Risk: 'C (Higher)',
                'Payment of interest': 'Every Month',
                'Loan Repayment': 'Every Month',
                'Loan Repayment postponement': '3',
                'Loan Period': '24 Months',
                'Minimum Loan Period': '4 Months',
                Collateral: 'Guarantes/ Surety',
                'Mortgage Rank': 'Other Pledge',
            },
            interestDetails: [
                { from: 100, rate: 13 },
                { from: 500, rate: 13.25 },
                { from: 1500, rate: 13.5 },
                { from: 2500, rate: 14 },
            ],
            repaymentTerms: {
                'Loan Repayment': 'Every Month',
                'Loan Repayment postponement': '3',
                'Loan Period': '24 Months',
                'Minimum Loan Period': '4 Months',
                'Estimated start date of the loan': '2022-01-28',
            },
            elements: [
                'Dépôt de garantie;',
                'Premier mois de loyer;',
                "Frais d'agence éventuels;",
                'Assurance habitation;',
            ],
            avantages: [
                'Maison entièrement rénovée;',
                '3 chambres avec salle de bain privative;',
                'Cuisine ultra-équipée;',
                'Espaces communs optimisés;',
                'Équipements complets dans chaque chambre;',
                'Buanderie dédiée;',
                'Convivialité et sérénité;',
            ],
            conditions: [
                {
                    icon: 'D', // pour "Durée"
                    label: 'Durée max. du bail',
                    value: '12 mois',
                },
                {
                    icon: 'G', // pour "Garantie"
                    label: 'Garantie',
                    value: 'Visale ou garant familial',
                },
                {
                    icon: '€', // pour "Dossier"
                    label: 'Dossier',
                    value: 'Complet et conforme',
                },
            ]
        };
    },

};
</script>

<style scoped>
/* Ajoutez ici les styles personnalisés si nécessaire */
.details__intro {
    margin-bottom: 40px;
    margin-top: 40px;
}


.details__block {
    margin-bottom: 40px;
    margin-top: 40px;
    padding-top: 12px;
}

.details__block h5 {
    color: #13216e;
}

.bailleur h5 {
    color: #13216e;
}





.bailleur {
    padding: 40px !important;
    display: flex;
    flex-direction: row;
    gap: 24px;
}

.bailleur_block_image {
    width: 124px;
}

.bailleur_block_body {
    flex: 1;
}

.bailleur_block_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.bailleur_block_header .button {
    padding: 14px 30px 16px;
    background-color: #fff;
    color: #13216e;
}

.bailleur_image {
    border-radius: 50%;
    height: 124px;
    width: 124px;
    background-color: #aaaaaa;
}

.bailleur_block_content {}









.singl {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 8px;
}

.singl__wrapper {
    margin: 22px 0px;
}


.rental-conditions {
    padding: 1rem;
}

.condition-title {
    background-color: #e0ecff;
    color: #003399;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: inline-block;
}

.condition-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 24px;

}

.condition-card {
    flex: 1 1 200px;
    background-color: #f0f8fa;
    border-radius: 12px;
    padding: 2.7rem;
    text-align: center;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.condition-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background-color: #e0e7ff;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    color: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
}

.condition-label {
    color: #334155;
    font-size: 0.9rem;
}

.condition-value {
    font-size: 1.1rem;
    font-weight: bold;
    color: #0f172a;
    text-align: inherit;
}










.chambre-card {
    display: flex;
    flex-wrap: wrap;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
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
    flex: 2 1 400px;
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
    margin-bottom: 20px;
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
    flex: 1
}

.btn-blanc {
    padding: 14px 30px 16px;
    background-color: #fff;
    color: #13216e;
    height: 52px;
    font-size: 12px;
}

.chambre-block h5 {
    margin-bottom: 24px;
}

.equipement-item  span {
    font-size: 0.6em;
    line-height: 16px;
}

.details{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail-row-item{
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

.detail-row-item span{
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: 0.8em;
    line-height: 16px;
}

.detail-row-item strong{
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: 0.8em;
    line-height: 16px;
}

.dot-green{
    background-color: #28a745;
    border-radius: 100%;
    width: 10px;
    height: 10px;
}

/* 
.image-placeholder {
    background: #888;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 24px;
}








.subtitle {
    color: #666;
}

.equipements h3 {
    margin-bottom: 4px;
}

.equipement-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.icon-placeholder {
    width: 24px;
    height: 24px;
    background-color: #ccc;
    border-radius: 4px;
}

.see-all {
    align-self: start;
    background: #f2f2f2;
    border: none;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.detail-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9em;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.green {
    background-color: #21c55d;
}

.rent-button {
    align-self: flex-start;
    background: linear-gradient(90deg, #6c63ff, #8c5fff);
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.rent-button:hover {
    filter: brightness(1.1);
} */

/* Responsive */
/* @media (max-width: 768px) {
    .chambre-card {
        flex-direction: column;
    }

    .image-section {
        flex-direction: row;
        justify-content: space-around;
    }

    .info-section {
        padding: 16px;
    }
} */
</style>
