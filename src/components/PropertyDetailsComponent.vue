<template>
    <div class="p__details__content">
        <a href="#gallery" class="button button--effect button--secondary">
            <i class="fa-solid fa-images"></i> Voir la galerie
        </a>

        <div class="intro">
            <div>
                <span class="secondary details__color">Professionnel</span>
                <h3>Colocation - Moulin, Lille</h3>
                <p>
                    Meublé • Studio au T3 • de 19m<sup>2</sup> à 50m<sup>2</sup>
                </p>
            </div>

            <hr class="details__intro" />

            <div>
                <h4>Description</h4>
                <p>
                    Maison composée d'un RDc comprenant une cuisine entièrement équipée
                    ouverte sur un salon. La cuisine se compose d'un lave-vaisselle, d’un réfrigérateur, d’un
                    micro-ondes,
                    d’un four, de plaques de cuisson et d’une hotte. Le salon est équipé d’un canapé, d’une table basse
                    et
                    d’une télévision. Le premier étage comprend 3 chambres avec salle de bain privative et un bureau. Le
                    deuxième étage comprend 2 chambres avec salle de bain privative et un espace détente.
                </p>

                <div class="group__one">
                    <div class="map__wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                            width="746" height="312" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>Les points forts de cette colocation:</h5>
                <AvantagesList :avantages="avantages" />
            </div>

            <div class="details__block">
                <h5>Les principales conditions pour louer ce logement:</h5>
                <div class="condition-cards">
                    <div class="condition-card" v-for="(item, index) in conditions" :key="index">
                        <div class="condition-icon">{{ item.icon }}</div>
                        <p class="condition-label">{{ item.label }}</p>
                        <p class="condition-value">{{ item.value }}</p>
                    </div>
                </div>
            </div>

            <div class="details__block">
                <h5>Les principaux éléments financiers à anticiper:</h5>
                <AvantagesList :avantages="elements" />
            </div>
        </div>

        <div class="group__one">
            <div class="tabular__group bailleur">
                <div class="bailleur_block_image">
                    <div class="bailleur_image"></div>
                </div>
                <div class="bailleur_block_body">
                    <div class="bailleur_block_header">
                        <h5>Jean Marck (bailleur)</h5>
                        <div class="invest__cta">
                            <a href="/logement/6d1b65aa-6437-3000-8bc2-651b06265bbf" class="button button--effect">
                                + d'info
                            </a>
                        </div>
                    </div>
                    <div class="bailleur_block_content">
                        <p class="neutral-bottom">
                            "Bailleur privé expérimenté, attentif à la qualité de ses
                            biens et du confort de ses locataires. Propose des
                            logements rénovés, bien entretenus, dans un cadre sécurisé et convivial. Disponible et
                            réactif pour
                            assurer une gestion locative fluide et sereine."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AvantagesList from '@/components/AvantagesList.vue'


const avantages = ref([
    'Maison entièrement rénovée;',
    '3 chambres avec salle de bain privative;',
    'Cuisine ultra-équipée;',
    'Espaces communs optimisés;',
    'Équipements complets dans chaque chambre;',
    'Buanderie dédiée;',
    'Convivialité et sérénité;',
])

const conditions = ref([
    {
        icon: 'D',
        label: 'Durée max. du bail',
        value: '12 mois',
    },
    {
        icon: 'G',
        label: 'Garantie',
        value: 'Visale ou garant familial',
    },
    {
        icon: '€',
        label: 'Dossier',
        value: 'Complet et conforme',
    },
])

const elements = ref([
    'Dépôt de garantie;',
    'Premier mois de loyer;',
    "Frais d'agence éventuels;",
    'Assurance habitation;',
])
</script>

<style scoped>
/* Tes styles sont conservés sans modification */
.details__intro {
    margin-bottom: 40px;
    margin-top: 40px;
}

.details__block {
    margin-bottom: 40px;
    margin-top: 40px;
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
    display: flex;
    flex-direction: column;
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
</style>